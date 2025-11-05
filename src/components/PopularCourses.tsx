import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { CourseCard } from "./CourseCard";
import { popularCourses } from "../data/courseData";

export function PopularCourses() {
  return (
    <section id="courses" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">دوره‌های پرمخاطب</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            محبوب‌ترین دوره‌های آموزشی با بالاترین رضایت دانشجویان
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              direction: "rtl"
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {popularCourses.map((course) => (
                <CarouselItem key={course.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <CourseCard
                    title={course.title}
                    instructor={course.instructor}
                    duration={course.duration}
                    price={course.price}
                    image={course.image}
                    rating={course.rating}
                    students={course.students}
                  />
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
