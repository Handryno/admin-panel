<template>
  <!-- <v-app id="inspire"> -->
    <!-- <Sidebar :drawer="drawer" /> -->
    <!-- <Topbar @drawerEvent="drawer = !drawer" /> -->
    <!-- <v-main style="background: #f5f5f540">
      <v-container class="py-8 px-6" fluid> -->
        <router-view></router-view>
      <!-- </v-container>
    </v-main> -->
    <!-- <Footer></Footer> -->
  <!-- </v-app> -->
</template>



<script>
import Sidebar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Sidebar , Footer},
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
  methods: {},
};
</script>