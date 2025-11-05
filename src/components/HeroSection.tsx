import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxhcHRvcCUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MTg5MjUzOXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            یادگیری مؤثر با بهترین مدرس‌ها در آکادمی دانش‌پلاس
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            یاد بگیر، پیشرفت کن و مسیر شغلی‌ات را بساز.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white  text-[#3B82F6] hover:bg-blue-50 rounded-xl px-8"
            >
              مشاهده دوره‌ها
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white  text-[#3B82F6] hover:bg-white/10 rounded-xl px-8"
            >
              ثبت‌نام رایگان
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
