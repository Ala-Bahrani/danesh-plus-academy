export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  price: number;
  discountPrice?: number;
  image: string;
  rating: number;
  students: number;
  category: string;
  level: "مبتدی" | "متوسط" | "پیشرفته";
  createdAt: string;
  tags: string[];
}

export interface CourseFilters {
  category: string;
  level: string;
  priceRange: [number, number];
  sortBy: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "student" | "instructor" | "admin";
}