export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${env.LASTFM_USER}&api_key=${env.LASTFM_API_KEY}&format=json&limit=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'max-age=30',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
