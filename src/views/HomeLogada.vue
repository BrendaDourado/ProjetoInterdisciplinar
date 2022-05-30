<template>
  <div class="barlog">
    <v-app-bar color="blue" elevation="4">
      <v-icon x-large aria-hidden="false"> mdi-account </v-icon>

      <div class="userdata">
        <h3 class="username">{{ name }}</h3>
        <span>{{ email }}</span>
      </div>
      <v-spacer />
      <v-icon x-large aria-hidden="false"> mdi-hand-coin-outline </v-icon>
      <h3>Saldo</h3>
    </v-app-bar>
    <h1>Histórico de doações aqui</h1>
    <h1>Que o JARED VAI ORIENTAR o MARLEY E FAZER</h1>

    <v-btn @click="delay" color="blue" class="mr-4" type="submit">
      VENHA DOAR
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.getItem("nome"),
      email: localStorage.getItem("email"),
    };
  },

  methods: {
    delay() {
      setTimeout(() => {
        this.$router.push("DoarView");
      }, 100);
    },
  },
};
</script>

<style scoped>

.barlog {
  margin-top: -1.2rem;
}
.userdata {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
.username {
  text-align: left;
}

@media screen and (max-width: 959px) {
  .barlog {
    margin-top: -1.7rem;

    
  }
}
</style>
