export const explorePopularRepos = async (req, res) => {
    const { language } = req.params;
  
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`,
        {
          headers: {
            Authorization: `token ${process.env.VITE_GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
  
      const data = await response.json(); // ✅ fixed
  
      res.status(200).json(data.items);
    } catch (error) {
      console.error("Error fetching popular repos:", error); // ✅ log the error
      res.status(500).json({ error: "Failed to fetch popular repositories" }); // ✅ send error response
    }
  };
  