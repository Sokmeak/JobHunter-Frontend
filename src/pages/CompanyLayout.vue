<template>
  <div class="d-flex">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/company_ui/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>
<style>
.layout {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
