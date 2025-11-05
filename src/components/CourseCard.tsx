import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Users, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  price: string | number;
  image: string;
  rating: number;
  students: number;
  isNew?: boolean;
}

export function CourseCard({
  title,
  instructor,
  duration,
  price,
  image,
  rating,
  students,
  isNew
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-gray-200 rounded-2xl">
      <div className="relative overflow-hidden h-48">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-red-500 text-white border-none rounded-lg">
            جدید
          </Badge>
        )}
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{instructor}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString('fa-IR')}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-4">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{rating.toLocaleString('fa-IR')}</span>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex items-center justify-between">
        <div>
          <span className="text-xs text-muted-foreground block">قیمت:</span>
          <span className="text-lg text-primary">{price} تومان</span>
        </div>
        <Button className="rounded-xl">مشاهده جزئیات</Button>
      </CardFooter>
    </Card>
  );
}
