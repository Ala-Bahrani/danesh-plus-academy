import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export function PromotionalBanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Sparkles className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl mb-4">
            با آکادمی دانش‌پلاس مسیر یادگیری خود را آغاز کنید!
          </h2>
          <p className="text-lg mb-8 text-blue-50">
            دسترسی به بیش از ۱۰۰۰ دوره آموزشی با کیفیت و مدرس‌های حرفه‌ای
          </p>
          <Button
            size="lg"
            className="bg-white text-[#3B82F6] hover:bg-blue-50 rounded-xl px-8"
          >
            شروع یادگیری
          </Button>
        </div>
      </div>
    </section>
  );
}
