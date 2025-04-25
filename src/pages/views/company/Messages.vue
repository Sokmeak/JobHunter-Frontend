<!-- filepath: d:\iPproject\JobHunter-Frontend\src\pages\views\Messages.vue -->
<script>
import { ref, computed } from "vue";

// Import the icon properly
import jobhunterIcon from "@/assets/images/jobhuntericon.svg";

export default {
  name: "Messages",
  components: {},
  setup() {
    const contacts = ref([
      {
        id: 1,
        name: "Sarah Johnson",
        company: "Google",
        active: true,
        unread: 3,
        time: "10:42 AM",
        lastMessage: "Thanks for your application...",
      },
      {
        id: 2,
        name: "Michael Chen",
        company: "Dribbble",
        active: false,
        unread: 0,
        time: "Yesterday",
        lastMessage: "When can you start?",
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        company: "Microsoft",
        active: true,
        unread: 0,
        time: "Yesterday",
        lastMessage: "The interview went well...",
      },
      {
        id: 4,
        name: "David Kim",
        company: "Apple",
        active: false,
        unread: 0,
        time: "Mar 28",
        lastMessage: "We'd like to offer you...",
      },
      {
        id: 5,
        name: "Jessica Lee",
        company: "Facebook",
        active: false,
        unread: 0,
        time: "Mar 25",
        lastMessage: "Your application has been...",
      },
    ]);
    const activeContact = ref(1);
    const messages = ref([
      { sender: "them", text: "Hi Alex, thank you for applying..." },
      { sender: "them", text: "Would you be available for an interview?" },
      { sender: "me", text: "I’m very excited about the opportunity." },
      { sender: "me", text: "Yes—Tuesday at 2:00 PM works great!" },
      { sender: "them", text: "Great! We’ll send a Google Meet link." },
    ]);
    const newMessage = ref("");
    const currentContact = computed(() =>
      contacts.value.find((c) => c.id === activeContact.value)
    );
    const send = () => {
      if (!newMessage.value.trim()) return; // Prevent empty or whitespace-only messages
      messages.value.push({ sender: "me", text: newMessage.value.trim() });
      newMessage.value = "";
    };
    return {
      contacts,
      activeContact,
      messages,
      newMessage,
      currentContact,
      send,
      jobhunterIcon, // Use the imported icon
    };
  },
};
</script>

<template>
  <!-- Sidebar -->
  <!-- <Sidebar /> -->

  <!-- Main Content -->
  <div class="container-fluid py-4 flex-grow-1">
    <div class="card h-100" style="height: calc(100vh - 150px) !important">
      <div class="card-body p-0">
        <div class="row g-0 h-100">
          <!-- Sidebar for Contacts -->
          <div class="col-md-4 border-end d-flex flex-column">
            <div class="p-3 border-bottom">
              <h4 class="fw-bold mb-3">Messages</h4>
              <div class="position-relative">
                <i
                  class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                ></i>
                <input
                  type="text"
                  class="form-control ps-5"
                  placeholder="Search messages..."
                />
              </div>
            </div>
            <div class="overflow-auto flex-grow-1">
              <div
                v-for="contact in contacts"
                :key="contact.id"
                class="p-3 border-bottom d-flex align-items-center"
                :class="{ 'bg-light': contact.id === activeContact }"
                @click="activeContact = contact.id"
                style="cursor: pointer"
              >
                <div class="position-relative me-3">
                  <img
                    :src="jobhunterIcon"
                    width="48"
                    height="48"
                    class="rounded-circle"
                    alt="Contact Avatar"
                  />
                  <span
                    v-if="contact.active"
                    class="position-absolute bottom-0 end-0 bg-success rounded-circle border border-white"
                    style="width: 12px; height: 12px"
                  ></span>
                </div>
                <div class="flex-grow-1">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-0">{{ contact.name }}</h6>
                    <small class="text-muted">{{ contact.time }}</small>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mt-1"
                  >
                    <p
                      class="text-muted small mb-0 text-truncate"
                      style="max-width: 80%"
                    >
                      {{ contact.company }} • {{ contact.lastMessage }}
                    </p>
                    <span
                      v-if="contact.unread > 0"
                      class="badge bg-primary rounded-pill ms-2"
                    >
                      {{ contact.unread }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Pane -->
          <div class="col-md-8 d-flex flex-column">
            <!-- Header -->
            <div
              class="p-3 border-bottom d-flex justify-content-between align-items-center"
            >
              <div class="d-flex align-items-center">
                <div class="position-relative me-3">
                  <img
                    :src="jobhunterIcon"
                    width="48"
                    height="48"
                    class="rounded-circle"
                    alt="Current Contact Avatar"
                  />
                  <span
                    class="position-absolute bottom-0 end-0 bg-success rounded-circle border border-white"
                    style="width: 12px; height: 12px"
                  ></span>
                </div>
                <div>
                  <h5 class="mb-0">{{ currentContact.name }}</h5>
                  <p class="text-success small mb-0">Online</p>
                </div>
              </div>
              <div>
                <button class="btn btn-light me-2">
                  <i class="bi bi-telephone"></i>
                </button>
                <button class="btn btn-light me-2">
                  <i class="bi bi-camera-video"></i>
                </button>
                <button class="btn btn-light">
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
              </div>
            </div>

            <!-- Messages -->
            <div
              class="flex-grow-1 overflow-auto p-3 bg-light"
              style="height: calc(100% - 140px)"
            >
              <div
                v-for="(m, i) in messages"
                :key="i"
                class="d-flex mb-3"
                :class="{ 'justify-content-end': m.sender === 'me' }"
              >
                <div v-if="m.sender === 'them'" class="d-flex">
                  <img
                    :src="jobhunterIcon"
                    alt="JobHunter Logo"
                    width="32"
                    height="32"
                    class="me-2"
                  />
                  <div
                    class="bg-white p-3 rounded-3 shadow-sm"
                    style="max-width: 70%"
                  >
                    {{ m.text }}
                  </div>
                </div>
                <div v-else class="d-flex">
                  <div
                    class="bg-primary text-white p-3 rounded-3 shadow-sm"
                    style="max-width: 70%"
                  >
                    {{ m.text }}
                  </div>
                  <img
                    :src="jobhunterIcon"
                    alt="JobHunter Logo"
                    width="32"
                    height="32"
                    class="ms-2"
                  />
                </div>
              </div>
            </div>

            <!-- Input -->
            <div class="p-3 border-top">
              <div class="d-flex">
                <button class="btn btn-light me-2">
                  <i class="bi bi-paperclip"></i>
                </button>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type a message..."
                  v-model="newMessage"
                />
                <button class="btn btn-primary ms-2" @click="send()">
                  <i class="bi bi-send"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
