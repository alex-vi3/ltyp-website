exports.handler = async () => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri =
    "https://letrait-yainville-pongiste.fr/.netlify/functions/callback";

  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=public_repo`;

  return {
    statusCode: 302,
    headers: {
      Location: githubAuthUrl,
    },
  };
};
