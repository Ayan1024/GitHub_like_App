// Assuming you're using Express and Node.js (ES module)


export const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const userProfile = await userRes.json();

    if (userProfile.message === "Not Found") {
      return res.status(404).json({ userProfile, repos: [] });
    }

    const reposRes = await fetch(userProfile.repos_url, {
        headers: {
            
            Authorization: `token ${process.env.VITE_GITHUB_TOKEN}`,
        }
    });
    const repos = await reposRes.json();

    return res.status(200).json({ userProfile, repos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
