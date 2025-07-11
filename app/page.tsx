import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Masthead */}
      <header className="bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-6xl font-bold font-serif text-black mb-2">RAKSHA RAMESH</h1>
            <p className="text-lg text-gray-600 font-serif italic">AI Engineer & Software Development Specialist</p>
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
                        <span className="text-4xl font-bold float-left mr-2 leading-none">A</span>s an AI Engineer and
                        Software Development Specialist, my work is centered on machine learning, cloud infrastructure,
                        and designing scalable systems. I'm currently pursuing my Master's in Computer Science with a
                        focus on AI at the University of Pennsylvania, where I'm digging deep into the next wave of
                        technology.
                      </p>
                      <p className="mb-4 text-sm leading-relaxed">
                        I have a proven track record of delivering high-impact solutions. During my time at Walmart
                        Global Tech, I was proud to help reduce system outages by 15%, which translated to an estimated
                        $15 million in savings. My passion for research also led to a published paper in IEEE, where my
                        work on abnormality detection in EEG recordings achieved 90.78% classification accuracy.
                      </p>
                      <p className="mb-4 text-sm leading-relaxed">
                        I'm driven by the challenge of solving complex, real-world problems with cutting-edge AI. This
                        digital space is where I document my professional journey and share what I'm learning along the
                        way. Thank you for visiting.
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
                    <Link href="mailto:rakshar@seas.upenn.edu">
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
