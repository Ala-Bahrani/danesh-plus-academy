import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const categories = [
  { id: "all", name: "همه مقالات", count: 24 },
  { id: "برنامه‌نویسی", name: "برنامه‌نویسی", count: 12 },
  { id: "فرانت‌اند", name: "فرانت‌اند", count: 6 },
  { id: "بک‌اند", name: "بک‌اند", count: 4 },
  { id: "موبایل", name: "موبایل", count: 3 },
  { id: "هوش مصنوعی", name: "هوش مصنوعی", count: 5 },
];

interface BlogCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogCategories({ 
  selectedCategory, 
  onCategoryChange 
}: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className="rounded-full px-4"
        >
          {category.name}
          <Badge 
            variant={selectedCategory === category.id ? "secondary" : "default"}
            className="mr-2 text-xs"
          >
            {category.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
}