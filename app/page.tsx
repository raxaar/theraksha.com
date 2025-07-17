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
            <p className="text-lg text-gray-600 font-serif italic">Hopeful by design, stubborn by default.</p>
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

                <div className="relative">
                  {/* Photo box */}
                  <figure className="md:float-left md:mr-6 md:mb-4 md:w-[250px] max-w-[250px]">
                    <div className="border-2 border-black p-2 bg-white">
                      <Image
                        src="/images/IMG-20210207-WA0000_Original Copy.JPG"  // put the file in /public/images
                        alt="Your professional photo"
                        width={250}
                        height={300}
                        className="w-full h-auto grayscale"
                      />
                      <figcaption className="text-xs text-center mt-2 font-serif italic">
                        Editor-in-Chief at work
                      </figcaption>
                    </div>
                  </figure>

                  {/* Copy */}
                  <div className="columns-1 md:columns-2 gap-6 text-justify">
                    <p className="mb-4 text-sm leading-relaxed">
                      <span className="text-4xl font-bold float-left mr-2 leading-none">P</span>
                      eople who know me would tell you I’m a bit too much—too passionate, too intense, too optimistic. But honestly? That’s what makes life fun. And it’s what’s gotten me here.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      I was deep in med school prep when I had a realization: if I kept going, I might end up diagnosing patients alongside AI. That didn’t freak me out, it lit me up. I didn’t want to compete with the future. I wanted to build it. So I changed course, and I’ve been chasing the most interesting problems in tech ever since.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      Since then, I’ve worked on EEG models to help doctors make better calls, built backend systems that power Walmart’s e-commerce platform, and now I’m using GenAI to untangle messy insurance data at Crum &amp; Forster. Basically: if there’s complexity, cross-functionality, or chaos – I’m probably in the middle of it, grinning.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      I love work that sits at the intersection: where engineering meets empathy, where product meets people, where “how” and “why” go out for coffee. I’ve written code, led teams, run user interviews, and shipped MVPs that actually work. At Penn, where I’m wrapping up my Master’s in Computer and Information Science, I’m also a Head TA, PMing five senior project teams and helping them go from “we think this is cool” to “here’s our launch link.”
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      Along the way, I’ve stayed rooted in something just as important to me: expanding access. Back in undergrad, I chaired my university’s ACM-W chapter, helping first-year women in tech find their footing. I also volunteered with U&amp;I Trust, where I led a small team teaching English to over 20 girls from underserved communities in India. That work gave me perspective and reminded me that sometimes, the simplest thing you can offer is belief.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      But the things I build outside of work say just as much about me.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      I built an AI-powered comic diary to explore how memory and machine learning could tell stories together. I made a mini-operating system just to understand what abstraction feels like from the ground up. I love learning things that have nothing to do with each other, and watching what happens when they collide.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      Lately, I’ve been deep into chess, crochet, and psychology. I’m reading *Think* by Simon Blackburn and *Midnight’s Children* by Salman Rushdie—one for perspective, the other for wonder. I used to run a little music channel on YouTube, and while I don’t post anymore, that creative spark still shows up everywhere in my work.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      I learn fast. I go all in. I ask too many questions. And I really, really love connecting the dots.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      If you’re building something meaningful, messy, or just a little magical—say hi!
                    </p>
                  </div>

                  {/* Clear the float so later sections don't slide up */}
                  <div className="clear-both" />
                </div>

                <div className="md:col-span-1">
                  <div className="border-2 border-black p-2 bg-white">
                    <Image
                      src="/Users/rakshar/Desktop/theraksha.com/app/images/IMG-20210207-WA0000_Original Copy.JPG"
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
                      <span className="text-4xl font-bold float-left mr-2 leading-none">P</span>eople who know me would tell you I’m a bit too much—too passionate, too intense, too optimistic. But honestly? That’s what makes life fun. And it’s what’s gotten me here.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      I was deep in med school prep when I had a realization: if I kept going, I might end up diagnosing patients alongside AI. That didn’t freak me out, it lit me up. I didn’t want to compete with the future. I wanted to build it. So I changed course, and I’ve been chasing the most interesting problems in tech ever since.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      Since then, I’ve worked on EEG models to help doctors make better calls, built backend systems that power Walmart’s e-commerce platform, and now I’m using GenAI to untangle messy insurance data at Crum & Forster. Basically: if there’s complexity, cross-functionality, or chaos - I’m probably in the middle of it, grinning.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      I love work that sits at the intersection: where engineering meets empathy, where product meets people, where “how” and “why” go out for coffee. I’ve written code, led teams, run user interviews, and shipped MVPs that actually work. At Penn, where I’m wrapping up my Master’s in Computer and Information Science, I’m also a Head TA, PMing five senior project teams and helping them go from “we think this is cool” to “here’s our launch link.”
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      Along the way, I’ve stayed rooted in something just as important to me: expanding access. Back in undergrad, I chaired my university’s ACM-W chapter, helping first-year women in tech find their footing. I also volunteered with U&I Trust, where I led a small team teaching English to over 20 girls from underserved communities in India. That work gave me perspective and reminded me that sometimes, the simplest thing you can offer is belief.

                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      But the things I build outside of work say just as much about me.

                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      I built an AI-powered comic diary to explore how memory and machine learning could tell stories together. I made a mini-operating system just to understand what abstraction feels like from the ground up. I love learning things that have nothing to do with each other, and watching what happens when they collide.
                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      Lately, I’ve been deep into chess, crochet, and psychology. I’m reading Think by Simon Blackburn and Midnight’s Children by Salman Rushdie- one for perspective, the other for wonder. I used to run a little music channel on YouTube, and while I don’t post anymore, that creative spark still shows up everywhere in my work.

                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      I learn fast. I go all in. I ask too many questions. And I really, really love connecting the dots.

                    </p>
                    <p className="mb-4 text-sm leading-relaxed">
                      If you’re building something meaningful, messy, or just a little magical- say hi!
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
      </main >

    {/* Footer */ }
    < footer className = "bg-black text-white mt-12" >
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} The Daily You. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-400">Published daily from the digital newsroom</p>
        </div>
      </div>
      </footer >
    </div >
  )
}
