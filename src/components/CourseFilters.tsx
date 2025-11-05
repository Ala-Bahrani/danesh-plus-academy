import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RefreshCw } from "lucide-react";

interface CourseFiltersProps {
  categories: string[];
  levels: string[];
  selectedCategory: string;
  selectedLevel: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onReset: () => void;
}

export function CourseFilters({
  categories,
  levels,
  selectedCategory,
  selectedLevel,
  priceRange,
  onCategoryChange,
  onLevelChange,
  onPriceChange,
  onReset
}: CourseFiltersProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-6">
      {/* هدر فیلترها */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">فیلترها</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
        >
          <RefreshCw className="h-4 w-4" />
          بازنشانی
        </Button>
      </div>

      {/* فیلتر دسته‌بندی */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">دسته‌بندی</h4>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange("all")}
            className={`block w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
              selectedCategory === "all"
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            همه دسته‌بندی‌ها
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`block w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* فیلتر سطح دوره */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">سطح دوره</h4>
        <div className="space-y-2">
          <button
            onClick={() => onLevelChange("all")}
            className={`block w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
              selectedLevel === "all"
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            همه سطوح
          </button>
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => onLevelChange(level)}
              className={`block w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedLevel === level
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* فیلتر قیمت */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">محدوده قیمت</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <Input
              type="number"
              value={priceRange[0]}
              onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
              className="text-center"
              placeholder="حداقل"
            />
            <span className="text-gray-500">تا</span>
            <Input
              type="number"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
              className="text-center"
              placeholder="حداکثر"
            />
          </div>
          <div className="text-center text-sm text-gray-500">
            تومان {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}