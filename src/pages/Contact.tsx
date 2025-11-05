import { useState } from 'react';
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  User, 
  CheckCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "تلفن تماس",
      details: ["۰۲۱-۱۲۳۴۵۶۷۸", "۰۹۱۲-۱۲۳۴۵۶۷"],
      description: "پاسخگوی شما در ساعات کاری"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "ایمیل",
      details: ["info@daneshplus.com", "support@daneshplus.com"],
      description: "در کمتر از ۲۴ ساعت پاسخ می‌دهیم"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "آدرس",
      details: ["تهران، خیابان ولیعصر", "پلاک ۱۲۳۴، طبقه چهارم"],
      description: "ساعات بازدید: ۹ صبح تا ۵ عصر"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "ساعات کاری",
      details: ["شنبه تا چهارشنبه: ۸:۰۰ - ۱۷:۰۰", "پنجشنبه: ۸:۰۰ - ۱۴:۰۰"],
      description: "جمعه‌ها تعطیل"
    }
  ];

  const faqItems = [
    {
      question: "چطور می‌توانم در دوره‌ها ثبت نام کنم؟",
      answer: "برای ثبت نام در دوره‌ها، ابتدا در سایت ثبت نام کنید، سپس به صفحه دوره مورد نظر رفته و روی دکمه 'ثبت نام در دوره' کلیک کنید. پس از پرداخت هزینه، دوره در پنل کاربری شما فعال خواهد شد."
    },
    {
      question: "آیا امکان پرداخت اقساطی وجود دارد؟",
      answer: "بله، برای دوره‌های با قیمت بالای ۵۰۰ هزار تومان، امکان پرداخت ۲ تا ۶ قسطی وجود دارد. برای اطلاعات بیشتر با پشتیبانی تماس بگیرید."
    },
    {
      question: "چطور می‌توانم مدرس شوم؟",
      answer: "برای همکاری به عنوان مدرس، به صفحه 'مدرس شوید' در منوی اصلی مراجعه کرده و فرم درخواست همکاری را پر کنید. تیم ما در کمتر از ۴۸ ساعت با شما تماس خواهد گرفت."
    },
    {
      question: "گواهینامه دوره‌ها معتبر است؟",
      answer: "بله، تمام گواهینامه‌های ما دارای کد رهگیری و قابلیت استعلام هستند و توسط آکادمی دانش‌پلاس صادر می‌شوند."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // شبیه‌سازی ارسال فرم
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // بازنشانی وضعیت پس از ۵ ثانیه
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleSupportCall = () => {
    window.location.href = 'tel:+982112345678';
  };

  const handleMapClick = () => {
    // باز کردن نقشه در Google Maps
    const address = encodeURIComponent('تهران، خیابان ولیعصر، پلاک ۱۲۳۴');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* هیرو بخش */}
      <section className="bg-gradient-to-l from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تماس با ما</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            ما اینجا هستیم تا به سوالات شما پاسخ دهیم. با خیال راحت با ما در ارتباط باشید
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageCircle className="h-5 w-5 ml-2 " />
              ارسال پیام
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              onClick={handleSupportCall}
            >
              <Phone className="h-5 w-5 ml-2 " />
              تماس فوری
            </Button>
          </div>
        </div>
      </section>

      {/* اطلاعات تماس */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">راه‌های ارتباطی</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              از طریق روش‌های مختلف می‌توانید با ما در ارتباط باشید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <div className="space-y-1 mb-3">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* فرم تماس و اطلاعات */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* فرم تماس */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Send className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">ارسال پیام</h3>
                      <p className="text-gray-600">پیام خود را برای ما ارسال کنید</p>
                    </div>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-800 mb-2">پیام شما با موفقیت ارسال شد!</h4>
                      <p className="text-gray-600">ما در اسرع وقت با شما تماس خواهیم گرفت.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            نام و نام خانوادگی *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="نام خود را وارد کنید"
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
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="email@example.com"
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            شماره تماس
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            موضوع *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="موضوع پیام"
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          متن پیام *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="متن پیام خود را اینجا بنویسید..."
                          className="w-full resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 py-3 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                            در حال ارسال...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 ml-2" />
                            ارسال پیام
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* اطلاعات جانبی */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <User className="h-12 w-12 mb-4 opacity-90" />
                  <h4 className="text-xl font-bold mb-3">پشتیبانی فنی</h4>
                  <p className="opacity-90 mb-4">
                    تیم پشتیبانی ما آماده پاسخگویی به سوالات فنی و مشکلات شما است.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                    onClick={handleSupportCall}
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    تماس با پشتیبانی
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-4">سوالات متداول</h4>
                  <div className="space-y-3">
                    {faqItems.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between p-3 text-right hover:bg-gray-50 transition-colors text-sm font-medium"
                        >
                          <span className="flex-1 text-right">{faq.question}</span>
                          {openFaqIndex === index ? (
                            <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0 mr-2" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0 mr-2" />
                          )}
                        </button>
                        {openFaqIndex === index && (
                          <div className="p-3 bg-gray-50 border-t border-gray-200">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gray-900 text-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-4">عضویت در خبرنامه</h4>
                  <p className="text-gray-300 mb-4 text-sm">
                    از آخرین دوره‌ها و تخفیف‌های ویژه با خبر شوید.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="ایمیل خود را وارد کنید" 
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 border-0">
                      عضویت در خبرنامه
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* نقشه */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">ما کجا هستیم؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              برای ملاقات حضوری می‌توانید به آدرس ما مراجعه کنید
            </p>
          </div>
          
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div 
                className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center cursor-pointer relative group"
                onClick={handleMapClick}
              >
                {/* نقشه شبیه‌سازی شده */}
                <div className="absolute inset-0 bg-pattern bg-center bg-cover opacity-20"></div>
                
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">دفتر مرکزی دانش‌پلاس</h3>
                  <p className="text-gray-600 mb-1">تهران، خیابان ولیعصر</p>
                  <p className="text-gray-600 mb-4">پلاک ۱۲۳۴، طبقه چهارم</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 border-0 group-hover:shadow-lg transition-all">
                    <MapPin className="h-4 w-4 ml-2" />
                    مشاهده در Google Maps
                  </Button>
                </div>

                {/* افکت hover */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}