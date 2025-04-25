<!-- filepath: d:\iPproject\JobHunter-Frontend\src\pages\views\JobDetail.vue -->
<template>
  
    <!-- Sidebar -->
    <!-- <Sidebar /> -->

    <!-- Main Content -->
    <div class="container py-4 flex-grow-1">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/jobs">Browse Jobs</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Senior Product Designer
          </li>
        </ol>
      </nav>

      <!-- Job Header -->
      <div class="card mb-4">
        <div class="card-body d-flex">
          <div
            class="bg-light rounded d-flex align-items-center justify-content-center me-4"
            style="width: 64px; height: 64px"
          >
            <img
              :src="jobhunterIcon"
              alt="Logo"
              width="64"
              height="64"
              class="rounded"
            />
          </div>
          <div
            class="flex-grow-1 d-flex justify-content-between align-items-start"
          >
            <div>
              <h1 class="h3 fw-bold">Senior Product Designer</h1>
              <div class="d-flex align-items-center mt-1">
                <p class="text-muted mb-0">Dribbble</p>
                <div class="d-flex align-items-center ms-2">
                  <i
                    v-for="n in 5"
                    :key="n"
                    class="bi bi-star-fill text-warning me-1 small"
                  ></i>
                  <span class="text-muted small">(4.8)</span>
                </div>
              </div>
            </div>
            <div>
              <button class="btn btn-outline-secondary me-2">
                <i class="bi bi-share"></i>
              </button>
              <button class="btn btn-outline-secondary">
                <i class="bi bi-bookmark-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Meta -->
      <div class="d-flex text-muted mb-4 small">
        <div class="me-4">
          <i class="bi bi-geo-alt me-1"></i>San Francisco, CA
        </div>
        <div class="me-4"><i class="bi bi-briefcase me-1"></i>Full Time</div>
        <div class="me-4">
          <i class="bi bi-clock me-1"></i>Posted 2 days ago
        </div>
        <div><i class="bi bi-currency-dollar me-1"></i>$80k - $120k</div>
      </div>

      <!-- Tags & Apply -->
      <div class="d-flex mb-4">
        <div>
          <span
            v-for="skill in tags"
            :key="skill"
            class="badge bg-light text-secondary me-2"
            >{{ skill }}</span
          >
        </div>
        <button class="btn btn-primary ms-auto">Apply Now</button>
      </div>

      <div class="row">
        <!-- Left: Description -->
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-body">
              <h4 class="fw-bold mb-3">Job Description</h4>
              <p class="text-muted mb-3">
                We are looking for a Senior Product Designer to join our team...
              </p>
              <h5 class="fw-bold mt-4 mb-2">Responsibilities</h5>
              <ul class="list-unstyled">
                <li
                  v-for="(r, i) in responsibilities"
                  :key="i"
                  class="d-flex mb-2"
                >
                  <i class="bi bi-check-circle text-success me-2"></i>{{ r }}
                </li>
              </ul>
              <h5 class="fw-bold mt-4 mb-2">Requirements</h5>
              <ul class="list-unstyled">
                <li v-for="(r, i) in requirements" :key="i" class="d-flex mb-2">
                  <i class="bi bi-check-circle text-success me-2"></i>{{ r }}
                </li>
              </ul>
              <h5 class="fw-bold mt-4 mb-2">Benefits</h5>
              <ul class="list-unstyled">
                <li v-for="(b, i) in benefits" :key="i" class="d-flex mb-2">
                  <i class="bi bi-check-circle text-success me-2"></i>{{ b }}
                </li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h4 class="fw-bold mb-3">About Dribbble</h4>
              <p class="text-muted mb-3">
                Dribbble is where designers gain inspiration, feedback,
                community...
              </p>
              <div
                class="d-flex justify-content-between align-items-center mt-4"
              >
                <div class="d-flex align-items-center">
                  <div class="d-flex me-2">
                    <img
                      v-for="n in 4"
                      :key="n"
                      :src="jobhunterIcon"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </div>
                  <span class="text-muted small">158 employees</span>
                </div>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  class="text-decoration-none text-primary"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Summary & Similar -->
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-body">
              <h4 class="fw-bold mb-3">Job Summary</h4>
              <div class="mb-3 d-flex">
                <i class="bi bi-briefcase fs-3 text-primary me-3"></i>
                <div>
                  <p class="small text-muted mb-0">Job Type</p>
                  <p class="fw-medium mb-0">Full Time</p>
                </div>
              </div>
              <div class="mb-3 d-flex">
                <i class="bi bi-geo-alt fs-3 text-primary me-3"></i>
                <div>
                  <p class="small text-muted mb-0">Location</p>
                  <p class="fw-medium mb-0">San Francisco, CA</p>
                </div>
              </div>
              <div class="mb-3 d-flex">
                <i class="bi bi-currency-dollar fs-3 text-primary me-3"></i>
                <div>
                  <p class="small text-muted mb-0">Salary</p>
                  <p class="fw-medium mb-0">$80k - $120k / year</p>
                </div>
              </div>
              <div class="d-flex">
                <i class="bi bi-clock fs-3 text-primary me-3"></i>
                <div>
                  <p class="small text-muted mb-0">Date Posted</p>
                  <p class="fw-medium mb-0">April 3, 2025</p>
                </div>
              </div>
              <button class="btn btn-primary w-100 mt-3">Apply Now</button>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h4 class="fw-bold mb-3">Similar Jobs</h4>
              <div class="list-group">
                <a
                  v-for="n in 3"
                  :key="n"
                  href="#"
                  class="list-group-item list-group-item-action border rounded mb-2"
                >
                  <div class="d-flex">
                    <div
                      class="bg-light rounded d-flex align-items-center justify-content-center me-3"
                      style="width: 40px; height: 40px"
                    >
                      <img
                        :src="jobhunterIcon"
                        width="40"
                        height="40"
                        class="rounded"
                      />
                    </div>
                    <div>
                      <h6 class="mb-1">UX Designer</h6>
                      <p class="text-muted small mb-1">Figma Inc.</p>
                      <div class="d-flex text-muted small">
                        <i class="bi bi-geo-alt me-1"></i>Remote
                        <span class="mx-2">•</span>
                        <span>$70k - $90k</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import jobhunterIcon from "@/assets/images/jobhuntericon.svg"; // Correctly import the image

export default {
  name: "JobDetail",
  components: {
   
  },
  data() {
    return {
      jobhunterIcon, // Use the imported icon
      responsibilities: [
        "Lead the design process from concept to implementation...",
        "Collaborate with product managers...",
        "Conduct user research...",
        "Create and maintain design systems...",
        "Mentor junior designers...",
      ],
      requirements: [
        "5+ years of experience in product design",
        "Proficiency in Figma, Sketch, Adobe Suite",
        "Strong portfolio demonstrating problem-solving",
        "Experience with design systems",
        "Excellent communication skills",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Health, dental, and vision insurance",
        "Flexible work hours & remote options",
        "Professional development budget",
        "401(k) matching",
      ],
      tags: ["UI/UX", "Figma", "Adobe XD", "Product Design", "Wireframing"],
    };
  },
};
</script>
