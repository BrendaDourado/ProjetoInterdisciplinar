<template>
  <div class="barlog">
    <v-app-bar class="app-bar"  color="blue" elevation="4">
      <v-icon color="#fff" x-large aria-hidden="false"> mdi-account </v-icon>

      <div class="userdata">
        <h3 class="username">{{ name }}</h3>
        <span>{{ email }}</span>
      </div>
      <v-spacer />
      <v-icon  color="#fff" x-large aria-hidden="false"> mdi-hand-coin-outline </v-icon>
      <p style="margin-top: 1.9rem; margin-left: 0.7rem">Saldo: {{amount}}</p>
    </v-app-bar>
    <h1>Histórico de doações aqui</h1>
    <h1>Que o JARED VAI ORIENTAR o MARLEY E FAZER</h1>

    <v-btn @click="delay" class="mr-4 btn" type="submit">

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
      amount: "999"
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
.app-bar{ 
  background-color: #002960 !important;
  color: #fff
}
.userdata {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
.username {
  text-align: left;
}
.btn{
  background-color: #002960 !important;
  color: #fff;
}

@media screen and (max-width: 959px) {
  .barlog {
    margin-top: -1.7rem;

    
  }
}
</style>
