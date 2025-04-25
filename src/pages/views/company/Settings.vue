<!-- filepath: d:\iPproject\JobHunter-Frontend\src\pages\views\Settings.vue -->
<template>
  <!-- Sidebar -->

  <!-- Main Content -->
  <div class="container py-4 flex-grow-1">
    <div class="row mb-4">
      <div class="col-12">
        <h1 class="h3 fw-bold">Settings</h1>
      </div>
    </div>
    <div class="row">
      <!-- Tabs -->
      <div class="col-md-3 mb-4 mb-md-0">
        <div class="list-group">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            type="button"
            class="list-group-item d-flex justify-content-between align-items-center"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            <div><i :class="`bi bi-${tab.icon} me-2`"></i>{{ tab.name }}</div>
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="col-md-9">
        <div class="card">
          <div class="card-body p-4">
            <!-- Profile Settings -->
            <div v-if="activeTab === 'profile'">
              <h4 class="fw-bold mb-4">Profile Settings</h4>
              <!-- Picture -->
              <div class="mb-4 d-flex align-items-center">
                <img
                  :src="jobhunterIcon"
                  alt="JobHunter Logo"
                  width="64"
                  height="64"
                  class="rounded-circle me-3"
                />
                <div>
                  <button class="btn btn-outline-secondary mb-2">
                    Upload New Picture
                  </button>
                  <p class="text-muted small mb-0">Max 2MB. JPG/PNG</p>
                </div>
              </div>
              <!-- Form -->
              <div class="row mb-3">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="form-label">First Name</label>
                  <input class="form-control" v-model="profile.firstName" />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Last Name</label>
                  <input class="form-control" v-model="profile.lastName" />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="profile.email"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  v-model="profile.phone"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Location</label>
                <input class="form-control" v-model="profile.location" />
              </div>
              <div class="mb-3">
                <label class="form-label">Website</label>
                <input
                  type="url"
                  class="form-control"
                  v-model="profile.website"
                />
              </div>
              <div class="mb-4">
                <label class="form-label">Bio</label>
                <textarea
                  class="form-control"
                  rows="4"
                  v-model="profile.bio"
                ></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-outline-secondary me-2">Cancel</button>
                <button class="btn btn-primary">Save Changes</button>
              </div>
            </div>

            <!-- Notifications -->
            <div v-if="activeTab === 'notifications'">
              <h4 class="fw-bold mb-4">Email Notifications</h4>
              <div class="form-check form-switch mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="jobRecs"
                  v-model="notifications.jobRecommendations"
                />
                <label class="form-check-label" for="jobRecs"
                  >Job Recommendations</label
                >
              </div>
              <div class="form-check form-switch mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="appUpdates"
                  v-model="notifications.applicationUpdates"
                />
                <label class="form-check-label" for="appUpdates"
                  >Application Updates</label
                >
              </div>
              <div class="form-check form-switch mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="msgs"
                  v-model="notifications.messages"
                />
                <label class="form-check-label" for="msgs">Messages</label>
              </div>
              <h4 class="fw-bold mt-5 mb-4">Push Notifications</h4>
              <div class="form-check form-switch mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="allPush"
                  v-model="notifications.allPush"
                />
                <label class="form-check-label" for="allPush"
                  >Enable All Push Notifications</label
                >
              </div>
              <div class="d-flex justify-content-end mt-4">
                <button class="btn btn-outline-secondary me-2">Cancel</button>
                <button class="btn btn-primary">Save Changes</button>
              </div>
            </div>

            <!-- (You can add more tabs here similarly) -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import jobhunterIcon from "@/assets/images/jobhuntericon.svg"; // Correctly import the image

export default {
  name: "Settings",
  components: {},
  setup() {
    const activeTab = ref("profile");
    const tabs = [
      { id: "profile", name: "Profile", icon: "person" },
      { id: "password", name: "Password", icon: "lock" },
      { id: "notifications", name: "Notifications", icon: "bell" },
      { id: "preferences", name: "Preferences", icon: "globe" },
      { id: "billing", name: "Billing", icon: "credit-card" },
      { id: "help", name: "Help", icon: "question-circle" },
    ];
    const profile = ref({
      firstName: "Alex",
      lastName: "Morgan",
      email: "alex.morgan@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "https://alexmorgan.design",
      bio: "I'm a Senior UI/UX Designer with over 6 years...",
    });
    const notifications = ref({
      jobRecommendations: true,
      applicationUpdates: true,
      messages: false,
      allPush: true,
    });
    return { activeTab, tabs, profile, notifications, jobhunterIcon };
  },
};
</script>
