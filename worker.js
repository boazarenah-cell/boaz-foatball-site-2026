
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
    };

    // Handle browser CORS requests
    if (url.pathname === "/api/matches") {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: corsHeaders
        });
      }

      if (request.method !== "GET") {
        return new Response(
          JSON.stringify({ error: "Method not allowed" }),
          { status: 405, headers: corsHeaders }
        );
      }

      // Check that the football API key exists
      if (!env.FOOTBALL_API_KEY) {
        return new Response(
          JSON.stringify({ error: "Football API key is missing" }),
          { status: 500, headers: corsHeaders }
        );
      }

      const dateFrom = url.searchParams.get("dateFrom");
      const dateTo = url.searchParams.get("dateTo");

      const validDate = value =>
        /^\d{4}-\d{2}-\d{2}$/.test(value || "");

      if (!validDate(dateFrom) || !validDate(dateTo)) {
        return new Response(
          JSON.stringify({ error: "Invalid date format" }),
          { status: 400, headers: corsHeaders }
        );
      }

      if (dateFrom > dateTo) {
        return new Response(
          JSON.stringify({ error: "Start date must come before end date" }),
          { status: 400, headers: corsHeaders }
        );
      }

      try {
        const apiUrl = new URL(
          "https://api.football-data.org/v4/matches"
        );

        apiUrl.searchParams.set("dateFrom", dateFrom);
        apiUrl.searchParams.set("dateTo", dateTo);

        const apiResponse = await fetch(apiUrl.toString(), {
          headers: {
            "X-Auth-Token": env.FOOTBALL_API_KEY
          }
        });

        const responseBody = await apiResponse.text();

        return new Response(responseBody, {
          status: apiResponse.status,
          headers: {
            ...corsHeaders,
            "Cache-Control": "no-store"
          }
        });

      } catch (error) {
        return new Response(
          JSON.stringify({
            error: "Unable to connect to football data service"
          }),
          { status: 502, headers: corsHeaders }
        );
      }
    }

    // Serve website files where the assets binding is available
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("BOAZ FOOTBALL API is running!", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
