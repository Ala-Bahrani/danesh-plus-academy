import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Quote } from "lucide-react";
import { testimonials } from "../data/testimonialsData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">نظرات دانشجویان</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تجربه دانشجویان ما از یادگیری در آکادمی دانش‌پلاس
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              direction: "rtl"
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2">
                  <Card className="border-gray-200 rounded-2xl">
                    <CardContent className="p-6">
                      <Quote className="h-10 w-10 text-primary mb-4 opacity-20" />
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {testimonial.comment}
                      </p>
                      <div className="flex items-center gap-4">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4>{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-[-50px]" />
              <CarouselNext className="right-[-50px]" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
