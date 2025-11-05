import { useState, useEffect } from "react";
import { BlogCard } from "./blog/BlogCard";
import { BlogCategories } from "./blog/BlogCategories";
import { BlogSearch } from "./blog/BlogSearch";
import { BlogPagination } from "./blog/BlogPagination";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Header } from "./Header";

// داده‌های نمونه
const blogPosts = [
  {
    id: 1,
    title: "۱۰ نکته طلایی برای یادگیری برنامه‌نویسی در سال ۲۰۲۴",
    excerpt: "در این مقاله بهترین روش‌های یادگیری برنامه‌نویسی را بررسی می‌کنیم و راهکارهای عملی ارائه می‌دهیم.",
    author: "علی محمدی",
    date: "۱۴۰۲/۱۰/۱۵",
    readTime: "۵ دقیقه",
    category: "برنامه‌نویسی",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    slug: "programming-tips-2024"
  },
  {
    id: 2,
    title: "راهنمای کامل انتخاب زبان برنامه‌نویسی مناسب",
    excerpt: "چگونه بهترین زبان برنامه‌نویسی را با توجه به اهداف و زمینه کاری خود انتخاب کنیم؟",
    author: "سارا احمدی",
    date: "۱۴۰۲/۱۰/۱۲",
    readTime: "۷ دقیقه",
    category: "برنامه‌نویسی",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300&fit=crop",
    slug: "choose-programming-language"
  },
  {
    id: 3,
    title: "مهارت‌های ضروری برای توسعه‌دهندگان فرانت‌اند",
    excerpt: "با یادگیری این مهارت‌ها می‌توانید به یک توسعه‌دهنده فرانت‌اند حرفه‌ای تبدیل شوید.",
    author: "محمد رضایی",
    date: "۱۴۰۲/۱۰/۱۰",
    readTime: "۶ دقیقه",
    category: "فرانت‌اند",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
    slug: "frontend-skills"
  },
  {
    id: 4,
    title: "آموزش Node.js برای توسعه بک‌اند",
    excerpt: "یادگیری Node.js و ساخت اپلیکیشن‌های سمت سرور با جاوااسکریپت.",
    author: "رضا کریمی",
    date: "۱۴۰۲/۱۰/۰۸",
    readTime: "۸ دقیقه",
    category: "بک‌اند",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop",
    slug: "nodejs-backend"
  },
  {
    id: 5,
    title: "توسعه اپلیکیشن موبایل با React Native",
    excerpt: "ساخت اپلیکیشن‌های موبایل برای iOS و Android با React Native.",
    author: "فاطمه حسینی",
    date: "۱۴۰۲/۱۰/۰۵",
    readTime: "۶ دقیقه",
    category: "موبایل",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    slug: "react-native-mobile"
  },
  {
    id: 6,
    title: "مقدمه‌ای بر هوش مصنوعی و یادگیری ماشین",
    excerpt: "آشنایی با مفاهیم پایه هوش مصنوعی و کاربردهای آن در برنامه‌نویسی.",
    author: "امیرحسین نجفی",
    date: "۱۴۰۲/۱۰/۰۳",
    readTime: "۱۰ دقیقه",
    category: "هوش مصنوعی",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    slug: "ai-machine-learning"
  },
  {
    id: 7,
    title: "آموزش React.js - قسمت اول",
    excerpt: "شروع کار با React.js و مفاهیم پایه این کتابخانه محبوب.",
    author: "سارا احمدی",
    date: "۱۴۰۲/۱۰/۰۱",
    readTime: "۷ دقیقه",
    category: "فرانت‌اند",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&h=300&fit=crop",
    slug: "reactjs-part1"
  },
  {
    id: 8,
    title: "بهینه‌سازی عملکرد در اپلیکیشن‌های وب",
    excerpt: "روش‌های مختلف برای بهبود سرعت و عملکرد وب‌اپلیکیشن‌ها.",
    author: "علی محمدی",
    date: "۱۴۰۲/۰۹/۲۸",
    readTime: "۹ دقیقه",
    category: "برنامه‌نویسی",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    slug: "web-performance"
  }
];

export function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const postsPerPage = 6;

  
  // فیلتر کردن پست‌ها
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
    const matchesSearch = searchTerms.length === 0 || 
      searchTerms.some(term => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term)
      );
    
    return matchesCategory && matchesSearch;
  });

  // مرتب‌سازی پست‌ها
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "oldest") {
      return b.id - a.id; 
    } else if (sortBy === "newest") {
      return a.id - b.id; 
    }
    return 0;
  });

  // صفحه‌بندی
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

  // وقتی فیلتر عوض شد، به صفحه اول برگرد
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* هدر صفحه */}
        <Header/>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-7">وبلاگ آموزشی</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            جدیدترین مقالات و مطالب آموزشی در زمینه برنامه‌نویسی و تکنولوژی
          </p>
        </div>

        {/* جستجو و فیلترها */}
        <BlogSearch onSearch={setSearchQuery} />
        <BlogCategories 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* نتایج */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            نمایش {currentPosts.length} از {filteredPosts.length} مقاله
            {searchQuery && ` برای "${searchQuery}"`}
            {selectedCategory !== "all" && ` در دسته "${selectedCategory}"`}
          </p>
          <div className="flex items-center gap-2">
            <select 
              value={sortBy}
              onChange={handleSortChange}
              className="bg-background border border-input rounded-md px-3 py-1 text-sm"
            >
              <option value="newest">جدیدترین</option>
              <option value="oldest">قدیمی‌ترین</option>
            </select>
          </div>
        </div>

        {/* لیست مقالات */}
        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.category}
                  image={post.image}
                  slug={post.slug}
                />
              ))}
            </div>

            {/* صفحه‌بندی */}
            {totalPages > 1 && (
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {searchQuery || selectedCategory !== "all" 
                ? `مقاله‌ای با فیلترهای انتخابی یافت نشد` 
                : `مقاله‌ای یافت نشد`}
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setSortBy("newest");
              }}
            >
              مشاهده همه مقالات
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}