import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Exploring the latest trends shaping the web development landscape, from AI integration to new frameworks and tools that are revolutionizing how we build applications.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Applications: Lessons from the Trenches",
      excerpt:
        "Real-world insights on architecting applications that can handle millions of users, based on experiences from building large-scale systems.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Engineering",
      featured: false,
    },
    {
      id: 3,
      title: "The Art of Code Reviews: Best Practices for Team Collaboration",
      excerpt:
        "How to conduct effective code reviews that improve code quality while fostering a positive team culture and continuous learning environment.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Team Management",
      featured: false,
    },
    {
      id: 4,
      title: "From Idea to Production: A Complete Development Workflow",
      excerpt:
        "A comprehensive guide to taking a project from initial concept through design, development, testing, and deployment to production.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Process",
      featured: false,
    },
    {
      id: 5,
      title: "Why I Chose Next.js for My Latest Project",
      excerpt:
        "An in-depth analysis of why Next.js was the perfect choice for a recent project, covering performance, developer experience, and deployment benefits.",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Technology",
      featured: false,
    },
  ]

  const categories = ["All", "Technology", "Engineering", "Team Management", "Process"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button variant="outline" className="border-black" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Newsroom
              </Link>
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold font-serif text-black">EDITORIAL COLUMN</h1>
              <p className="text-sm text-gray-600 font-serif italic">Insights, Opinions & Technical Commentary</p>
            </div>
            <div className="w-32"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8">
            <Card className="border-2 border-black">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={category === "All" ? "default" : "outline"}
                      size="sm"
                      className={
                        category === "All" ? "bg-black text-white" : "border-black hover:bg-black hover:text-white"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Article */}
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <Card key={post.id} className="border-2 border-black mb-8">
                    <CardHeader className="border-b-2 border-black">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-red-600 text-white">FEATURED</Badge>
                        <Badge variant="outline" className="border-black">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="font-serif text-2xl leading-tight">{post.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          Editor-in-Chief
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-sm leading-relaxed text-justify mb-4">{post.excerpt}</p>
                      <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                        Read Full Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}

              {/* Regular Articles */}
              <div className="space-y-6">
                {blogPosts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <Card key={post.id} className="border-2 border-black">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="border-black">
                            {post.category}
                          </Badge>
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-2 leading-tight">{post.title}</h3>
                        <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-justify mb-4">{post.excerpt}</p>
                        <Button variant="outline" size="sm" className="border-black hover:bg-black hover:text-white">
                          Continue Reading
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* About the Editor */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-xl">ABOUT THE EDITOR</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm leading-relaxed mb-4">
                    Welcome to my editorial column! Here I share insights from my journey in software development,
                    lessons learned from building scalable applications, and thoughts on the ever-evolving tech
                    landscape.
                  </p>
                  <Button variant="outline" size="sm" className="border-black hover:bg-black hover:text-white" asChild>
                    <Link href="/">Meet the Editor</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Popular Topics */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-xl">POPULAR TOPICS</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {[
                      "React & Next.js",
                      "System Architecture",
                      "Code Quality",
                      "Team Leadership",
                      "DevOps & Deployment",
                    ].map((topic) => (
                      <div key={topic} className="flex justify-between items-center text-sm">
                        <span>{topic}</span>
                        <Badge variant="outline" className="border-black text-xs">
                          {Math.floor(Math.random() * 10) + 1}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border-2 border-black bg-gray-100">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-xl">SUBSCRIBE TO UPDATES</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm mb-4">
                    Get the latest articles delivered directly to your inbox. No spam, just quality content.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full p-2 border-2 border-black text-sm"
                    />
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Archive */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-xl">ARCHIVE</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>January 2024</span>
                      <span className="font-semibold">3 posts</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>December 2023</span>
                      <span className="font-semibold">2 posts</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>November 2023</span>
                      <span className="font-semibold">4 posts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
