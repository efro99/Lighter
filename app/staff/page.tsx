import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GraduationCap, Award, Heart, Mail } from "lucide-react"

export default function StaffPage() {
  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Chief of Gynecology",
      specialty: "Gynecology",
      image: "/doctor-sarah-mitchell.jpg",
      education: "MD, Harvard Medical School",
      certifications: [
        "Board Certified in Obstetrics & Gynecology",
        "Fellow, American College of Obstetricians and Gynecologists",
      ],
      experience: "15+ years of experience in women's health",
      bio: "Dr. Mitchell specializes in minimally invasive gynecological surgery and reproductive health. She is passionate about providing comprehensive, patient-centered care and empowering women to make informed decisions about their health.",
    },
    {
      name: "Dr. Emily Chen",
      title: "Senior Gynecologist",
      specialty: "Gynecology",
      image: "/doctor-emily-chen.jpg",
      education: "MD, Johns Hopkins University",
      certifications: ["Board Certified in Obstetrics & Gynecology", "Certified in Robotic Surgery"],
      experience: "12+ years of experience",
      bio: "Dr. Chen focuses on adolescent gynecology and menopause management. She believes in building long-term relationships with her patients and providing compassionate care throughout all stages of life.",
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Chief of Oncology",
      specialty: "Oncology",
      image: "/doctor-michael-rodriguez.jpg",
      education: "MD, PhD, Stanford University",
      certifications: ["Board Certified in Medical Oncology", "Board Certified in Hematology"],
      experience: "18+ years of experience in cancer care",
      bio: "Dr. Rodriguez is a leading expert in gynecological oncology with extensive research experience in targeted cancer therapies. He is committed to providing cutting-edge treatments while maintaining a focus on quality of life.",
    },
    {
      name: "Dr. Jennifer Park",
      title: "Surgical Oncologist",
      specialty: "Oncology",
      image: "/doctor-jennifer-park.jpg",
      education: "MD, Yale School of Medicine",
      certifications: ["Board Certified in Surgical Oncology", "Fellow, Society of Surgical Oncology"],
      experience: "14+ years of surgical experience",
      bio: "Dr. Park specializes in minimally invasive cancer surgery and has pioneered several innovative surgical techniques. She is dedicated to achieving the best outcomes while minimizing recovery time for her patients.",
    },
    {
      name: "Dr. David Thompson",
      title: "Medical Oncologist",
      specialty: "Oncology",
      image: "/doctor-david-thompson.jpg",
      education: "MD, University of Pennsylvania",
      certifications: ["Board Certified in Medical Oncology", "Clinical Trial Investigator"],
      experience: "10+ years of experience",
      bio: "Dr. Thompson focuses on immunotherapy and precision medicine approaches to cancer treatment. He actively participates in clinical trials to bring the latest treatment options to his patients.",
    },
    {
      name: "Dr. Lisa Anderson",
      title: "Gynecologist",
      specialty: "Gynecology",
      image: "/doctor-lisa-anderson.jpg",
      education: "MD, Columbia University",
      certifications: ["Board Certified in Obstetrics & Gynecology", "Certified in Pelvic Floor Disorders"],
      experience: "8+ years of experience",
      bio: "Dr. Anderson specializes in pelvic floor disorders and women's sexual health. She takes a holistic approach to care, addressing both physical and emotional aspects of women's health.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Meet Our Medical Team</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our board-certified physicians and specialists are dedicated to providing exceptional care with expertise,
              compassion, and the latest medical advances
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Board Certified</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All our physicians are board-certified in their specialties
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Highly Educated</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Graduates from top medical schools with ongoing education
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Patient-Centered</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Committed to compassionate, personalized care for every patient
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <img
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                      <p className="text-sm text-primary font-medium mb-1">{doctor.title}</p>
                      <p className="text-sm text-muted-foreground mb-4">{doctor.specialty}</p>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-2">
                          <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{doctor.education}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{doctor.experience}</p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{doctor.bio}</p>

                      <div className="pt-4 border-t border-border">
                        <h4 className="text-xs font-semibold mb-2">Certifications:</h4>
                        <ul className="space-y-1">
                          {doctor.certifications.map((cert, certIndex) => (
                            <li key={certIndex} className="text-xs text-muted-foreground flex items-start gap-1">
                              <span className="text-primary mt-0.5">•</span>
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Support Team</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Behind our exceptional physicians is a dedicated team of nurses, medical assistants, and support staff who
              work together to ensure you receive the highest quality care at every visit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Registered Nurses</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Experienced RNs providing skilled nursing care and patient education
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Medical Assistants</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Certified professionals assisting with examinations and procedures
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Patient Coordinators</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Friendly staff helping with scheduling, insurance, and questions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Mail className="h-12 w-12 mx-auto mb-6 text-primary-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Schedule an Appointment with Our Team</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Our experienced physicians are accepting new patients. Contact us today to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
