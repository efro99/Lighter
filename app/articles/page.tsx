import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "Understanding Cervical Cancer Screening: What Every Woman Should Know",
      excerpt:
        "Learn about the importance of regular cervical cancer screenings, including Pap smears and HPV testing, and how they can save lives through early detection.",
      category: "Gynecology",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/article-cervical-screening.jpg",
      slug: "cervical-cancer-screening-guide",
    },
    {
      id: 2,
      title: "Advances in Immunotherapy for Ovarian Cancer",
      excerpt:
        "Discover the latest breakthroughs in immunotherapy treatments for ovarian cancer and how they're changing the landscape of cancer care.",
      category: "Oncology",
      author: "Dr. Michael Rodriguez",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/article-immunotherapy.jpg",
      slug: "immunotherapy-ovarian-cancer",
    },
    {
      id: 3,
      title: "Navigating Menopause: Symptoms, Treatment Options, and Lifestyle Changes",
      excerpt:
        "A comprehensive guide to understanding menopause, managing symptoms, and exploring treatment options including hormone therapy and natural approaches.",
      category: "Gynecology",
      author: "Dr. Emily Chen",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "/article-menopause.jpg",
      slug: "menopause-guide",
    },
    {
      id: 4,
      title: "The Role of Genetic Testing in Cancer Prevention",
      excerpt:
        "Learn how genetic testing can identify your cancer risk and help you make informed decisions about preventive care and screening schedules.",
      category: "Oncology",
      author: "Dr. David Thompson",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "/article-genetic-testing.jpg",
      slug: "genetic-testing-cancer-prevention",
    },
    {
      id: 5,
      title: "Endometriosis: Diagnosis, Treatment, and Living Well",
      excerpt:
        "Understanding endometriosis symptoms, getting an accurate diagnosis, and exploring treatment options to manage pain and improve quality of life.",
      category: "Gynecology",
      author: "Dr. Lisa Anderson",
      date: "February 20, 2024",
      readTime: "6 min read",
      image: "/article-endometriosis.jpg",
      slug: "endometriosis-guide",
    },
    {
      id: 6,
      title: "Minimally Invasive Surgery: Benefits and Recovery",
      excerpt:
        "Explore the advantages of minimally invasive surgical techniques, including faster recovery times, less pain, and improved outcomes.",
      category: "Gynecology",
      author: "Dr. Jennifer Park",
      date: "February 15, 2024",
      readTime: "5 min read",
      image: "/article-minimally-invasive.jpg",
      slug: "minimally-invasive-surgery",
    },
    {
      id: 7,
      title: "Breast Cancer Awareness: Self-Exams and Early Detection",
      excerpt:
        "Learn the proper technique for breast self-examination and understand the importance of regular mammograms in early cancer detection.",
      category: "Oncology",
      author: "Dr. Sarah Mitchell",
      date: "February 10, 2024",
      readTime: "4 min read",
      image: "/article-breast-cancer.jpg",
      slug: "breast-cancer-awareness",
    },
    {
      id: 8,
      title: "Fertility Preservation Options for Cancer Patients",
      excerpt:
        "Understanding fertility preservation techniques available before cancer treatment and how to plan for future family building.",
      category: "Oncology",
      author: "Dr. Michael Rodriguez",
      date: "February 5, 2024",
      readTime: "7 min read",
      image: "/article-fertility-preservation.jpg",
      slug: "fertility-preservation-cancer",
    },
    {
      id: 9,
      title: "PCOS: Managing Symptoms and Improving Health",
      excerpt:
        "A comprehensive look at Polycystic Ovary Syndrome, including symptoms, diagnosis, and effective management strategies for better health.",
      category: "Gynecology",
      author: "Dr. Emily Chen",
      date: "January 30, 2024",
      readTime: "6 min read",
      image: "/article-pcos.jpg",
      slug: "pcos-management",
    },
  ]

  const categories = ["All", "Gynecology", "Oncology", "Prevention", "Treatment"]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Health Articles & Resources</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Expert insights, latest research, and practical advice for women's health from our medical team
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type="search" placeholder="Search articles..." className="pl-10 h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <img
                      src={articles[0].image || "/placeholder.svg"}
                      alt={articles[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 w-fit">
                      {articles[0].category}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{articles[0].title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{articles[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{articles[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{articles[0].readTime}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`/articles/${articles[0].slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                        {article.category}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-balance line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="w-full">
                        <Link href={`/articles/${article.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Subscribe to our newsletter for the latest health articles, tips, and updates from our medical team
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Have Questions About Your Health?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our medical team is here to help. Schedule a consultation to discuss your health concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Schedule Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/staff">Meet Our Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
