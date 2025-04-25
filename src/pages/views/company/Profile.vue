<script>
import { ref } from "vue";
// Correctly import the icon from the assets/images folder
import jobhunterIcon from "@/assets/images/jobhuntericon.svg";

export default {
  name: "Profile",
  setup() {
    const profile = ref({
      name: "Alex Morgan",
      role: "Senior UI/UX Designer",
      status: "Available for work",
      location: "San Francisco, CA",
      email: "alex.morgan@example.com",
      phone: "+1 (555) 123-4567",
      website: "https://alexmorgan.design",
      bio: "I'm a Senior UI/UX Designer with over 6 years of experience...",
    });
    const workExperience = ref([
      {
        id: 1,
        role: "Senior UI/UX Designer",
        company: "Dribbble",
        period: "Jan 2022 - Present",
        location: "San Francisco, CA",
        description: "Lead the design of Dribbble's web and mobile...",
      },
      {
        id: 2,
        role: "Product Designer",
        company: "Google",
        period: "Mar 2019 - Dec 2021",
        location: "Mountain View, CA",
        description:
          "Designed user interfaces for Google's productivity tools...",
      },
      {
        id: 3,
        role: "UI Designer",
        company: "Facebook",
        period: "Jun 2017 - Feb 2019",
        location: "Menlo Park, CA",
        description:
          "Created visual designs for Facebook's advertising platform...",
      },
    ]);
    const educationHistory = ref([
      {
        id: 1,
        degree: "MFA in Interaction Design",
        school: "California College of the Arts",
        period: "2015 - 2017",
        location: "San Francisco, CA",
        description: "Focused on user-centered design methodologies...",
      },
      {
        id: 2,
        degree: "BA in Graphic Design",
        school: "Rhode Island School of Design",
        period: "2011 - 2015",
        location: "Providence, RI",
        description: "Studied visual design principles...",
      },
    ]);
    const skills = ref([
      { name: "UI Design", level: 95 },
      { name: "UX Design", level: 90 },
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 85 },
      { name: "Sketch", level: 80 },
      { name: "Prototyping", level: 85 },
      { name: "User Research", level: 75 },
      { name: "Design Systems", level: 90 },
    ]);
    const languages = ref([
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      { name: "French", level: "Intermediate" },
    ]);
    const certifications = ref([
      {
        name: "Google UX Design Professional Certificate",
        issuer: "Google",
        year: "2021",
      },
      { name: "Certified Usability Analyst", issuer: "HFI", year: "2020" },
      {
        name: "IDF Certificate",
        issuer: "Interaction Design Foundation",
        year: "2019",
      },
    ]);

    return {
      profile,
      workExperience,
      educationHistory,
      skills,
      languages,
      certifications,
      jobhunterIcon, // Use the imported icon
    };
  },
};
</script>

<template>
  <div class="container py-4">
    <div class="row mb-4">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <h1 class="h3 fw-bold">My Profile</h1>
        <div>
          <button class="btn btn-outline-secondary me-2">
            <i class="bi bi-download me-2"></i>Download CV
          </button>
          <button class="btn btn-outline-secondary me-2">
            <i class="bi bi-share me-2"></i>Share Profile
          </button>
          <button class="btn btn-primary">
            <i class="bi bi-pencil me-2"></i>Edit Profile
          </button>
        </div>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <div class="row">
          <div class="col-md-2 mb-3 mb-md-0">
            <img
              :src="jobhunterIcon"
              alt="Profile Picture"
              class="img-fluid rounded"
            />
          </div>
          <div class="col-md-10">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <h2 class="h4 fw-bold">{{ profile.name }}</h2>
                <p class="text-muted">{{ profile.role }}</p>
              </div>
              <span class="badge bg-success">{{ profile.status }}</span>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <p class="text-muted mb-2">
                  <i class="bi bi-geo-alt me-2"></i>{{ profile.location }}
                </p>
                <p class="text-muted mb-2">
                  <i class="bi bi-envelope me-2"></i>{{ profile.email }}
                </p>
              </div>
              <div class="col-md-6">
                <p class="text-muted mb-2">
                  <i class="bi bi-telephone me-2"></i>{{ profile.phone }}
                </p>
                <p class="text-muted mb-2">
                  <i class="bi bi-globe me-2"></i
                  ><a :href="profile.website" target="_blank">{{
                    profile.website
                  }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <h5 class="fw-bold mb-3">About Me</h5>
        <p class="text-muted">{{ profile.bio }}</p>
      </div>
    </div>
  </div>
</template>
