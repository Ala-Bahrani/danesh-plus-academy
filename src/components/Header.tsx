import { useState, useCallback, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, GraduationCap, X, User, BookOpen, Layers, PenSquare, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../components/ui/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { 
      label: "خانه", 
      path: "/", 
      icon: <GraduationCap className="h-4 w-4" />
    },
    { 
      label: "دوره‌ها", 
      path: "/courses", 
      icon: <BookOpen className="h-4 w-4" />
    },
    { 
      label: "دسته‌بندی‌ها", 
      path: "/categories", 
      icon: <Layers className="h-4 w-4" />
    },
    { 
      label: "مدرس شوید", 
      path: "/teach", 
      icon: <PenSquare className="h-4 w-4" />
    },
    { 
      label: "وبلاگ", 
      path: "/blog", 
      icon: <MessageCircle className="h-4 w-4" />
    },
    { 
      label: "تماس با ما", 
      path: "/contact", 
      icon: <MessageCircle className="h-4 w-4" />
    }
  ];

  // تشخیص اسکرول برای افکت شیشه‌ای
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // هندل state navigation برای اسکرول
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleNavigation = useCallback((path: string) => {
    setIsOpen(false);
    
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  }, [navigate, location.pathname]);

  const handleLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 border-b",
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-200" 
        : "bg-white/80 backdrop-blur-md border-transparent"
    )}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section */}
          <div 
            role="button"
            tabIndex={0}
            aria-label="برو به صفحه اصلی - آکادمی دانش‌پلاس"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={handleLogoClick}
            onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <GraduationCap className="h-8 w-8 text-blue-600 relative z-10 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                دانش‌پلاس
              </span>
              <span className="text-xs text-gray-500 -mt-1">آکادمی تخصصی</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav 
            aria-label="منوی اصلی" 
            className="hidden lg:flex items-center gap-1 bg-gray-50/80 rounded-2xl p-1.5 border border-gray-200/60"
          >
            {menuItems.map((item) => {
              const isActive = isActivePath(item.path);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                    "hover:text-blue-600 hover:bg-white hover:shadow-sm",
                    isActive
                      ? "text-blue-600 bg-white shadow-sm border border-blue-100"
                      : "text-gray-600"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Navigation Compact (برای صفحه متوسط) */}
          <nav 
            aria-label="منوی اصلی" 
            className="hidden md:flex lg:hidden items-center gap-1"
          >
            {menuItems.map((item) => {
              const isActive = isActivePath(item.path);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    "hover:text-blue-600 hover:bg-blue-50",
                    isActive
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-600"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions Section */}
          <div className="flex items-center gap-3">
            {/* دکمه ورود/ثبت‌نام دسکتاپ */}
            <Button
              onClick={() => navigate("/login")}
              className="hidden md:inline-flex rounded-xl px-6 gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <User className="h-4 w-4" />
              ورود / ثبت‌نام
            </Button>

            {/* دکمه ورود/ثبت‌نام موبایل */}
            <Button
              onClick={() => navigate("/login")}
              size="icon"
              className="md:hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shadow-sm"
              aria-label="ورود به حساب کاربری"
            >
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden rounded-xl border border-gray-300 bg-white hover:bg-gray-50"
                  aria-label="باز کردن منوی موبایل"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              
              <SheetContent 
                side="right" 
                className="w-[320px] max-w-full !bg-gradient-to-br from-white to-gray-50/80 border-l border-gray-200/60 backdrop-blur-md"
              >
                <div className="flex flex-col h-full">
                  
                  {/* Header با افکت شیشه‌ای */}
                  <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200/60 bg-white/50 rounded-t-2xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <GraduationCap className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          دانش‌پلاس
                        </span>
                        <span className="text-xs text-gray-500 -mt-1">آکادمی تخصصی</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-9 w-9 rounded-xl border border-gray-300 bg-white/80 hover:bg-white"
                      aria-label="بستن منو"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Navigation Items */}
                  <nav className="flex-1 p-6 space-y-2">
                    {menuItems.map((item) => {
                      const isActive = isActivePath(item.path);
                      return (
                        <button
                          key={item.label}
                          onClick={() => handleNavigation(item.path)}
                          className={cn(
                            "flex items-center gap-3 w-full p-4 rounded-xl text-right transition-all duration-200",
                            "hover:bg-white hover:shadow-sm hover:border hover:border-gray-200",
                            isActive
                              ? "bg-white shadow-sm border border-blue-100 text-blue-600 font-semibold"
                              : "text-gray-700 bg-white/50 border border-transparent"
                          )}
                        >
                          <div className={cn(
                            "p-2 rounded-lg transition-colors",
                            isActive 
                              ? "bg-blue-100 text-blue-600" 
                              : "bg-gray-100 text-gray-600"
                          )}>
                            {item.icon}
                          </div>
                          <span className="flex-1 text-base font-medium">{item.label}</span>
                          {isActive && (
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </nav>

                  {/* Footer با دکمه CTA */}
                  <div className="p-6 pt-4 border-t border-gray-200/60 bg-white/50 backdrop-blur-md rounded-b-2xl">
                    <Button
                      onClick={() => {
                        navigate("/login");
                        setIsOpen(false);
                      }}
                      className="w-full rounded-xl py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shadow-sm hover:shadow-md transition-all duration-200 text-white font-semibold"
                    >
                      <User className="h-5 w-5 ml-2" />
                      ورود به حساب کاربری
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-3">
                      عضو نیستید؟ 
                      <button 
                        onClick={() => {
                          navigate("/register");
                          setIsOpen(false);
                        }}
                        className="text-blue-600 hover:text-blue-700 font-medium pr-1"
                      >
                        همین حالا ثبت‌نام کنید
                      </button>
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}