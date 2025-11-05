import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

export function BlogCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  slug
}: BlogCardProps) {
  const navigate = useNavigate(); // این خط رو اضافه کنید

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          variant="outline" 
          className="w-full"  
          onClick={() => navigate(`/blog/${slug}`)} // اینجا slug استفاده کنید نه props.slug
        >
          مطالعه مقاله
        </Button>
      </CardFooter>
    </Card>
  );
}