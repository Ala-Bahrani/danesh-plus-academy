// types.ts
export interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  students: number;
  isNew?: boolean;
  category: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  students: number;
  isNew?: boolean;
  category: string;
}
// data/courseData.ts
export const latestCourses: Course[] = [
  {
    id: 1,
    title: "React.js پیشرفته",
    instructor: "علی محمدی",
    duration: "24 ساعت",
    price: 299000,
    originalPrice: 399000,
    image: "/images/react-course.jpg",
    rating: 4.9,
    students: 1247,
    isNew: true,
    category: "برنامه‌نویسی"
  },
  {
    id: 2,
    title: "تایپ‌اسکریپت در عمل",
    instructor: "سارا احمدی",
    duration: "18 ساعت",
    price: 249000,
    image: "/images/typescript-course.jpg",
    rating: 4.8,
    students: 892,
    isNew: true,
    category: "برنامه‌نویسی"
  },
  {
    id: 3,
    title: "طراحی رابط کاربری حرفه‌ای",
    instructor: "مهدی رضایی",
    duration: "20 ساعت",
    price: 279000,
    originalPrice: 349000,
    image: "/images/ui-design-course.jpg",
    rating: 4.7,
    students: 756,
    isNew: true,
    category: "طراحی"
  },
  {
    id: 4,
    title: "هوش مصنوعی مقدماتی",
    instructor: "نازنین کریمی",
    duration: "30 ساعت",
    price: 399000,
    image: "/images/ai-course.jpg",
    rating: 4.9,
    students: 1563,
    isNew: true,
    category: "هوش مصنوعی"
  },
  {
    id: 5,
    title: "مدیریت پروژه‌های نرم‌افزاری",
    instructor: "رضا حسینی",
    duration: "16 ساعت",
    price: 199000,
    image: "/images/project-management-course.jpg",
    rating: 4.6,
    students: 543,
    isNew: true,
    category: "مدیریت"
  }
];

export const allCourses: Course[] = [
  ...latestCourses,
  {
    id: 6,
    title: "جاوااسکریپت پیشرفته",
    instructor: "محمد جعفری",
    duration: "28 ساعت",
    price: 329000,
    originalPrice: 429000,
    image: "/images/javascript-course.jpg",
    rating: 4.8,
    students: 2145,
    category: "برنامه‌نویسی"
  },
  {
    id: 7,
    title: "توسعه اپلیکیشن موبایل",
    instructor: "فاطمه امینی",
    duration: "32 ساعت",
    price: 449000,
    image: "/images/mobile-development-course.jpg",
    rating: 4.7,
    students: 987,
    category: "برنامه‌نویسی"
  },
  {
    id: 8,
    title: "طریم UX/UI",
    instructor: "سپیده قاسمی",
    duration: "22 ساعت",
    price: 269000,
    image: "/images/ux-ui-course.jpg",
    rating: 4.9,
    students: 678,
    category: "طراحی"
  },
  {
    id: 9,
    title: "یادگیری ماشین",
    instructor: "امیرحسین نجفی",
    duration: "40 ساعت",
    price: 599000,
    image: "/images/machine-learning-course.jpg",
    rating: 4.8,
    students: 1234,
    category: "هوش مصنوعی"
  },
  {
    id: 10,
    title: "مدیریت مالی شخصی",
    instructor: "مریم موسوی",
    duration: "12 ساعت",
    price: 149000,
    image: "/images/finance-course.jpg",
    rating: 4.5,
    students: 432,
    category: "مالی"
  },
  {
    id: 11,
    title: "زبان انگلیسی تجاری",
    instructor: "آرمان صالحی",
    duration: "36 ساعت",
    price: 379000,
    image: "/images/english-course.jpg",
    rating: 4.7,
    students: 765,
    category: "زبان‌های خارجی"
  },
  {
    id: 12,
    title: "Node.js و توسعه بک‌اند",
    instructor: "پویا رضوانی",
    duration: "26 ساعت",
    price: 349000,
    image: "/images/nodejs-course.jpg",
    rating: 4.8,
    students: 1123,
    category: "برنامه‌نویسی"
  }
];


export const popularCourses = [
  {
    id: 1,
    title: "دوره جامع برنامه‌نویسی پایتون",
    instructor: "احمد محمدی",
    duration: "42 ساعت",
    price: "۱,۲۹۰,۰۰۰",
    image: "https://images.unsplash.com/photo-1650600538903-ec09f670c391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzYxODM0MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    students: 2540
  },
  {
    id: 2,
    title: "طراحی رابط کاربری با Figma",
    instructor: "سارا کریمی",
    duration: "28 ساعت",
    price: "۹۹۰,۰۰۰",
    image: "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjE3OTQ5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    students: 1820
  },
  {
    id: 3,
    title: "هوش مصنوعی و یادگیری ماشین",
    instructor: "دکتر رضا احمدی",
    duration: "56 ساعت",
    price: "۱,۸۹۰,۰۰۰",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE4MzY4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    students: 3200
  },
  {
    id: 4,
    title: "مدیریت کسب‌وکار دیجیتال",
    instructor: "مهدی نوری",
    duration: "35 ساعت",
    price: "۱,۱۹۰,۰۰۰",
    image: "https://images.unsplash.com/photo-1709715357564-ab64e091ead9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjE4OTI1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    students: 1450
  },
  {
    id: 5,
    title: "توسعه وب با React و Next.js",
    instructor: "علی حسینی",
    duration: "48 ساعت",
    price: "۱,۴۹۰,۰۰۰",
    image: "https://images.unsplash.com/photo-1598032604570-d65c6680d246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjb21wdXRlcnxlbnwxfHx8fDE3NjE4Mzc5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    students: 2100
  }
];


