import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Github, Star, GitFork, ExternalLink, Users, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface GitHubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

// Replace with your GitHub username
const GITHUB_USERNAME = "pusparaj-sahu";

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Java: "bg-orange-500",
  HTML: "bg-red-500",
  CSS: "bg-purple-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-600",
  PHP: "bg-indigo-400",
  Ruby: "bg-red-600",
  "C++": "bg-pink-500",
  C: "bg-gray-500",
  "C#": "bg-green-600",
  Kotlin: "bg-purple-400",
};

const GitHubActivity = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError("Unable to load GitHub data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <section
      id="github"
      ref={elementRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/5">
            <Github className="w-4 h-4 mr-2" />
            {t("github.badge", "Open Source")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t("github.title", "GitHub Activity")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("github.subtitle", "My open source contributions and recent projects")}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-muted-foreground">{error}</div>
        ) : (
          <>
            {/* User Stats */}
            {user && (
              <div
                className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-12 h-12 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
                  />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      @{user.login}
                    </p>
                    <p className="text-sm text-muted-foreground">View Profile</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-bold text-xl text-foreground">{user.public_repos}</p>
                    <p className="text-sm text-muted-foreground">{t("github.repos", "Repositories")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-bold text-xl text-foreground">{user.followers}</p>
                    <p className="text-sm text-muted-foreground">{t("github.followers", "Followers")}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Repositories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate max-w-[180px]">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
                    {repo.description || "No description available"}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-3 h-3 rounded-full ${
                              languageColors[repo.language] || "bg-gray-400"
                            }`}
                          />
                          <span className="text-xs text-muted-foreground">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Star className="w-3.5 h-3.5" />
                        <span className="text-xs">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <GitFork className="w-3.5 h-3.5" />
                        <span className="text-xs">{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border/50">
                    Updated {formatDate(repo.updated_at)}
                  </p>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubActivity;
