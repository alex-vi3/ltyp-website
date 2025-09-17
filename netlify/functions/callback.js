const fetch = require("node-fetch");

exports.handler = async (event) => {
  const code = event.queryStringParameters.code;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const data = await response.json();

  if (!data.access_token) {
    return {
      statusCode: 400,
      body: "Erreur : token GitHub non reçu",
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `
      <html>
        <body>
          <script>
            // Attendre que la fenêtre parent soit prête
            setTimeout(function() {
              window.opener.postMessage({
                token: '${data.access_token}',
                provider: 'github'
              }, window.opener.location.origin);
              window.close();
            }, 200);
          </script>
        </body>
      </html>
    `,
  };
};
