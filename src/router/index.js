import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    }, 
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    }, 
    {
      path: "/studyProgram",
      name: "studyProgram",
      component: () => import("../views/StudyProgramView.vue"),
    }, 
    {
      path: "/lecturer",
      name: "lecturer",
      component: () => import("../views/LecturerView.vue"),
    }, 
    {
      path: "/studyClass",
      name: "studyClass",
      component: () => import("../views/StudyClassView.vue"),
    }, 
    {
      path: "/lecture",
      name: "lecture",
      component: () => import("../views/LectureView.vue"),
    },
    {
      path: "/semester",
      name: "semester",
      component: () => import("../views/SemesterView.vue"),
    },
    {
      path: "/lectureDate",
      name: "lectureDate",
      component: () => import("../views/LectureDateView.vue"),
    },
  ],
});

export default router;
