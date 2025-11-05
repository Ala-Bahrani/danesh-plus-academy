
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Categories } from "./components/Categories";
import { PopularCourses } from "./components/PopularCourses";
import { LatestCourses } from "./components/LatestCourses";
import { PromotionalBanner } from "./components/PromotionalBanner";
import { TeachSection } from "./components/TechSection";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { BlogSection } from "./components/BlogSection"; 
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full" dir="rtl" >
      <Header />
      <main>
        <HeroSection />
        <Categories />
        <PopularCourses />
        <LatestCourses />
        <PromotionalBanner />
        <TeachSection />
        <Testimonials />
        <FAQ />
         <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

