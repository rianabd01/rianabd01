export default defineEventHandler(async (event) => {
	// Set cache control headers to prevent caching
	event.node.res.setHeader(
		"Cache-Control",
		"no-cache, no-store, must-revalidate",
	);
	event.node.res.setHeader("Pragma", "no-cache");
	event.node.res.setHeader("Expires", "0");
	event.node.res.setHeader("Surrogate-Control", "no-store");

	try {
		const config = useRuntimeConfig(event);
		const token =
			config.githubApiToken ||
			process.env.GITHUB_API_TOKEN ||
			process.env.GITHUB_TOKEN;

		// Add a timestamp to the request to bust any possible caching
		const timestamp = Date.now();
		const url = `https://api.github.com/users/rianabd01/repos?sort=pushed&direction=desc&per_page=100&timestamp=${timestamp}`;

		const headers: Record<string, string> = {
			"User-Agent": "portfolio-website",
			Accept: "application/vnd.github.v3+json",
		};

		if (token) {
			headers.Authorization = `Bearer ${token}`;
		}

		// Fetch repositories from GitHub API with cache busting
		const response = await fetch(url, { headers });

		if (!response.ok) {
			throw new Error(`GitHub API responded with status ${response.status}`);
		}

		const repos = await response.json();

		// Filter repositories that have "portofolio" in their topics
		const portfolioRepos = repos.filter((repo: any) => {
			return (
				repo.topics &&
				Array.isArray(repo.topics) &&
				repo.topics.includes("portofolio")
			);
		});

		// Map to the format we want to use in the frontend
		const projects = portfolioRepos.map((repo: any) => ({
			id: repo.id,
			name: repo.name,
			description: repo.description,
			topics: repo.topics || [],
			html_url: repo.html_url,
			homepage: repo.homepage,
			stargazers_count: repo.stargazers_count,
			language: repo.language,
			updated_at: repo.pushed_at || repo.updated_at,
		}));

		return {
			success: true,
			projects,
			timestamp: new Date().toISOString(),
			fetchedAt: Date.now(),
		};
	} catch (error: any) {
		console.error("Error fetching GitHub repositories:", error);
		return {
			success: false,
			error: error.message || "Failed to fetch projects",
			projects: [],
			timestamp: new Date().toISOString(),
			fetchedAt: Date.now(),
		};
	}
});
