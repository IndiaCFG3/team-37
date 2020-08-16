<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <Menu />
  </v-app>
</template>

<script>
import NavBar from '@/components/MainInclude/NavBar.vue'

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>