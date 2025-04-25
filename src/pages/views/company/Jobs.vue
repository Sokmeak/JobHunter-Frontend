<!-- filepath: d:\iPproject\JobHunter-Frontend\src\pages\views\Jobs.vue -->
<template>
  <!-- Sidebar -->
  <!-- <Sidebar /> -->

  <!-- Main Content -->
  <div class="container py-4 flex-grow-1">
    <!-- Title + Actions -->
    <div class="row mb-4">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <h1 class="h3 fw-bold">Browse Jobs</h1>
        <div>
          <button class="btn btn-outline-secondary me-2">
            Recent Searches
          </button>
          <button class="btn btn-primary">Create Alert</button>
        </div>
      </div>
    </div>

    <!-- Search Card -->
    <div class="card mb-4">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-6 position-relative">
            <i
              class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
            ></i>
            <input
              type="text"
              class="form-control ps-5"
              placeholder="Job title, company, or keywords"
            />
          </div>
          <div class="col-md-3 position-relative">
            <i
              class="bi bi-geo-alt position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
            ></i>
            <input
              type="text"
              class="form-control ps-5"
              placeholder="Location"
            />
          </div>
          <div class="col-md-3 d-flex">
            <button class="btn btn-primary flex-grow-1 me-2">Search</button>
            <button class="btn btn-outline-secondary">
              <i class="bi bi-sliders"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Filters Sidebar -->
      <div class="col-md-3">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="fw-medium mb-3">Job Type</h5>
            <div v-for="type in jobTypes" :key="type" class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`type-${type}`"
              />
              <label class="form-check-label" :for="`type-${type}`">{{
                type
              }}</label>
            </div>
            <hr />
            <h5 class="fw-medium mb-3">Experience Level</h5>
            <div
              v-for="level in experienceLevels"
              :key="level"
              class="form-check mb-2"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :id="`level-${level}`"
              />
              <label class="form-check-label" :for="`level-${level}`">{{
                level
              }}</label>
            </div>
            <hr />
            <h5 class="fw-medium mb-3">Salary Range</h5>
            <div
              v-for="range in salaryRanges"
              :key="range"
              class="form-check mb-2"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :id="`range-${range}`"
              />
              <label class="form-check-label" :for="`range-${range}`">{{
                range
              }}</label>
            </div>
            <hr />
            <h5 class="fw-medium mb-3">Job Category</h5>
            <div
              v-for="category in jobCategories"
              :key="category"
              class="form-check mb-2"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :id="`category-${category}`"
              />
              <label class="form-check-label" :for="`category-${category}`">{{
                category
              }}</label>
            </div>
            <button class="btn btn-outline-secondary w-100 mt-3">
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      <!-- Job Listings -->
      <div class="col-md-9">
        <!-- Sort & Count -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <p class="text-muted mb-0">
            Showing <span class="fw-medium text-dark">1,902</span> jobs
          </p>
          <div class="d-flex align-items-center">
            <span class="text-muted me-2">Sort by:</span>
            <div class="dropdown">
              <button
                class="btn btn-sm btn-light dropdown-toggle"
                type="button"
                id="sortDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Most Relevant
              </button>
              <ul class="dropdown-menu" aria-labelledby="sortDropdown">
                <li><a class="dropdown-item" href="#">Most Relevant</a></li>
                <li><a class="dropdown-item" href="#">Newest</a></li>
                <li><a class="dropdown-item" href="#">Highest Salary</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Cards -->
        <div v-for="job in jobs" :key="job.id" class="card mb-3">
          <div class="card-body">
            <div class="d-flex">
              <div
                class="bg-light rounded d-flex align-items-center justify-content-center me-3"
                style="width: 56px; height: 56px"
              >
                <img
                  :src="jobhunterIcon"
                  width="56"
                  height="56"
                  class="rounded"
                  alt="Logo"
                />
              </div>
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <router-link
                      :to="`/jobs/${job.id}`"
                      class="h5 text-decoration-none"
                    >
                      {{ job.title }}
                    </router-link>
                    <div class="d-flex align-items-center mt-1">
                      <p class="text-muted mb-0">{{ job.company }}</p>
                      <div class="d-flex align-items-center ms-2">
                        <i
                          v-for="n in 5"
                          :key="n"
                          class="bi bi-star-fill text-warning me-1 small"
                        ></i>
                        <span class="text-muted small">({{ job.rating }})</span>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-light">
                    <i class="bi bi-bookmark-plus"></i>
                  </button>
                </div>
                <div class="d-flex mt-2 text-muted small">
                  <div class="me-3">
                    <i class="bi bi-geo-alt me-1"></i>{{ job.location }}
                  </div>
                  <div class="me-3">
                    <i class="bi bi-briefcase me-1"></i>{{ job.type }}
                  </div>
                  <div class="me-3">
                    <i class="bi bi-clock me-1"></i>{{ job.posted }}
                  </div>
                  <div>
                    <i class="bi bi-currency-dollar me-1"></i>{{ job.salary }}
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center mt-3"
                >
                  <div>
                    <span
                      v-for="skill in job.skills"
                      :key="skill"
                      class="badge bg-light text-secondary me-2"
                      >{{ skill }}</span
                    >
                  </div>
                  <router-link :to="`/jobs/${job.id}`" class="btn btn-primary"
                    >Apply Now</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <nav
          aria-label="Page navigation"
          class="d-flex justify-content-center mt-4"
        >
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">&laquo;</a>
            </li>
            <li
              class="page-item"
              v-for="p in 5"
              :key="p"
              :class="{ active: p === 1 }"
            >
              <a class="page-link" href="#">{{ p }}</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">&raquo;</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import jobhunterIcon from "@/assets/images/jobhuntericon.svg"; // Correctly import the image

