import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { CourseCard } from "./CourseCard";
import { latestCourses } from "../data/courseData";

export function LatestCourses() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">جدیدترین دوره‌ها</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تازه‌ترین دوره‌های آموزشی با محتوای به‌روز و کاربردی
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
              {latestCourses.map((course) => (
                <CarouselItem key={course.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <CourseCard
                    title={course.title}
                    instructor={course.instructor}
                    duration={course.duration}
                    price={course.price}
                    image={course.image}
                    rating={course.rating}
                    students={course.students}
                    isNew={course.isNew}
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
