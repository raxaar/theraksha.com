import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Masthead */}
      <header className="bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-6xl font-bold font-serif text-black mb-2">THE DAILY YOU</h1>
            <p className="text-lg text-gray-600 font-serif italic">Personal Chronicles & Professional Pursuits</p>
            <div className="flex justify-center items-center gap-4 mt-4 text-sm">
              <span>Vol. 1, No. 1</span>
              <Separator orientation="vertical" className="h-4" />
              <span>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-3">
            <Link href="/" className="hover:text-red-500 font-semibold">
              HOME
            </Link>
            <Link href="/cv" className="hover:text-red-500 font-semibold">
              CURRICULUM VITAE
            </Link>
            <Link href="/blog" className="hover:text-red-500 font-semibold">
              EDITORIAL
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story - About Section */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-black">
              <CardContent className="p-6">
                <div className="border-b-2 border-black pb-4 mb-6">
                  <h2 className="text-4xl font-bold font-serif text-black mb-2">MEET THE EDITOR-IN-CHIEF</h2>
                  <p className="text-sm text-gray-600 font-semibold">EXCLUSIVE INTERVIEW • FRONT PAGE NEWS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="border-2 border-black p-2 bg-white">
                      <Image
                        src="/placeholder.svg?height=300&width=250"
                        alt="Your professional photo"
                        width={250}
                        height={300}
                        className="w-full h-auto grayscale"
                      />
                      <p className="text-xs text-center mt-2 font-serif italic">Editor-in-Chief at work</p>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="columns-1 md:columns-2 gap-6 text-justify">
                      <p className="mb-4 text-sm leading-relaxed">
                        <span className="text-4xl font-bold float-left mr-2 leading-none">W</span>
                        elcome to my digital newsroom! I'm a passionate professional dedicated to crafting exceptional
                        experiences and telling compelling stories through code and creativity. With a background
                        spanning multiple disciplines, I bring a unique perspective to every project I undertake.
                      </p>

                      <p className="mb-4 text-sm leading-relaxed">
                        My journey began in the world of technology, where I discovered my love for problem-solving and
                        innovation. Over the years, I've honed my skills in various domains, always staying curious and
                        eager to learn new things.
                      </p>

                      <p className="mb-4 text-sm leading-relaxed">
                        When I'm not coding or working on projects, you can find me exploring new technologies, reading
                        about industry trends, or sharing insights with the community. I believe in the power of
                        collaboration and continuous learning.
                      </p>

                      <p className="text-sm leading-relaxed">
                        This website serves as my digital headquarters, where I share my professional journey, thoughts,
                        and connect with like-minded individuals. Feel free to explore and don't hesitate to reach out!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Media Links */}
            <Card className="border-2 border-black">
              <CardContent className="p-4">
                <div className="border-b-2 border-black pb-2 mb-4">
                  <h3 className="text-xl font-bold font-serif text-black">CONNECT WITH THE NEWSROOM</h3>
                </div>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-black hover:bg-black hover:text-white"
                    asChild
                  >
                    <Link href="https://github.com" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Bureau
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-black hover:bg-black hover:text-white"
                    asChild
                  >
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Professional Network
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-black hover:bg-black hover:text-white"
                    asChild
                  >
                    <Link href="https://twitter.com" target="_blank">
                      <Twitter className="mr-2 h-4 w-4" />
                      Wire Service
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-black hover:bg-black hover:text-white"
                    asChild
                  >
                    <Link href="mailto:your.email@example.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Press Inquiries
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-2 border-black">
              <CardContent className="p-4">
                <div className="border-b-2 border-black pb-2 mb-4">
                  <h3 className="text-xl font-bold font-serif text-black">SPECIAL EDITIONS</h3>
                </div>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-between border-black hover:bg-red-600 hover:text-white"
                    asChild
                  >
                    <Link href="/cv">
                      Professional Resume
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-between border-black hover:bg-red-600 hover:text-white"
                    asChild
                  >
                    <Link href="/blog">
                      Editorial Column
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weather/Quote Box */}
            <Card className="border-2 border-black bg-gray-100">
              <CardContent className="p-4">
                <div className="border-b-2 border-black pb-2 mb-4">
                  <h3 className="text-lg font-bold font-serif text-black">TODAY'S INSPIRATION</h3>
                </div>
                <blockquote className="text-sm italic text-center">
                  "The best way to predict the future is to create it."
                  <footer className="text-xs mt-2 font-semibold">— Peter Drucker</footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm">© {new Date().getFullYear()} The Daily You. All rights reserved.</p>
            <p className="text-xs mt-2 text-gray-400">Published daily from the digital newsroom</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
