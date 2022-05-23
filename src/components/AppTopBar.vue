<template>
     <div class="app-bottom-bar">
    <v-app-bar hide-on-scroll app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title><h3><strong>Campanha de doação</strong> ICON </h3></v-toolbar-title>
      <v-spacer />
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="whrite" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="black" small fab @click="darkMode">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list class="text-left"
        nav
        dense
      >
        <v-list-item-group 
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><router-link to="/"><v-icon>mdi-home</v-icon> Início </router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
          <v-list-item-title><router-link to="/InstituicoesParceiras">
          <v-icon>mdi-store</v-icon>
          Instituições parceiras
          </router-link></v-list-item-title>
          </v-list-item>

         <v-list-item>
          <v-list-item-title><router-link to="/LoginIn">
          <v-icon>mdi-account</v-icon>
          Login
          </router-link></v-list-item-title>
          </v-list-item>


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
  darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>
   .app-bottom-bar > .botoes{
        display: flex;
        justify-content: center;
    }
    .app-bottom-bar a {
            text-decoration: none;
            display:flex;
            justify-content: center;
            flex-grow: 1;
             
    }
    img {
        white-space: nowrap;
        height: 60px
    }

</style>

