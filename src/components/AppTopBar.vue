<template>
  <div class="app-bottom-bar">
    <v-app-bar hide-on-scroll app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title @click="home" style="cursor:pointer"
        ><img v-if="!$vuetify.theme.dark" src="../assets/donav3rse-light.png"> 
         <img v-else src="../assets/donav3rse-dark.png"> </v-toolbar-title
      >
      <v-spacer />
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-on="on"
            v-bind="attrs"
            color="whrite"
            small
            fab
            @click="darkMode"
          >
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-on="on"
            v-bind="attrs"
            color="black"
            small
            fab
            @click="darkMode"
          >
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list class="text-left" nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-title>
                <v-icon>mdi-home</v-icon> Início
              </v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/InstituicoesParceiras">
            <v-list-item>
              <v-list-item-title>
                <v-icon>mdi-store</v-icon>
                Instituições parceiras
              </v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/LoginIn">
            <v-list-item>
              <v-list-item-title>
                <v-icon>mdi-account</v-icon>
                Login
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      value: 0,
      drawer: false,
    };
  },
  methods: {
    home(){
      this.$router.push("/");
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
.app-bottom-bar > .botoes {
  display: flex;
  justify-content: center;
}
.app-bottom-bar a {
  text-decoration: none;
}
img {
  white-space: nowrap;
  height: 60px;
}
</style>

