import { useState, useMemo } from "react";
import { Search, BookOpen, Users, Star, Clock, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { CourseCard } from "../components/CourseCard";
import { allCourses } from "../data/courseData";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Categories() {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  // استخراج تمام دسته‌بندی‌ها و آمار آنها
  const categoriesWithStats = useMemo(() => {
    const categoriesMap = new Map();
    
    allCourses.forEach((course) => {
      if (!categoriesMap.has(course.category)) {
        categoriesMap.set(course.category, {
          name: course.category,
          courseCount: 0,
          totalStudents: 0,
          avgRating: 0,
        });
      }
      
      const category = categoriesMap.get(course.category);
      category.courseCount += 1;
      category.totalStudents += course.students;
      category.avgRating = (category.avgRating * (category.courseCount - 1) + course.rating) / category.courseCount;
    });
    
    return Array.from(categoriesMap.values());
  }, []);

  // فیلتر کردن دوره‌ها برای دسته‌بندی انتخاب شده
  const filteredCourses = useMemo(() => {
    if (!categoryName) return [];
    
    let filtered = allCourses.filter((course) => {
      const matchesCategory = course.category === categoryName;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    // مرتب‌سازی
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // برای دوره‌های جدید، از isNew استفاده می‌کنیم
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // popular
        filtered.sort((a, b) => b.students - a.students);
    }

    return filtered;
  }, [categoryName, searchTerm, sortBy]);

  // اگر دسته‌بندی خاصی انتخاب شده باشد
  const currentCategory = categoryName 
    ? categoriesWithStats.find(cat => cat.name === categoryName)
    : null;

  if (categoryName && !currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">دسته‌بندی یافت نشد</h1>
          <Button onClick={() => navigate("/categories")}>
            بازگشت به دسته‌بندی‌ها
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
        {/* هدر */}
        <Header/>
      {/* هیرو سکشن */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 py-16 md:py-20 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {categoryName ? (
              <>
                <Button
                  variant="ghost"
                  className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  onClick={() => navigate("/categories")}
                >
                  <ArrowLeft className="h-4 w-4" />
                  بازگشت به دسته‌بندی‌ها
                </Button>
                
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  {currentCategory?.name}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  {currentCategory?.courseCount} دوره تخصصی در این زمینه
                </p>
                
                {/* جستجو در دسته‌بندی */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder={`جستجو در دوره‌های ${currentCategory?.name}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 text-lg border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  دسته‌بندی‌های آموزشی
                </h1>
                <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                  کشف کنید و بیاموزید از بین <span className="text-blue-600 font-semibold">{categoriesWithStats.length}</span> دسته‌بندی تخصصی
                </p>
                
                {/* جستجوی کلی */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="جستجو در دسته‌بندی‌ها..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 text-lg border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-white "
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* محتوای اصلی */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {categoryName ? (
          /* نمایش دوره‌های یک دسته‌بندی خاص */
          <div className="flex flex-col lg:flex-row gap-8">
            {/* سایدبار فیلترها */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* آمار دسته‌بندی */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <h3 className="font-semibold text-lg mb-4">آمار {currentCategory?.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">تعداد دوره‌ها:</span>
                      <span className="font-semibold">{currentCategory?.courseCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">دانشجویان:</span>
                      <span className="font-semibold">{currentCategory?.totalStudents?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">میانگین امتیاز:</span>
                      <span className="font-semibold flex items-center gap-1">
                        {currentCategory?.avgRating?.toFixed(1)}
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* مرتب‌سازی */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <h4 className="font-medium text-gray-900 mb-3">مرتب‌سازی بر اساس</h4>
                  <div className="space-y-2">
                    {[
                      { value: "popular", label: "پرمخاطب‌ترین" },
                      { value: "newest", label: "جدیدترین" },
                      { value: "rating", label: "بالاترین امتیاز" },
                      { value: "price-low", label: "قیمت (کم به زیاد)" },
                      { value: "price-high", label: "قیمت (زیاد به کم)" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSortBy(option.value)}
                        className={`block w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
                          sortBy === option.value
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* محتوای اصلی دوره‌ها */}
            <main className="flex-1 min-w-0">
              {/* هدر فیلترها */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    {/* دکمه نمایش فیلترها در موبایل */}
                    <Button
                      variant="outline"
                      className="lg:hidden flex items-center gap-2"
                      onClick={() => setShowFilters(true)}
                    >
                      <Search className="h-4 w-4" />
                      فیلترها
                    </Button>

                    <span className="text-gray-600">
                      <span className="font-semibold text-gray-900">{filteredCourses.length}</span> دوره در {currentCategory?.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* مرتب‌سازی برای موبایل */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="lg:hidden bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="popular">پرمخاطب‌ترین</option>
                      <option value="newest">جدیدترین</option>
                      <option value="rating">بالاترین امتیاز</option>
                      <option value="price-low">قیمت (کم به زیاد)</option>
                      <option value="price-high">قیمت (زیاد به کم)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* نمایش دوره‌ها */}
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      instructor={course.instructor}
                      duration={course.duration}
                      price={course.originalPrice ? 
                        `${course.price.toLocaleString('fa-IR')}` : 
                        `${course.price.toLocaleString('fa-IR')}`
                      }
                      image={course.image}
                      rating={course.rating}
                      students={course.students}
                      isNew={course.isNew}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-sm border">
                  <div className="max-w-md mx-auto">
                    <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">دوره‌ای یافت نشد</h3>
                    <p className="text-gray-500 mb-6">
                      {searchTerm ? 
                        `متأسفانه هیچ دوره‌ای با عنوان "${searchTerm}" یافت نشد.` : 
                        "متأسفانه هیچ دوره‌ای در این دسته‌بندی موجود نیست."
                      }
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm("");
                      }}
                    >
                      {searchTerm ? "حذف جستجو" : "مشاهده همه دوره‌ها"}
                    </Button>
                  </div>
                </div>
              )}
            </main>
          </div>
        ) : (
          /* نمایش تمام دسته‌بندی‌ها */
          <div className="max-w-7xl mx-auto">
            {/* آمار کلی */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{allCourses.length}</div>
                <div className="text-gray-600">دوره آموزشی</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {categoriesWithStats.reduce((sum, cat) => sum + cat.totalStudents, 0).toLocaleString()}
                </div>
                <div className="text-gray-600">دانشجو</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {(categoriesWithStats.reduce((sum, cat) => sum + cat.avgRating, 0) / categoriesWithStats.length).toFixed(1)}
                </div>
                <div className="text-gray-600">میانگین امتیاز</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{categoriesWithStats.length}</div>
                <div className="text-gray-600">دسته‌بندی</div>
              </div>
            </div>

            {/* شبکه دسته‌بندی‌ها */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoriesWithStats
                .filter(category => 
                  category.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((category) => (
                  <div
                    key={category.name}
                    className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => navigate(`/categories/${category.name}`)}
                  >
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <BookOpen className="absolute left-4 bottom-4 h-8 w-8 text-white/80" />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-between">
                          <span>تعداد دوره:</span>
                          <span className="font-medium">{category.courseCount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>دانشجو:</span>
                          <span className="font-medium">{category.totalStudents.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>امتیاز:</span>
                          <span className="font-medium flex items-center gap-1">
                            {category.avgRating.toFixed(1)}
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          </span>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4" variant="outline">
                        مشاهده دوره‌ها
                      </Button>
                    </div>
                  </div>
                ))}
            </div>

            {/* حالت خالی برای جستجو */}
            {categoriesWithStats.filter(cat => 
              cat.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).length === 0 && searchTerm && (
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm border">
                <div className="max-w-md mx-auto">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">دسته‌بندی یافت نشد</h3>
                  <p className="text-gray-500 mb-6">
                    متأسفانه هیچ دسته‌بندی با عبارت "{searchTerm}" یافت نشد.
                  </p>
                  <Button
                    onClick={() => setSearchTerm("")}
                  >
                    حذف جستجو
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* فیلترهای موبایل */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">فیلترها</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                  بستن
                </Button>
              </div>
              
              {/* آمار دسته‌بندی */}
              {currentCategory && (
                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">آمار {currentCategory.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>دوره‌ها:</span>
                      <span className="font-medium">{currentCategory.courseCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>دانشجو:</span>
                      <span className="font-medium">{currentCategory.totalStudents.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* مرتب‌سازی */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">مرتب‌سازی بر اساس</h4>
                <div className="space-y-2">
                  {[
                    { value: "popular", label: "پرمخاطب‌ترین" },
                    { value: "newest", label: "جدیدترین" },
                    { value: "rating", label: "بالاترین امتیاز" },
                    { value: "price-low", label: "قیمت (کم به زیاد)" },
                    { value: "price-high", label: "قیمت (زیاد به کم)" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
                        sortBy === option.value
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* فوتر */}
      <Footer/>
    </div>
  );
}