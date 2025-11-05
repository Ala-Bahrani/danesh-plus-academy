import { Code, Palette, Globe, Database, Brain, Briefcase } from "lucide-react";

export function Categories() {
  const categories = [
    { icon: Code, title: "برنامه‌نویسی", color: "bg-blue-100 text-blue-600" },
    { icon: Palette, title: "طراحی", color: "bg-purple-100 text-purple-600" },
    { icon: Globe, title: "زبان", color: "bg-green-100 text-green-600" },
    { icon: Database, title: "داده‌کاوی", color: "bg-orange-100 text-orange-600" },
    { icon: Brain, title: "هوش مصنوعی", color: "bg-pink-100 text-pink-600" },
    { icon: Briefcase, title: "مدیریت", color: "bg-indigo-100 text-indigo-600" }
  ];

  return (
    <section id="categories" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">دسته‌بندی‌های آموزشی</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            از بین دسته‌بندی‌های متنوع، حوزه مورد علاقه خود را انتخاب کنید
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-white rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-sm md:text-base">{category.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
