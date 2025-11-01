import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Women's Health Center</h3>
            <p className="text-sm text-primary-foreground/90 leading-relaxed">
              Providing comprehensive gynecological and oncological care with compassion and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/staff"
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Medical Staff
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Health Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">info@womenshealthcenter.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">
                  123 Medical Plaza, Suite 100
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Women's Health Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
