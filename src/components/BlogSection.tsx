import { Button } from "./ui/button";
import { BlogCard } from "./blog/BlogCard";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const featuredPosts = [
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
  }
];

export function BlogSection() {
  const navigate = useNavigate(); // این خط رو اضافه کنید

  return (
    <section id="blog" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">مقالات آموزشی</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            جدیدترین مطالب آموزشی و نکات کاربردی برای رشد مهارت‌های شما
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredPosts.map((post) => (
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
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="rounded-xl"  
            onClick={() => navigate("/blog")}
          >
            مشاهده همه مقالات
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}