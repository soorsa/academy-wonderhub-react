import type { EnrolledCourse } from "./types/CourseTypes";
import type { Notification } from "./types/NotificationTypes";
import type { Transaction } from "./types/TransactionTypes";

export const enrolledCourses: EnrolledCourse[] = [
  {
    id: 1,
    instructor: "John Doe",
    title: "Crypto Trading",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 20,
    enrolled_date: "25 march 2025",
  },
  {
    id: 2,
    instructor: "John Doe",
    title: "UI/UX Design Foundation",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 50,
    enrolled_date: "25 march 2025",
  },
  {
    id: 3,
    instructor: "John Doe",
    title: "Video Editing",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 5,
    enrolled_date: "25 march 2025",
  },
  {
    id: 4,
    instructor: "John Doe",
    title: "Landing Page with WordPress",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 10,
    enrolled_date: "25 march 2025",
  },
  {
    id: 4,
    instructor: "John Doe",
    title: "3D Animation and Render",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 70,
    enrolled_date: "25 march 2025",
  },
  {
    id: 5,
    instructor: "John Doe",
    title: "Web Design",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 20,
    enrolled_date: "25 march 2025",
  },
  {
    id: 6,
    instructor: "John Doe",
    title: "Robotics and AI Engineering",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 20,
    enrolled_date: "25 march 2025",
  },
];

export const transactionData: Transaction[] = [
  {
    id: 1,
    amount: 21000,
    description:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 may 2025",
    payment_method: "Paystack",
    status: "success",
  },
  {
    id: 2,
    amount: 15000,
    description:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 may 2025",
    payment_method: "Wallet",
    status: "success",
  },
  {
    id: 3,
    amount: 9000,
    description:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 may 2025",
    payment_method: "Paystack",
    status: "failed",
  },
  {
    id: 3,
    amount: 145000,
    description:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 may 2025",
    payment_method: "Bank Transfer",
    status: "pending",
  },
];

export const NotificationData: Notification[] = [
  {
    id: 1,
    title: "New Course Alert!",
    content:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 march 2025",
    is_read: "Read",
    updated_at: "25 march 2025",
  },
  {
    id: 2,
    title: "New Course Alert!",
    content:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 march 2025",
    is_read: "Unread",
    updated_at: "25 march 2025",
  },
  {
    id: 3,
    title: "New Course Alert!",
    content:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 march 2025",
    is_read: "Read",
    updated_at: "25 march 2025",
  },
  {
    id: 4,
    title: "New Course Alert!",
    content:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 march 2025",
    is_read: "Read",
    updated_at: "25 march 2025",
  },
];
