<!-- filepath: d:\iPproject\JobHunter-Frontend\src\pages\views\Analytics.vue -->
<template>
  <!-- Sidebar -->
  <!-- <Sidebar /> -->

  <!-- Main Content -->
  <div class="container py-4 flex-grow-1">
    <!-- Statistics Cards Row -->
    <div class="row mb-4">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <h1 class="h3 fw-bold">Analytics</h1>
        <div>
          <button class="btn btn-outline-secondary me-2">
            <i class="bi bi-calendar me-2"></i>
            Last 12 Months
            <i class="bi bi-chevron-down ms-2"></i>
          </button>
          <button class="btn btn-primary">Export Report</button>
        </div>
      </div>
    </div>

    <!-- Key Metrics Cards -->
    <div class="row mb-4">
      <!-- Applications Card -->
      <div class="col-md-3">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div
                class="bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="bi bi-briefcase text-primary fs-4"></i>
              </div>
              <span class="text-muted">Applications</span>
            </div>
            <p class="display-6 fw-bold mb-1">756</p>
            <div class="d-flex align-items-center text-success">
              <i class="bi bi-arrow-up me-1"></i>
              <span class="small">+14% from last year</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Similar cards for Interviews, Profile Views, and Messages -->
      <!-- ... -->
    </div>

    <!-- Charts Section -->
    <div class="row mb-4">
      <!-- Application Sources Pie Chart -->
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="fw-bold mb-4">Job Application Sources</h5>
            <div class="d-flex justify-content-center mb-3">
              <!-- Pie chart visualization would go here -->
              <div
                class="position-relative"
                style="width: 200px; height: 200px"
              >
                <!-- Circular segments representing different sources -->
                <div
                  v-for="(source, index) in jobSources"
                  :key="source.name"
                  class="position-absolute top-0 start-0 w-100 h-100"
                >
                  <!-- Pie chart segments would be rendered here -->
                </div>
              </div>
            </div>
            <div class="mt-3">
              <div
                v-for="(source, index) in jobSources"
                :key="source.name"
                class="d-flex align-items-center mb-2"
              >
                <div
                  class="me-2"
                  :style="`width: 12px; height: 12px; background-color: ${sourceColors[index]};`"
                ></div>
                <span class="text-muted small"
                  >{{ source.name }}: {{ source.percentage }}%</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Application Success Funnel -->
      <div class="col-md-8">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="fw-bold mb-4">Application Success Rate</h5>
            <div class="row mb-4">
              <div
                v-for="stage in applicationStages"
                :key="stage.name"
                class="col-md-3"
              >
                <div class="bg-light rounded p-3 text-center">
                  <p class="text-muted mb-2">{{ stage.name }}</p>
                  <p class="h4 fw-bold mb-1">{{ stage.count }}</p>
                  <p class="small text-muted mb-0">{{ stage.percentage }}%</p>
                </div>
              </div>
            </div>

            <!-- Progress Bar Visualization -->
            <div class="progress mb-4" style="height: 20px">
              <div
                v-for="(stage, index) in applicationStages"
                :key="`bar-${stage.name}`"
                class="progress-bar"
                :class="stageColors[index]"
                :style="`width: ${stage.percentage}%`"
              ></div>
            </div>

            <!-- Job Categories Performance Table -->
            <h5 class="fw-medium mb-3">Top Performing Job Categories</h5>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th class="text-center">Applications</th>
                    <th class="text-center">Interviews</th>
                    <th class="text-center">Offers</th>
                    <th class="text-center">Success Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="category in jobCategories" :key="category.name">
                    <td>{{ category.name }}</td>
                    <td class="text-center">{{ category.applications }}</td>
                    <td class="text-center">{{ category.interviews }}</td>
                    <td class="text-center">{{ category.offers }}</td>
                    <td class="text-center">{{ category.rate }}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Analytics",
  components: {},
  setup() {
    // Color palette for charts
    const sourceColors = [
      "#4640de",
      "#56cdad",
      "#ffb836",
      "#ff6550",
      "#a8adb7",
    ];

    // Data for job application sources
    const jobSources = ref([
      { name: "LinkedIn", percentage: 45 },
      { name: "Indeed", percentage: 25 },
      { name: "Company Website", percentage: 15 },
      { name: "Referral", percentage: 10 },
      { name: "Other", percentage: 5 },
    ]);

    // Data for application stages funnel
    const applicationStages = ref([
      { name: "Applied", count: 756, percentage: 100 },
      { name: "Screened", count: 482, percentage: 63.8 },
      { name: "Interviewed", count: 238, percentage: 31.5 },
      { name: "Offers", count: 24, percentage: 3.2 },
    ]);

    // Colors for the progress bars
    const stageColors = ["bg-primary", "bg-success", "bg-warning", "bg-danger"];

    // Data for job categories performance
    const jobCategories = ref([
      {
        name: "Design",
        applications: 245,
        interviews: 86,
        offers: 12,
        rate: 4.9,
      },
      {
        name: "Development",
        applications: 198,
        interviews: 62,
        offers: 8,
        rate: 4.0,
      },
      {
        name: "Marketing",
        applications: 156,
        interviews: 43,
        offers: 3,
        rate: 1.9,
      },
      {
        name: "Product",
        applications: 112,
        interviews: 38,
        offers: 1,
        rate: 0.9,
      },
    ]);

    return {
      sourceColors,
      jobSources,
      applicationStages,
      stageColors,
      jobCategories,
    };
  },
};
</script>
