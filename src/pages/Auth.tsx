import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // حالت‌های فرم ورود
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  // حالت‌های فرم ثبت‌نام
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // شبیه‌سازی درخواست API
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Login data:", loginData);
    setIsLoading(false);
    navigate("/"); // هدایت به صفحه اصلی پس از ورود
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("رمز عبور و تکرار آن مطابقت ندارند!");
      return;
    }

    if (!agreedToTerms) {
      alert("لطفاً با قوانین و مقررات موافقت کنید!");
      return;
    }

    setIsLoading(true);

    // شبیه‌سازی درخواست API
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Register data:", registerData);
    setIsLoading(false);
    navigate("/"); // هدایت به صفحه اصلی پس از ثبت‌نام
  };

  const features = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "دسترسی به تمام دوره‌ها",
      description: "به بیش از ۱۰۰۰ دوره آموزشی دسترسی پیدا کنید"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "پشتیبانی ۲۴ ساعته",
      description: "تیم پشتیبانی ما همیشه در کنار شماست"
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "پروفایل شخصی",
      description: "پروفایل اختصاصی با قابلیت پیگیری پیشرفت"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <span
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => navigate("/")}
            >
              دانش‌پلاس
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* بخش تب‌ها */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md border-0 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {activeTab === "login" ? "خوش آمدید" : "حساب کاربری جدید"}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {activeTab === "login"
                    ? "لطفاً اطلاعات حساب خود را وارد کنید"
                    : "برای شروع یادگیری ثبت‌نام کنید"
                  }
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="login" className="data-[state=active]:!bg-blue-600 data-[state=active]:text-white">
                      ورود
                    </TabsTrigger>
                    <TabsTrigger value="register" className="data-[state=active]:!bg-blue-600 data-[state=active]:text-white">
                      ثبت‌نام
                    </TabsTrigger>
                  </TabsList>

                  {/* فرم ورود */}
                  <TabsContent value="login">
                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 text-right">
                          ایمیل
                        </label>
                        <div className="relative">
                          <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="login-email"
                            name="email"
                            type="email"
                            value={loginData.email}
                            onChange={handleLoginChange}
                            required
                            placeholder="example@email.com"
                            className="pl-12 pr-7 py-3 text-right"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="login-password" className="block text-right text-sm font-medium text-gray-700">
                          رمز عبور
                        </label>
                        <div className="relative">
                          <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />

                          <Input
                            id="login-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                            placeholder="رمز عبور خود را وارد کنید"
                            className="h-12 pl-10 pr-10 text-right placeholder:text-right"
                          />

                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>

                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-gray-600">مرا به خاطر بسپار</span>
                        </label>
                        <button type="button" className="text-blue-600 hover:text-blue-700 font-medium">
                          رمز عبور را فراموش کرده‌اید؟
                        </button>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            در حال ورود...
                          </div>
                        ) : (
                          "ورود به حساب"
                        )}
                      </Button>
                    </form>

                    <div className="mt-6">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">یا ادامه با</span>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <Button variant="outline" className="py-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                          </svg>
                          Google
                        </Button>
                        <Button variant="outline" className="py-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                          Twitter
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  {/* فرم ثبت‌نام */}
                  <TabsContent value="register">
                    <form onSubmit={handleRegisterSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="register-fullName" className="block text-right text-sm font-medium text-gray-700">
                          نام و نام خانوادگی
                        </label>
                        <div className="relative">
                          <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="register-fullName"
                            name="fullName"
                            value={registerData.fullName}
                            onChange={handleRegisterChange}
                            required
                            placeholder="نام کامل خود را وارد کنید"
                            className="pl-12 pr-7 py-3 text-right"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="register-email" className="block text-right text-sm font-medium text-gray-700">
                          ایمیل
                        </label>
                        <div className="relative">
                          <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="register-email"
                            name="email"
                            type="email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            required
                            placeholder="example@email.com"
                            className="pl-12 pr-7 py-3 text-right"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="register-phone" className="block text-right text-sm font-medium text-gray-700">
                          شماره تماس
                        </label>
                        <div className="relative">
                          <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="register-phone"
                            name="phone"
                            value={registerData.phone}
                            onChange={handleRegisterChange}
                            required
                            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                            className="pl-12 pr-7 py-3 text-right"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="register-confirmPassword" className="block text-right text-sm font-medium text-gray-700">
                            تکرار رمز عبور
                          </label>

                          <Input
                            id="register-confirmPassword"
                            name="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            value={registerData.confirmPassword}
                            onChange={handleRegisterChange}
                            required
                            placeholder="تکرار رمز عبور"
                            className="h-12  py-3 text-right"
                          />

                        </div>
                        <div className="space-y-2">
                          <label htmlFor="register-password" className="block text-right text-sm font-medium text-gray-700">
                            رمز عبور
                          </label>
                          <div className="relative">
                            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                              id="register-password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              value={registerData.password}
                              onChange={handleRegisterChange}
                              required
                              placeholder="رمز عبور"
                              className="h-12  pl-12 pr-12 py-3 text-right"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>


                      </div>

                      <div className="flex items-center gap-3">

                        <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                          با <button type="button" className="text-blue-600 hover:text-blue-700 font-medium">قوانین و مقررات</button> و <button type="button" className="text-blue-600 hover:text-blue-700 font-medium">حریم خصوصی</button> موافقم
                        </label>
                        <input
                          type="checkbox"
                          id="terms"
                          checked={agreedToTerms}
                          onChange={(e) => setAgreedToTerms(e.target.checked)}
                          className="mt-1 rounded border-gray-300"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            در حال ثبت‌نام...
                          </div>
                        ) : (
                          "ایجاد حساب کاربری"
                        )}
                      </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                      با ثبت‌نام، موافقت می‌کنید که ایمیل‌های تبلیغاتی از ما دریافت کنید.
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* بخش ویژگی‌ها */}
          <div className="hidden lg:block space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                به جامعه دانش‌پلاس بپیوندید
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                با ثبت‌نام در دانش‌پلاس، به دنیایی از آموزش‌های تخصصی دسترسی پیدا کنید
                و مهارت‌های خود را به سطح بعدی برسانید.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">آماده شروع هستید؟</h3>
              <p className="text-blue-100 mb-4">
                همین حالا ثبت‌نام کنید و از ۷ روز رایگان بهره‌مند شوید
              </p>
              <Button
                variant="secondary"
                className="w-full bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => setActiveTab("register")}
              >
                شروع رایگان
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}