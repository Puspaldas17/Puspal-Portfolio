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
const GITHUB_USERNAME = "Puspaldas17";

// Fallback data when API is rate limited
const fallbackUser: GitHubUser = {
  login: "Puspaldas17",
  avatar_url: "https://avatars.githubusercontent.com/u/147488708?v=4",
  public_repos: 10,
  followers: 6,
  following: 27,
  html_url: "https://github.com/Puspaldas17"
};

const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "Redis-Server",
    description: "Custom Redis server implementation built from scratch with in-memory key-value storage and RESP protocol support.",
    html_url: "https://github.com/Puspaldas17/Redis-Server",
    stargazers_count: 0,
    forks_count: 0,
    language: "C++",
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    name: "TripGenius",
    description: "AI-powered trip planner with weather updates, maps, drag-and-drop calendar, budget tracking, and group collaboration.",
    html_url: "https://github.com/Puspaldas17/TripGenius",
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
    updated_at: new Date().toISOString()
  },
  {
    id: 3,
    name: "Buy-and-Sell-project",
    description: "Secure open marketplace for second-hand goods with item listings, seller contact, and transaction history.",
    html_url: "https://github.com/Puspaldas17/Buy-and-Sell-project",
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
    updated_at: new Date().toISOString()
  },
  {
    id: 4,
    name: "Smart-Crop-Tools",
    description: "Responsive full-stack web app with multilingual voice chatbot, weather alerts, market pricing, and pest detection.",
    html_url: "https://github.com/Puspaldas17/Smart-Crop-Tools",
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
    updated_at: new Date().toISOString()
  },
  {
    id: 5,
    name: "Puspal-Portfolio",
    description: "Modern responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite.",
    html_url: "https://github.com/Puspaldas17/Puspal-Portfolio",
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
    updated_at: new Date().toISOString()
  },
  {
    id: 6,
    name: "RPS-Challenge",
    description: "Stone Paper Scissors game implemented as a web application using HTML, CSS, and JavaScript.",
    html_url: "https://github.com/Puspaldas17/RPS-Challenge",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    updated_at: new Date().toISOString()
  }
];

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

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          // Use fallback data when rate limited
          setUser(fallbackUser);
          setRepos(fallbackRepos);
          return;
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        // Use fallback data on error
        setUser(fallbackUser);
        setRepos(fallbackRepos);
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
      className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="outline" className="mb-3 xs:mb-4 px-3 xs:px-4 py-1 xs:py-1.5 text-xs xs:text-sm font-medium border-primary/30 bg-primary/5">
            <Github className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
            {t("github.badge", "Open Source")}
          </Badge>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t("github.title", "GitHub Activity")}
            </span>
          </h2>
          <p className="text-muted-foreground text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4 xs:px-0">
            {t("github.subtitle", "My open source contributions and recent projects")}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* User Stats */}
            {user && (
              <div
                className={`flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 mb-8 xs:mb-10 sm:mb-12 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-center gap-2 xs:gap-3 px-4 xs:px-5 sm:px-6 py-3 xs:py-4 rounded-xl xs:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <BookOpen className="w-4 h-4 xs:w-5 xs:h-5 text-primary" />
                  <div>
                    <p className="font-bold text-base xs:text-lg sm:text-xl text-foreground">{user.public_repos}</p>
                    <p className="text-xs xs:text-sm text-muted-foreground">{t("github.repos", "Repositories")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 xs:gap-3 px-4 xs:px-5 sm:px-6 py-3 xs:py-4 rounded-xl xs:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <Users className="w-4 h-4 xs:w-5 xs:h-5 text-primary" />
                  <div>
                    <p className="font-bold text-base xs:text-lg sm:text-xl text-foreground">{user.followers}</p>
                    <p className="text-xs xs:text-sm text-muted-foreground">{t("github.followers", "Followers")}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Repositories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
              {repos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 xs:p-5 sm:p-6 rounded-xl xs:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2 xs:mb-3">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <Github className="w-4 h-4 xs:w-5 xs:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      <h3 className="font-semibold text-sm xs:text-base text-foreground group-hover:text-primary transition-colors truncate">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                  </div>

                  <p className="text-xs xs:text-sm text-muted-foreground mb-3 xs:mb-4 line-clamp-2 min-h-[32px] xs:min-h-[40px]">
                    {repo.description || "No description available"}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 xs:gap-4 flex-wrap">
                      {repo.language && (
                        <div className="flex items-center gap-1 xs:gap-1.5">
                          <span
                            className={`w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full ${
                              languageColors[repo.language] || "bg-gray-400"
                            }`}
                          />
                          <span className="text-[10px] xs:text-xs text-muted-foreground">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                        <span className="text-[10px] xs:text-xs">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <GitFork className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                        <span className="text-[10px] xs:text-xs">{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] xs:text-xs text-muted-foreground mt-2 xs:mt-3 pt-2 xs:pt-3 border-t border-border/50">
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
