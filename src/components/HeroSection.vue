<template>
  <div class="hero-wrapper position-relative overflow-hidden">
    <!-- Diagonal background -->
    <div class="diagonal-background"></div>

    <!-- Hero background image -->
    <div class="hero-background"></div>

    <!-- Content -->
    <div class="container py-5">
      <!-- Hero Content -->
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h1 class="display-5 fw-bold mb-3">
            Discover<br />more than<br />
            <span class="cyan-accent-color">5000+ Jobs</span>
          </h1>
          <img
            src="../assets/images/highlight.svg"
            width="300px"
            alt="highlight"
            class="highlight-img"
          />

          <p class="lead text-muted mb-4">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          <!-- Search Form with enhanced styling -->
          <div class="search-form p-3 bg-white rounded shadow-sm mb-4">
            <div
              class="d-flex flex-row justify-content-between align-items-center g-2"
            >
              <div class="col-md-4">
                <div class="input-group">
                  <span class="input-group-text bg-white border-0">
                    <i class="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control search"
                    placeholder="Job title or keyword"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-group">
                  <span class="input-group-text bg-white border-0">
                    <i class="bi bi-geo-alt"></i>
                  </span>
                  <div class="position position-relative">
                    <select
                      class="form-select border-0 shadow-none ps-3 pe-5 custom-select"
                    >
                      <option selected disabled>Location, City</option>
                      <option value="phnom-penh">Phnom Penh</option>
                      <option value="siem-reap">Siem Reap</option>
                      <option value="battambang">Battambang</option>
                      <option value="sihanoukville">Sihanoukville</option>
                      <option value="kampong-cham">Kampong Cham</option>
                      <option value="kampot">Kampot</option>
                      <option value="kandal">Kandal</option>
                      <option value="takeo">Takeo</option>
                      <option value="prey-veng">Prey Veng</option>
                      <option value="svay-rieng">Svay Rieng</option>
                      <option value="kampong-thom">Kampong Thom</option>
                      <option value="kratie">Kratie</option>
                      <option value="mondulkiri">Mondulkiri</option>
                      <option value="ratanakiri">Ratanakiri</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <button
                  class="btn btn-primary bg-primary-color hovered-btn-primary"
                >
                  Search my job
                </button>
              </div>
            </div>
          </div>

          <!-- Popular tags with badge styling -->
          <div class="mt-2">
            <span class="text-muted small">Popular:</span>
            <span class="badge rounded-pill bg-light text-dark me-2 small"
              >UI Designer</span
            >
            <span class="badge rounded-pill bg-light text-dark me-2 small"
              >UX Developer</span
            >
            <span class="badge rounded-pill bg-light text-dark me-2 small"
              >Android</span
            >
            <span class="badge rounded-pill bg-light text-dark me-2 small"
              >Admin</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>
.hero-wrapper {
  margin-top: 3rem;

  min-height: 80vh;
  background-color: white;
  position: relative;
}

/* Diagonal background pattern */
.diagonal-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      135deg,
      transparent 49.5%,
      #e8eaff 49.5%,
      #e8eaff 50.5%,
      transparent 50.5%
    ),
    linear-gradient(
      135deg,
      transparent 59.5%,
      #e8eaff 59.5%,
      #e8eaff 60.5%,
      transparent 60.5%
    ),
    linear-gradient(
      135deg,
      transparent 69.5%,
      #e8eaff 69.5%,
      #e8eaff 70.5%,
      transparent 70.5%
    ),
    linear-gradient(
      135deg,
      transparent 79.5%,
      #e8eaff 79.5%,
      #e8eaff 80.5%,
      transparent 80.5%
    );
  background-size: 100px 100px, 200px 200px, 300px 300px, 400px 400px;
  z-index: 0;
}

/* Hero background image */
.hero-background {
  position: absolute;
  top: 0;
  right: 5%;
  width: 40%;
  height: 100%;
  background-image: url("../assets/images/handsomeboy.png");
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
}

/* Search form styling */
.search-form {
  width: 100%;
  border-radius: 8px;
  position: relative;
  z-index: 2;
}

.search,
.position {
  border: none;
  border-radius: 0;
  border-bottom: gray 1px solid;
}

.search:focus {
  outline: none;
  box-shadow: none;
}

.custom-select:focus {
  outline: none;
  box-shadow: none;
}

/* Highlight image positioning */
.highlight-img {
  position: relative;
  max-width: 200px;
  margin-top: -10px;
  z-index: 1;
}

/* Override Bootstrap colors */
/* .btn-primary {
  background-color: #6366f1;
  border-color: #6366f1;
}

*/
.btn-primary:hover {
  background-color: #4f46e5;
  border-color: #4f46e5;
}

/* Make sure content is above the background */
.container {
  position: relative;
  z-index: 2;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .hero-background {
    opacity: 0.2;
    width: 100%;
    background-position: center bottom;
  }

  .search-form {
    width: 100%;
  }

  .d-flex.flex-row {
    flex-direction: column !important;
  }

  .col-md-4,
  .col-md-3 {
    width: 100%;
    margin-bottom: 15px;
  }
}

@media (max-width: 768px) {
  .hero-wrapper {
    min-height: 100vh;
  }

  .hero-background {
    background-size: 80%;
    background-position: center bottom;
  }
}
</style>
