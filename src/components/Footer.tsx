import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "./ui/seperator";

export function Footer() {
  const footerLinks = {
    about: [
      { label: "درباره ما", href: "#" },
      { label: "تیم ما", href: "#" },
      { label: "فرصت‌های شغلی", href: "#" },
      { label: "قوانین و مقررات", href: "#" }
    ],
    useful: [
      { label: "خانه", href: "#home" },
      { label: "دوره‌ها", href: "#courses" },
      { label: "تماس با ما", href: "#contact" },
      { label: "همکاری با ما", href: "#teach" }
    ],
    social: [
      { label: "اینستاگرام", href: "#", icon: "instagram" },
      { label: "تلگرام", href: "#", icon: "telegram" },
      { label: "لینکدین", href: "#", icon: "linkedin" },
      { label: "توییتر", href: "#", icon: "twitter" }
    ]
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl text-white">آکادمی دانش‌پلاس</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              پلتفرم آموزش آنلاین با بهترین مدرس‌ها و دوره‌های به‌روز برای پیشرفت مسیر شغلی شما
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@daneshplus.ir</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-white mb-4">درباره ما</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white mb-4">لینک‌های مفید</h3>
            <ul className="space-y-3">
              {footerLinks.useful.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white mb-4">شبکه‌های اجتماعی</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm">
          <p>© ۱۴۰۳ آکادمی دانش‌پلاس. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
