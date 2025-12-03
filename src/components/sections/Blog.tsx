import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  tags: string[];
  link: string;
}

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: t("blog.posts.post1.title"),
      excerpt: t("blog.posts.post1.excerpt"),
      category: t("blog.posts.post1.category"),
      readTime: "5 min",
      date: "2024-12-01",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
      tags: ["React", "Performance", "Optimization"],
      link: "#"
    },
    {
      id: 2,
      title: t("blog.posts.post2.title"),
      excerpt: t("blog.posts.post2.excerpt"),
      category: t("blog.posts.post2.category"),
      readTime: "8 min",
      date: "2024-11-15",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
      tags: ["TypeScript", "Backend", "APIs"],
      link: "#"
    },
    {
      id: 3,
      title: t("blog.posts.post3.title"),
      excerpt: t("blog.posts.post3.excerpt"),
      category: t("blog.posts.post3.category"),
      readTime: "6 min",
      date: "2024-11-01",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      tags: ["DevOps", "Docker", "CI/CD"],
      link: "#"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <section id="blog" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/30 text-primary">
            <BookOpen className="w-4 h-4 mr-2" />
            {t("blog.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t("blog.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary/90 hover:bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
              </div>

              <CardHeader className="space-y-3">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 hover:bg-secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {t("blog.readMore")}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="group border-primary/30 hover:bg-primary hover:text-primary-foreground"
          >
            {t("blog.viewAll")}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
