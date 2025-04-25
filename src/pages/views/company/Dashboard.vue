<!-- filepath: d:\iPproject\JobHunter-Frontend\src\pages\views\Dashboard.vue -->
<template>
  <!-- Sidebar -->
  <!-- <Sidebar /> -->

  <!-- Main Content -->
  <div class="container py-4 flex-grow-1">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <h1 class="h3 fw-bold">Dashboard</h1>
        <div class="btn-toolbar" role="toolbar">
          <div class="btn-group me-2" role="group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Create CV
            </button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-sm btn-primary">
              Find Jobs
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="row row-cols-1 row-cols-md-4 g-4 mb-4">
      <div class="col" v-for="stat in stats" :key="stat.label">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div
                class="bg-light rounded d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i :class="`${stat.icon} fs-4 text-${stat.color}`"></i>
              </div>
              <span class="text-muted">{{ stat.label }}</span>
            </div>
            <p class="display-6 fw-bold mb-1">{{ stat.value }}</p>
            <p :class="`${stat.deltaColor} mb-0 small`">
              {{ stat.delta }}% from last month
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Applications & Upcoming Interviews -->
    <div class="row g-4 mb-4">
      <!-- Recent Applications -->
      <div class="col-md-8">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h5 class="card-title fw-bold mb-0">Recent Job Applications</h5>
              <router-link to="/applications" class="text-decoration-none">
                View All <i class="bi bi-arrow-right ms-1"></i>
              </router-link>
            </div>
            <div class="list-group list-group-flush">
              <div
                v-for="job in recentJobs"
                :key="job.id"
                class="list-group-item list-group-item-action border rounded mb-3"
              >
                <div class="d-flex">
                  <div
                    class="bg-light rounded d-flex align-items-center justify-content-center me-3"
                    style="width: 48px; height: 48px"
                  >
                    <i class="bi bi-building fs-4 text-muted"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <h6 class="mb-1">{{ job.title }}</h6>
                        <p class="text-muted small mb-0">{{ job.company }}</p>
                      </div>
                      <button
                        type="button"
                        class="btn btn-sm"
                        :class="`btn-outline-${job.statusColor}`"
                        disabled
                      >
                        {{ job.status }}
                      </button>
                    </div>
                    <div
                      class="d-flex align-items-center text-muted small mt-2"
                    >
                      <div class="me-3">
                        <i class="bi bi-geo-alt me-1"></i>{{ job.location }}
                      </div>
                      <div class="me-3">
                        <i class="bi bi-clock me-1"></i>{{ job.type }}
                      </div>
                      <div>
                        <i class="bi bi-currency-dollar me-1"></i
                        >{{ job.salary }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming Interviews -->
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h5 class="card-title fw-bold mb-0">Upcoming Interviews</h5>
              <router-link to="/interviews" class="text-decoration-none">
                View All <i class="bi bi-arrow-right ms-1"></i>
              </router-link>
            </div>
            <div class="list-group list-group-flush">
              <div
                v-for="intv in upcomingInterviews"
                :key="intv.id"
                class="list-group-item border rounded mb-3"
              >
                <div
                  class="d-flex justify-content-between align-items-center mb-2"
                >
                  <div class="d-flex align-items-center">
                    <div
                      class="bg-light rounded d-flex align-items-center justify-content-center me-3"
                      style="width: 40px; height: 40px"
                    >
                      <i class="bi bi-building fs-5 text-muted"></i>
                    </div>
                    <div>
                      <h6 class="mb-1">{{ intv.title }}</h6>
                      <p class="text-muted small mb-0">{{ intv.company }}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-sm"
                    :class="`btn-outline-${intv.statusColor}`"
                    disabled
                  >
                    {{ intv.status }}
                  </button>
                </div>
                <div class="text-muted small">
                  <i class="bi bi-calendar me-2"></i>{{ intv.when }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recommended Jobs -->
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h5 class="card-title fw-bold mb-0">Recommended Jobs</h5>
          <router-link to="/jobs" class="text-decoration-none">
            View All <i class="bi bi-arrow-right ms-1"></i>
          </router-link>
        </div>
        <div class="row g-3">
          <div class="col-md-4" v-for="job in recommendedJobs" :key="job.id">
            <div class="card h-100">
              <div class="card-body d-flex flex-column">
                <div class="d-flex mb-3">
                  <div
                    class="bg-light rounded d-flex align-items-center justify-content-center me-3"
                    style="width: 48px; height: 48px"
                  >
                    <i class="bi bi-building fs-4 text-muted"></i>
                  </div>
                  <div>
                    <h6 class="mb-1">{{ job.title }}</h6>
                    <p class="text-muted small mb-1">{{ job.company }}</p>
                    <div class="d-flex align-items-center small text-warning">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <span class="text-muted ms-1">({{ job.rating }})</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center text-muted small mb-3">
                  <div class="me-3">
                    <i class="bi bi-geo-alt me-1"></i>{{ job.mode }}
                  </div>
                  <div><i class="bi bi-clock me-1"></i>{{ job.type }}</div>
                </div>
                <div
                  class="mt-auto d-flex justify-content-between align-items-center"
                >
                  <span class="fw-medium">${{ job.salary }}</span>
                  <button type="button" class="btn btn-sm btn-primary">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      stats: [
        {
          label: "Jobs Applied",
          value: 46,
          icon: "bi bi-briefcase",
          color: "primary",
          delta: 14,
          deltaColor: "text-success",
        },
        {
          label: "Interviews",
          value: 12,
          icon: "bi bi-people",
          color: "success",
          delta: 8,
          deltaColor: "text-success",
        },
        {
          label: "Profile Views",
          value: 324,
          icon: "bi bi-bar-chart",
          color: "danger",
          delta: -2,
          deltaColor: "text-danger",
        },
        {
          label: "Saved Jobs",
          value: 24,
          icon: "bi bi-bookmark",
          color: "warning",
          delta: 6,
          deltaColor: "text-success",
        },
      ],
      recentJobs: [
        {
          id: 1,
          title: "Senior UI/UX Designer",
          company: "Dribbble Inc.",
          location: "San Francisco, CA",
          type: "Full Time",
          salary: "$80k–$120k",
          status: "Applied",
          statusColor: "primary",
        },
        {
          id: 2,
          title: "Product Designer",
          company: "Google Inc.",
          location: "New York, NY",
          type: "Full Time",
          salary: "$90k–$130k",
          status: "Applied",
          statusColor: "primary",
        },
        {
          id: 3,
          title: "Frontend Developer",
          company: "Figma Inc.",
          location: "Remote",
          type: "Contract",
          salary: "$70k–$90k",
          status: "Applied",
          statusColor: "primary",
        },
      ],
      upcomingInterviews: [
        {
          id: 1,
          title: "Product Designer",
          company: "Google Inc.",
          when: "Tomorrow, 10:00 AM – 11:30 AM",
          status: "Scheduled",
          statusColor: "success",
        },
        {
          id: 2,
          title: "UI Engineer",
          company: "Microsoft",
          when: "Friday, 2:00 PM – 3:00 PM",
          status: "Scheduled",
          statusColor: "success",
        },
      ],
      recommendedJobs: [
        {
          id: 1,
          title: "Frontend Developer",
          company: "Figma Inc.",
          rating: "4.8",
          mode: "Remote",
          type: "Full Time",
          salary: "70k–90k",
        },
        {
          id: 2,
          title: "UX Researcher",
          company: "Dribbble Inc.",
          rating: "4.7",
          mode: "San Francisco, CA",
          type: "Full Time",
          salary: "80k–100k",
        },
        {
          id: 3,
          title: "Visual Designer",
          company: "Dropbox",
          rating: "4.9",
          mode: "Remote",
          type: "Part Time",
          salary: "60k–80k",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bi {
  /* ensure Bootstrap Icons inherit font-size */
  font-size: 1.5rem;
}
</style>
