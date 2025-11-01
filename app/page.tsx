import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Stethoscope, Users, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-[url('/medical-clinic-interior.png')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Comprehensive Women's Health Care</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Expert gynecological and oncological services delivered with compassion, precision, and the latest medical
              advances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Medical Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Specialized care tailored to your unique health needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/services/gynecology">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <img
                      src="/gynecology-medical-examination.jpg"
                      alt="Gynecology Services"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">Gynecology</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive gynecological care including preventive screenings, reproductive health, and
                      minimally invasive procedures.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/oncology">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 relative overflow-hidden">
                    <img
                      src="/oncology-cancer-treatment.jpg"
                      alt="Oncology Services"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">Oncology</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Advanced cancer care with personalized treatment plans, cutting-edge therapies, and compassionate
                      support throughout your journey.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Excellence in women's healthcare through expertise and compassion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Compassionate Care</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Patient-centered approach with empathy and understanding
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Expert Specialists</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Board-certified physicians with years of experience
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Personalized Treatment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tailored care plans designed for your unique needs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Latest Research</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Evidence-based treatments using cutting-edge technology
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Take Control of Your Health?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation with our experienced medical team today
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
