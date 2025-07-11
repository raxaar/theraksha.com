import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react"

export default function CVPage() {
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
              <h1 className="text-4xl font-bold font-serif text-black">CURRICULUM VITAE</h1>
              <p className="text-sm text-gray-600 font-serif italic">Professional Chronicle & Career Highlights</p>
            </div>
            <Button variant="outline" className="border-black">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <Card className="border-2 border-black mb-6">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold font-serif text-black mb-2">RAKSHA RAMESH</h2>
                <p className="text-lg text-gray-600 font-serif">AI Engineer & Software Development Specialist</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4" />
                  rakshar@seas.upenn.edu
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Philadelphia, PA
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Professional Summary */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-2xl">EXECUTIVE SUMMARY</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm leading-relaxed text-justify">
                    AI Engineer and Software Development Specialist with expertise in machine learning, cloud
                    infrastructure, and scalable system design. Currently pursuing Master's in Computer Science with AI
                    concentration at University of Pennsylvania (GPA: 3.88/4.0). Proven track record of delivering
                    high-impact solutions at scale, including reducing system outages by 15% (~$15M savings) at Walmart
                    and achieving 90.78% classification accuracy in published IEEE research. Passionate about leveraging
                    cutting-edge AI technologies to solve complex real-world problems.
                  </p>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-2xl">PROFESSIONAL EXPERIENCE</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">Data Science Intern</h3>
                        <p className="text-gray-600 font-semibold">Crum & Forster</p>
                      </div>
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1">June 2025 - Present</span>
                    </div>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Redesigned and migrated Python-based ML pipeline from Serverless Framework to AWS CDK</li>
                      <li>
                        • Enabled scalable, event-driven processing of real-time insurance data across cloud-native
                        infrastructure
                      </li>
                      <li>
                        • Spearheading ML-driven document extraction using AWS Textract, Bedrock, and Custom Queries
                      </li>
                      <li>• Automated structured data capture from unstructured insurance supplements</li>
                    </ul>
                  </div>

                  <Separator className="border-black" />

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">Software Development Engineer II</h3>
                        <p className="text-gray-600 font-semibold">Walmart Global Tech</p>
                      </div>
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1">July 2022 - May 2023</span>
                    </div>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>
                        • Orchestrated bi-weekly Agile/Scrum sprints maintaining 20+ mission-critical microservices
                      </li>
                      <li>
                        • Reduced outages by 15% (~$15M savings) implementing rate limiting across five high-traffic
                        microservices
                      </li>
                      <li>
                        • Improved system observability and reduced resolution time by 40% with OpenTelemetry
                        integration
                      </li>
                      <li>
                        • Ensured high system uptime resolving P0/P1 incidents through cross-functional coordination
                      </li>
                    </ul>
                  </div>

                  <Separator className="border-black" />

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">Software Development Intern</h3>
                        <p className="text-gray-600 font-semibold">Walmart Global Tech</p>
                      </div>
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1">Jan 2022 - June 2022</span>
                    </div>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>
                        • Drove end-to-end integration of PowerSport Category vehicles, boosting conversion by 10%
                      </li>
                      <li>
                        • Increased operational visibility across 5 microservices with Grafana and Splunk dashboards
                      </li>
                      <li>• Led testing and deployment of two services with seamless production launches</li>
                    </ul>
                  </div>

                  <Separator className="border-black" />

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">Teaching Assistant / Product Manager</h3>
                        <p className="text-gray-600 font-semibold">University of Pennsylvania</p>
                      </div>
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1">Aug 2024 - Present</span>
                    </div>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Defined product strategy for 5 cross-functional student teams guiding MVP development</li>
                      <li>• Conducted surveys and usability interviews to synthesize actionable requirements</li>
                      <li>• Led weekly stand-ups, managed timelines and budgets, evaluated 20+ product demos</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-2xl">EDUCATION</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">Master of Science in Engineering</h3>
                        <p className="text-gray-600 font-semibold">University of Pennsylvania</p>
                        <p className="text-sm text-gray-500">Computer and Information Science • AI Concentration</p>
                        <p className="text-sm text-gray-500">GPA: 3.88/4.0</p>
                      </div>
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1">Dec 2025</span>
                    </div>

                    <Separator className="border-black" />

                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">Bachelor of Technology</h3>
                        <p className="text-gray-600 font-semibold">PES University</p>
                        <p className="text-sm text-gray-500">Computer Science and Engineering • Bangalore, India</p>
                      </div>
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1">May 2022</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Projects & Publications */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-2xl">PROJECTS & PUBLICATIONS</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">Segment Based Abnormality Detection in EEG Recordings</h3>
                        <p className="text-gray-600 font-semibold">Published in IEEE</p>
                      </div>
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1">Aug 2022</span>
                    </div>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Achieved 90.78% classification accuracy (surpassing SOTA) using EWT + RFE + Linear SVM</li>
                      <li>• Evaluated multiple ML pipelines (EMD, EWT, k-NN, SVM, XGBoost, MLP)</li>
                    </ul>
                  </div>

                  <Separator className="border-black" />

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">DreamBook - AI-Powered Diary Platform</h3>
                        <p className="text-gray-600 font-semibold">Personal Project</p>
                      </div>
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1">Oct - Dec 2024</span>
                    </div>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>
                        • Built AI platform digitizing handwritten, audio, and text entries using Google Cloud APIs
                      </li>
                      <li>
                        • Generated consistent character illustrations via fine-tuned Stable Diffusion (DreamBooth +
                        LoRA)
                      </li>
                      <li>• Designed Gradio-based interface for personalized comic-style outputs</li>
                    </ul>
                  </div>

                  <Separator className="border-black" />

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">BART-to-Edge - Real-time Translation Optimization</h3>
                        <p className="text-gray-600 font-semibold">Research Project</p>
                      </div>
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1">Oct - Dec 2024</span>
                    </div>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Optimized mBART and M2M100 with LoRA and layer freezing for edge devices</li>
                      <li>• Cut GPU memory use by 50% and training time by 30%</li>
                      <li>• Preserved competitive BLEU scores while maintaining sub-1B model size</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-xl">TECHNICAL SKILLS</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">ML & Data Science</h4>
                      <div className="flex flex-wrap gap-1">
                        {["PyTorch", "pandas", "NumPy", "SVM", "XGBoost", "k-NN", "MLP", "LoRA", "DreamBooth"].map(
                          (skill) => (
                            <span key={skill} className="text-xs bg-black text-white px-2 py-1">
                              {skill}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Cloud & Infrastructure</h4>
                      <div className="flex flex-wrap gap-1">
                        {["AWS CDK", "AWS Textract", "AWS Bedrock", "Serverless", "Google Cloud"].map((skill) => (
                          <span key={skill} className="text-xs bg-black text-white px-2 py-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Programming</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Python", "TypeScript", "Node.js", "SQL", "GraphQL"].map((skill) => (
                          <span key={skill} className="text-xs bg-black text-white px-2 py-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">DevOps & Observability</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Kubernetes", "Istio", "Jaeger", "Prometheus", "Grafana", "Splunk"].map((skill) => (
                          <span key={skill} className="text-xs bg-black text-white px-2 py-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-xl">CERTIFICATIONS</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">IEEE Publication</p>
                      <p className="text-gray-600">EEG Abnormality Detection</p>
                      <p className="text-xs">2022</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="font-semibold">Graduate Teaching Assistant</p>
                      <p className="text-gray-600">University of Pennsylvania</p>
                      <p className="text-xs">2024 - Present</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="border-2 border-black">
                <CardHeader className="border-b-2 border-black">
                  <CardTitle className="font-serif text-xl">LANGUAGES</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>English</span>
                      <span className="font-semibold">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Spanish</span>
                      <span className="font-semibold">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span>French</span>
                      <span className="font-semibold">Basic</span>
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
