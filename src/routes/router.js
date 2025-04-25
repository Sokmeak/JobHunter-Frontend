import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/views/Landing.vue";
import FindJobs from "@/pages/views/FindJobs.vue";
import BrowseCompanies from "@/pages/views/BrowseCompanies.vue";
import Layout from "@/pages/Layout.vue";
import CompanyLayout from "@/pages/CompanyLayout.vue";

// company

import Jobs from "@/pages/views/company/Jobs.vue";
import Dashboard from "@/pages/views/company/Dashboard.vue";
import JobDetail from "@/pages/views/company/JobDetail.vue";
import Applications from "@/pages/views/company/Applications.vue";
import CompanyProfile from "@/pages/views/company/CompanyProfile.vue";
import Messages from "@/pages/views/company/Messages.vue";
import Notifications from "@/pages/views/company/Notifications.vue";
import SavedJobs from "@/pages/views/company/SavedJobs.vue";
import Profile from "@/pages/views/company/Profile.vue";
import Settings from "@/pages/views/company/Settings.vue";
import Analytics from "@/pages/views/company/Analytics.vue";

const routes = [
  {
    path: "/",
    name: "Layout", // base route
    redirect: "/landing",
    component: Layout,
    children: [
      // the first child route
      {
        path: "landing",
        component: LandingPage,
        name: "LandingPage",
        props: true,
      },
      {
        path: "find-jobs",
        component: FindJobs,
        name: "FindJobs",
        props: true,
      },
      {
        path: "all-companies",
        component: BrowseCompanies,
        name: "BrowseCompanies",
        props: true,
      },
    ],
  },

  // company routes
  {
    path: "/company",
    name: "Company",
    component: CompanyLayout,
    redirect: "/company/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "jobs",
        name: "Jobs",
        component: Jobs,
      },
      {
        path: "jobs/:id",
        name: "JobDetail",
        component: JobDetail,
        props: true,
      },
      {
        path: "applications",
        name: "Applications",
        component: Applications,
      },
      {
        path: "company/:id",
        name: "CompanyProfile",
        component: CompanyProfile,
        props: true,
      },
      {
        path: "messages",
        name: "Messages",
        component: Messages,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "saved-jobs",
        name: "SavedJobs",
        component: SavedJobs,
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "settings",
        name: "Settings",
        component: Settings,
      },
      {
        path: "analytics",
        name: "Analytics",
        component: Analytics,
      },
    ],
  },

  // your main app
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
