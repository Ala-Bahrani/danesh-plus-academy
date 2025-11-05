import { Button } from "./ui/button";
import { ArrowLeft, BookOpen, Users, Award } from "lucide-react";

export function TeachSection() {
  return (
    <section id="teach" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1593442808882-775dfcd90699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjBjbGFzc3xlbnwxfHx8fDE3NjE4NDAwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="مدرس"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              مدرس هستید؟ دانش خود را با هزاران دانشجو به اشتراک بگذارید
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              با پیوستن به تیم مدرس‌های آکادمی دانش‌پلاس، دانش و تجربیات خود را با علاقه‌مندان در سراسر کشور به اشتراک بگذارید و درآمد کسب کنید.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-primary rounded-lg p-2">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1">محتوای با کیفیت</h3>
                  <p className="text-sm text-muted-foreground">
                    ابزارهای حرفه‌ای برای تولید محتوای آموزشی باکیفیت
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-primary rounded-lg p-2">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1">دسترسی به هزاران دانشجو</h3>
                  <p className="text-sm text-muted-foreground">
                    پلتفرمی با جامعه گسترده علاقه‌مندان به یادگیری
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-primary rounded-lg p-2">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1">پشتیبانی کامل</h3>
                  <p className="text-sm text-muted-foreground">
                    تیم پشتیبانی ما در کنار شما خواهد بود
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="rounded-xl px-8">
              همکاری به عنوان مدرس
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
