<template>
  <div class="bg-white border-end h-100 d-flex flex-column">
    <!-- Logo -->
    <div class="p-4">
      <router-link
        to="/"
        class="d-flex align-items-center text-decoration-none"
      >
        <div
          class="bg-primary rounded d-flex align-items-center justify-content-center me-2"
          style="width: 32px; height: 32px"
        >
          <span class="text-white fw-bold">J</span>
        </div>
        <span class="fs-5 fw-bold text-dark">JobHunter</span>
      </router-link>
    </div>

    <!-- Main nav -->
    <div class="flex-grow-1 px-3 py-2">
      <p class="text-uppercase text-muted small fw-medium px-2 mb-2">Menu</p>
      <nav class="nav flex-column mb-4">
        <router-link
          to="/company/dashboard"
          class="nav-link d-flex align-items-center px-3 py-2 rounded mb-1"
          :class="
            isActive('/dashboard') ? 'bg-light text-primary' : 'text-secondary'
          "
        >
          <i class="bi bi-house me-3"></i>
          <span>Dashboard</span>
        </router-link>

        <router-link
          to="/company/jobs"
          class="nav-link d-flex align-items-center px-3 py-2 rounded mb-1"
          :class="
            isActive('/company/jobs')
              ? 'bg-light text-primary'
              : 'text-secondary'
          "
        >
          <i class="bi bi-briefcase me-3"></i>
          <span>Browse Jobs</span>
        </router-link>

        <router-link
          to="/company/applications"
          class="nav-link d-flex align-items-center px-3 py-2 rounded mb-1"
          :class="
            isActive('/company/applications')
              ? 'bg-light text-primary'
              : 'text-secondary'
          "
        >
          <i class="bi bi-file-earmark-text me-3"></i>
          <span>Applications</span>
        </router-link>

        <router-link
          to="/company/messages"
          class="nav-link d-flex align-items-center px-3 py-2 rounded mb-1"
          :class="
            isActive('/messages') ? 'bg-light text-primary' : 'text-secondary'
          "
        >
          <i class="bi bi-chat-square-text me-3"></i>
          <span>Messages</span>
          <span class="ms-auto badge bg-primary rounded-pill">3</span>
        </router-link>

        <router-link
          to="/company/notifications"
          class="nav-link d-flex align-items-center px-3 py-2 rounded mb-1"
          :class="
            isActive('/notifications')
              ? 'bg-light text-primary'
              : 'text-secondary'
          "
        >
          <i class="bi bi-bell me-3"></i>
          <span>Notifications</span>
        </router-link>

        <router-link
          to="/company/saved-jobs"
          class="nav-link d-flex align-items-center px-3 py-2 rounded mb-1"
          :class="
            isActive('/saved-jobs') ? 'bg-light text-primary' : 'text-secondary'
          "
        >
          <i class="bi bi-bookmark me-3"></i>
          <span>Saved Jobs</span>
        </router-link>
      </nav>

      <p class="text-uppercase text-muted small fw-medium px-2 mb-2">
        Organization
      </p>
      <nav class="nav flex-column">
        <router-link
          to="/company/company-profile"
          class="nav-link d-flex align-items-center px-3 py-2 rounded mb-1"
          :class="
            isActive('/company-profile')
              ? 'bg-light text-primary'
              : 'text-secondary'
          "
        >
          <i class="bi bi-people me-3"></i>
          <span>Company Profile</span>
        </router-link>

        <router-link
          to="/company/analytics"
          class="nav-link d-flex align-items-center px-3 py-2 rounded mb-1"
          :class="
            isActive('/analytics') ? 'bg-light text-primary' : 'text-secondary'
          "
        >
          <i class="bi bi-bar-chart me-3"></i>
          <span>Analytics</span>
        </router-link>
      </nav>
    </div>

    <!-- Footer nav -->
    <div class="p-3 border-top">
      <nav class="nav flex-column">
        <router-link
          to="/company/settings"
          class="nav-link d-flex align-items-center px-3 py-2 rounded mb-1"
          :class="
            isActive('/settings') ? 'bg-light text-primary' : 'text-secondary'
          "
        >
          <i class="bi bi-gear me-3"></i>
          <span>Settings</span>
        </router-link>
        <a
          href="#"
          @click.prevent="handleLogout"
          class="nav-link d-flex align-items-center px-3 py-2 rounded text-secondary"
        >
          <i class="bi bi-box-arrow-right me-3"></i>
          <span>Logout</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Sidebar",
  setup() {
    const router = useRouter();
    const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      router.push("/login");
    };
    return { handleLogout };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>
