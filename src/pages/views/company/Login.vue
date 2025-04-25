<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <!-- Left: Login Form -->
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div class="card border-0 shadow-sm w-75">
          <div class="card-body p-5">
            <div class="text-center mb-4">
              <h1 class="h3 fw-bold">Welcome Back</h1>
              <p class="text-muted">Sign in to continue to JobHunter</p>
            </div>

            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div class="mb-4">
                <div class="d-flex justify-content-between">
                  <label for="password" class="form-label">Password</label>
                  <a href="#" class="text-decoration-none small"
                    >Forgot Password?</a
                  >
                </div>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div class="mb-4 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="rememberMe"
                  v-model="rememberMe"
                />
                <label class="form-check-label" for="rememberMe">
                  Remember me
                </label>
              </div>

              <button type="submit" class="btn btn-primary w-100 py-2 mb-3">
                Sign In
              </button>

              <div class="text-center">
                <p class="mb-0">
                  Don't have an account?
                  <router-link to="/signup" class="text-decoration-none">
                    Sign Up
                  </router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Right: Illustration -->
      <div
        class="col-md-6 bg-primary d-none d-md-flex align-items-center justify-content-center text-white"
      >
        <div class="text-center p-5">
          <h2 class="display-4 fw-bold mb-4">Find Your Dream Job</h2>
          <p class="lead mb-4">
            Connect with top employers and discover opportunities that match
            your skills and career goals.
          </p>
          <img :src="jobhunterIcon" alt="JobHunter Logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const rememberMe = ref(false);

    const handleLogin = () => {
      // In a real app, authenticate with backend here
      console.log("Login with:", {
        email: email.value,
        password: password.value,
        rememberMe: rememberMe.value,
      });

      // Simplified demo auth
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Alex Morgan",
          email: email.value,
          role: "Job Seeker",
        })
      );

      router.push("/dashboard");
    };

    return {
      email,
      password,
      rememberMe,
      handleLogin,
    };
  },
};
</script>

<style scoped>
/* No additional styles needed */
</style>