export default {
  components: {},
  data() {
    return {
      jobhunterIcon, // Use the imported icon
      jobTypes: [
        "Full Time",
        "Part Time",
        "Contract",
        "Internship",
        "Temporary",
      ],
      experienceLevels: [
        "Entry Level",
        "Mid Level",
        "Senior Level",
        "Director",
        "Executive",
      ],
      salaryRanges: [
        "$0 - $50k",
        "$50k - $100k",
        "$100k - $150k",
        "$150k - $200k",
        "$200k+",
      ],
      jobCategories: [
        "Design",
        "Development",
        "Marketing",
        "Business",
        "Sales",
        "Customer Service",
      ],
      jobs: [
        {
          id: 1,
          title: "Senior Product Designer",
          company: "Dribbble",
          rating: "4.8",
          location: "San Francisco, CA",
          type: "Full Time",
          posted: "Posted 2 days ago",
          salary: "$80k - $120k",
          skills: ["UI/UX", "Figma", "Adobe XD"],
        },
        {
          id: 2,
          title: "UX Researcher",
          company: "Microsoft",
          rating: "4.7",
          location: "Remote",
          type: "Full Time",
          posted: "Posted 5 days ago",
          salary: "$70k - $90k",
          skills: ["User Research", "Usability Testing", "Prototyping"],
        },
        {
          id: 3,
          title: "Visual Designer",
          company: "Apple",
          rating: "4.9",
          location: "New York, NY",
          type: "Contract",
          posted: "Posted 1 week ago",
          salary: "$60 - $80 / hour",
          skills: ["Visual Design", "Branding", "Illustration"],
        },
        {
          id: 4,
          title: "Frontend Developer",
          company: "Google",
          rating: "4.9",
          location: "Mountain View, CA",
          type: "Full Time",
          posted: "Posted 3 days ago",
          salary: "$100k - $150k",
          skills: ["React", "JavaScript", "CSS"],
        },
        {
          id: 5,
          title: "Product Manager",
          company: "Amazon",
          rating: "4.6",
          location: "Seattle, WA",
          type: "Full Time",
          posted: "Posted 1 day ago",
          salary: "$110k - $160k",
          skills: ["Product Strategy", "Agile", "User Stories"],
        },
      ],
    };
  },
};
</script>
