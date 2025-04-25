<!-- filepath: d:\iPproject\JobHunter-Frontend\src\pages\views\Applications.vue -->
<template>
  <!-- Sidebar -->
  <!-- <Sidebar /> -->

  <!-- Main Content -->
  <div class="container py-4 flex-grow-1">
    <div class="row mb-4">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <h1 class="h3 fw-bold">My Applications</h1>
        <div>
          <button class="btn btn-outline-secondary me-2">Export as PDF</button>
          <button class="btn btn-primary">Find More Jobs</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="position-relative w-25">
            <i
              class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
            ></i>
            <input
              type="text"
              class="form-control ps-5"
              placeholder="Search applications..."
            />
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-light me-3">
              <i class="bi bi-funnel me-2"></i>Filter
            </button>
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="statusDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status: <span class="fw-medium">All</span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="statusDropdown">
                <li><a class="dropdown-item" href="#">All</a></li>
                <li><a class="dropdown-item" href="#">Applied</a></li>
                <li><a class="dropdown-item" href="#">Interview</a></li>
                <li><a class="dropdown-item" href="#">Offer</a></li>
                <li><a class="dropdown-item" href="#">Rejected</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Job</th>
                <th>Date Applied</th>
                <th>Status</th>
                <th>Salary</th>
                <th class="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="app in applications" :key="app.id">
                <td>
                  <div class="d-flex align-items-center">
                    <div
                      class="bg-light rounded d-flex align-items-center justify-content-center me-3"
                      style="width: 40px; height: 40px"
                    >
                      <img
                        :src="jobhunterIcon"
                        width="40"
                        height="40"
                        class="rounded"
                        alt="Company Logo"
                      />
                    </div>
                    <div>
                      <router-link
                        :to="`/jobs/${app.id}`"
                        class="fw-medium text-decoration-none"
                        >{{ app.title }}</router-link
                      >
                      <p class="text-muted small mb-0">{{ app.company }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center text-muted small">
                    <i class="bi bi-clock me-2"></i>{{ app.date }}
                  </div>
                </td>
                <td>
                  <span class="badge" :class="app.statusColor">{{
                    app.status
                  }}</span>
                </td>
                <td class="text-muted">{{ app.salary }}</td>
                <td class="text-end">
                  <button class="btn btn-light btn-sm">
                    <i class="bi bi-three-dots"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jobhunterIcon from "@/assets/images/jobhuntericon.svg"; // Correctly import the image

export default {
  name: "Applications",
  components: {},
  data() {
    return {
      jobhunterIcon, // Use the imported icon
      applications: [
        {
          id: 1,
          title: "Senior UI/UX Designer",
          company: "Dribbble",
          date: "April 2, 2025",
          status: "Interview",
          statusColor: "bg-primary",
          salary: "$80k - $120k",
        },
        {
          id: 2,
          title: "Product Designer",
          company: "Google",
          date: "March 28, 2025",
          status: "Rejected",
          statusColor: "bg-danger",
          salary: "$90k - $110k",
        },
        {
          id: 3,
          title: "Frontend Developer",
          company: "Figma",
          date: "March 25, 2025",
          status: "Applied",
          statusColor: "bg-warning",
          salary: "$70k - $90k",
        },
        {
          id: 4,
          title: "UX Researcher",
          company: "Microsoft",
          date: "March 20, 2025",
          status: "Offer",
          statusColor: "bg-success",
          salary: "$85k - $105k",
        },
        {
          id: 5,
          title: "Visual Designer",
          company: "Apple",
          date: "March 15, 2025",
          status: "Applied",
          statusColor: "bg-warning",
          salary: "$75k - $95k",
        },
      ],
    };
  },
};
</script>
