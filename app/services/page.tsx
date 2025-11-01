import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Microscope, Calendar, Award } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Medical Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive women's healthcare services delivered by experienced specialists using the latest medical
              advances
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Gynecology Service */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <img
                    src="/gynecology-medical-examination.jpg"
                    alt="Gynecology Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Gynecology</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Complete gynecological care including preventive screenings, reproductive health management, and
                    minimally invasive surgical procedures.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Annual wellness exams and Pap smears</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Family planning and contraception counseling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Menopause management and hormone therapy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Treatment of gynecological conditions</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/services/gynecology">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Oncology Service */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 relative overflow-hidden">
                  <img
                    src="/oncology-cancer-treatment.jpg"
                    alt="Oncology Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Microscope className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Oncology</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Advanced cancer care with personalized treatment plans, cutting-edge therapies, and comprehensive
                    support throughout your cancer journey.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Cancer screening and early detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Chemotherapy and targeted therapy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Immunotherapy and clinical trials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Survivorship care and support services</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/services/oncology">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Excellence in care through expertise, technology, and compassion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Board-Certified Specialists</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our physicians are highly trained and certified in their specialties
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Advanced Technology</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  State-of-the-art equipment and cutting-edge treatment options
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Comprehensive Care</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From prevention to treatment and follow-up care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Schedule Your Appointment?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today to learn more about our services or book a consultation
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
