import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { CourseCard } from "../components/CourseCard";
import type { Course } from "../data/courseData";
import { latestCourses, allCourses } from "../data/courseData";
import { Header } from '../components/Header';

export function CoursesPage() {
    const [activeCategory, setActiveCategory] = useState<string>('همه');
    const [filteredCourses, setFilteredCourses] = useState<Course[]>(allCourses);
    const [searchQuery] = useState<string>('');

    const categories = ['همه', 'برنامه‌نویسی', 'طراحی', 'هوش مصنوعی', 'مدیریت', 'مالی', 'زبان‌های خارجی'];

    useEffect(() => {
        let results = allCourses;

        if (activeCategory !== 'همه') {
            results = results.filter(course => course.category === activeCategory);
        }

        if (searchQuery) {
            results = results.filter(course =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredCourses(results);
    }, [activeCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* هدر */}
            <Header />


            {/* بخش هیرو */}
            <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">دوره‌های آموزشی تخصصی</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8">
                        با بهترین اساتید و به‌روزترین محتواها، مهارت‌های جدید یاد بگیرید و حرفه‌ای شوید
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            مشاهده همه دوره‌ها
                        </button>
                        <button className="bg-transparent text-blue-600 border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                            راهنمای انتخاب دوره
                        </button>
                    </div>
                </div>
            </section>

            {/* بخش جدیدترین دوره‌ها */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl mb-4">جدیدترین دوره‌ها</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
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
                                            price={course.price.toString()} // تبدیل به string
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

            {/* بخش همه دوره‌ها */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">همه دوره‌ها</h2>
                            <p className="text-gray-600">دوره‌های آموزشی در زمینه‌های مختلف</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">مرتب‌سازی بر اساس:</span>
                            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>پربازدیدترین</option>
                                <option>جدیدترین</option>
                                <option>ارزان‌ترین</option>
                                <option>گران‌ترین</option>
                                <option>بالاترین امتیاز</option>
                            </select>
                        </div>
                    </div>

                    {/* فیلتر دسته‌بندی */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category
                                    ? 'bg-blue-600 text-blue'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* لیست دوره‌ها */}
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map(course => (
                                <CourseCard
                                    key={course.id}
                                    title={course.title}
                                    instructor={course.instructor}
                                    duration={course.duration}
                                    price={course.price.toString()} // تبدیل به string
                                    image={course.image}
                                    rating={course.rating}
                                    students={course.students}
                                    isNew={course.isNew}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <i className="fas fa-search text-5xl text-gray-400 mb-4"></i>
                            <h3 className="text-xl font-medium text-gray-700 mb-2">هیچ دوره‌ای یافت نشد</h3>
                            <p className="text-gray-500">لطفاً فیلترهای جستجو را تغییر دهید یا عبارت دیگری جستجو کنید</p>
                        </div>
                    )}
                </div> {/* این تگ بسته کننده container اضافه شد */}
            </section>

            {/* بخش مزایا */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">چرا آکادمی آنلاین؟</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            ما بهترین تجربه یادگیری آنلاین را برای شما فراهم کرده‌ایم
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-user-graduate text-2xl text-blue-600"></i>
                            </div>
                            <h3 className="text-xl font-medium mb-2">اساتید مجرب</h3>
                            <p className="text-gray-600">با بهترین اساتید هر حوزه در ارتباط باشید</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-laptop-code text-2xl text-green-600"></i>
                            </div>
                            <h3 className="text-xl font-medium mb-2">محتوای به‌روز</h3>
                            <p className="text-gray-600">آخرین تکنولوژی‌ها و متدهای آموزشی</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-certificate text-2xl text-purple-600"></i>
                            </div>
                            <h3 className="text-xl font-medium mb-2">گواهینامه معتبر</h3>
                            <p className="text-gray-600">دریافت گواهینامه معتبر پس از اتمام دوره</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-headset text-2xl text-orange-600"></i>
                            </div>
                            <h3 className="text-xl font-medium mb-2">پشتیبانی دائمی</h3>
                            <p className="text-gray-600">پشتیبانی و پاسخگویی به سوالات شما</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* فوتر */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">آکادمی آنلاین</h3>
                            <p className="text-gray-400">
                                ما با ارائه بهترین دوره‌های آموزشی، به شما در رسیدن به اهدافتان کمک می‌کنیم.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium mb-4">دسترسی سریع</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">خانه</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">دوره‌ها</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">مقالات</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">درباره ما</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium mb-4">دسته‌بندی‌ها</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">برنامه‌نویسی</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">طراحی</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">هوش مصنوعی</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">مدیریت</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium mb-4">تماس با ما</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-gray-400">
                                    <i className="fas fa-phone"></i>
                                    <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <i className="fas fa-envelope"></i>
                                    <span>info@academy.com</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>تهران، خیابان ولیعصر</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>© ۲۰۲۳ آکادمی آنلاین. تمام حقوق محفوظ است.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}