import { useState } from "react";
import { CheckCircle, Star, Users, BookOpen, Award, Clock, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Teach() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialty: "",
    experience: "",
    bio: "",
    sampleWork: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // در اینجا می‌توانید اطلاعات را به سرور ارسال کنید
    console.log("Form submitted:", formData);
    alert("درخواست شما با موفقیت ثبت شد! به زودی با شما تماس خواهیم گرفت.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      specialty: "",
      experience: "",
      bio: "",
      sampleWork: ""
    });
  };

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "جامعه بزرگ دانشجویان",
      description: "به جامعه‌ای با هزاران دانشجوی مشتاق یادگیری دسترسی پیدا کنید"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "درآمد عالی",
      description: "تا ۸۰٪ از درآمد دوره‌های خود را دریافت کنید"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "ابزارهای آموزشی پیشرفته",
      description: "از بهترین ابزارهای تولید و مدیریت محتوای آموزشی استفاده کنید"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "تبدیل به مدرس برتر",
      description: "با پشتیبانی ما به یکی از مدرسین محبوب پلتفرم تبدیل شوید"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "زمان‌بندی انعطاف‌پذیر",
      description: "در هر زمان و مکانی که هستید، تدریس کنید"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "پشتیبانی دائمی",
      description: "تیم پشتیبانی ما در تمام مراحل همراه شما خواهد بود"
    }
  ];

  const stats = [
    { number: "۵,۰۰۰+", label: "مدرس فعال" },
    { number: "۲۵۰,۰۰۰+", label: "دانشجو" },
    { number: "۵۰ میلیارد", label: "درآمد پرداختی" },
    { number: "۴.۸", label: "میانگین امتیاز اساتید" }
  ];

  const steps = [
    {
      step: 1,
      title: "ثبت‌نام و تکمیل پروفایل",
      description: "فرم درخواست را پر کنید و اطلاعات تخصصی خود را ثبت نمایید"
    },
    {
      step: 2,
      title: "تایید صلاحیت",
      description: "تیم ما مدارک و تخصص شما را بررسی و تایید می‌کند"
    },
    {
      step: 3,
      title: "تولید محتوا",
      description: "دوره آموزشی خود را با راهنمایی متخصصین ما تولید کنید"
    },
    {
      step: 4,
      title: "انتشار و درآمدزایی",
      description: "دوره خود را منتشر کنید و از اولین روز شروع به درآمدزایی کنید"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header/>
      {/* هیرو سکشن */}
      <section className="relative py-20 md:py-28 bg-gradient-to-l from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              دانش خود را 
              <span className="text-yellow-300"> به درآمد </span>
              تبدیل کنید
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              به خانواده مدرسین آکادمی دانش‌پلاس بپیوندید و تجربه‌های خود را با هزاران دانشجوی مشتاق به اشتراک بگذارید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-xl"
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                شروع به تدریس
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-blue-600 hover:bg-white/10 text-lg px-8 py-3 rounded-xl"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                مزایای همکاری
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* آمار و ارقام */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مزایای همکاری */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              چرا مدرس دانش‌پلاس شوید؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ما بهترین شرایط را برای موفقیت شما فراهم کرده‌ایم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* مراحل همکاری */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              در ۴ مرحله ساده مدرس شوید
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              راهنمای گام به گام برای تبدیل شدن به مدرس دانش‌پلاس
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* فرم درخواست همکاری */}
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                فرم درخواست همکاری
              </h2>
              <p className="text-xl text-gray-600">
                اطلاعات خود را وارد کنید تا با شما تماس بگیریم
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        نام و نام خانوادگی *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="نام کامل خود را وارد کنید"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        ایمیل *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="example@email.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        شماره تماس *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                        زمینه تخصصی *
                      </label>
                      <Input
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleInputChange}
                        required
                        placeholder="مثلاً: برنامه‌نویسی، طراحی، بازاریابی و..."
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      سابقه تدریس و تجربه کاری
                    </label>
                    <Input
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="سابقه تدریس و تجربیات مرتبط خود را بیان کنید"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                      معرفی مختصر *
                    </label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      required
                      placeholder="خودتان را به طور مختصر معرفی کنید و انگیزه‌تان از تدریس را بیان نمایید"
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="sampleWork" className="block text-sm font-medium text-gray-700 mb-2">
                      نمونه کارها یا لینک‌های مرتبط
                    </label>
                    <Textarea
                      id="sampleWork"
                      name="sampleWork"
                      value={formData.sampleWork}
                      onChange={handleInputChange}
                      placeholder="لینک نمونه کارها، رزومه، شبکه‌های اجتماعی و..."
                      rows={3}
                      className="w-full"
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium">پس از ثبت درخواست:</p>
                        <p>تیم پشتیبانی ما حداکثر طی ۴۸ ساعت با شما تماس خواهد گرفت و راهنمایی‌های لازم را ارائه خواهد داد.</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 rounded-xl"
                  >
                    ارسال درخواست همکاری
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA پایانی */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              سوالی دارید؟
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>support@daneshplus.ir</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}