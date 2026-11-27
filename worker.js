
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Football API
    if (url.pathname === "/api/matches") {
      try {
        const response = await fetch(
          "https://api.football-data.org/v4/matches",
          {
            headers: {
              "X-Auth-Token": env.FOOTBALL_API_KEY
            }
          }
        );

        const data = await response.text();

        return new Response(data, {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });

      } catch (error) {
        return Response.json({
          error: "Football API connection failed",
          details: error.message
        }, { status: 500 });
      }
    }

    // Serve website files
    return env.ASSETS.fetch(request);
  }
};
