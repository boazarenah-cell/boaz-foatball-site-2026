
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/matches") {
      const response = await fetch(
        "https://api.football-data.org/v4/matches",
        {
          headers: {
            "X-Auth-Token": env.FOOTBALL_API_KEY
          }
        }
      );

      return new Response(await response.text(), {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
