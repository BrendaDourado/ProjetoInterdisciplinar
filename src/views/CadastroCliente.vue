<template>
  <v-container fluid>
    <div class="titulo">
      <h1>O que você vai doar ?!</h1>
      <p>
        Detalhar o que vai ser doado com checkbox
      </p>
    </div>
    <v-checkbox v-model="checkbox1" :label="`Agasalho:`"></v-checkbox>
    <v-checkbox v-model="checkbox2" :label="` alimento :`"></v-checkbox>

    <v-btn @click="delay" class="mr-4" type="submit"> enviar </v-btn>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      checkbox1: false,
      checkbox2: false,

    };
  },
  methods: {
    delay() {
      setTimeout(() => {
        this.$router.push("/analisesugestao");
      }, 100);
    },
  },
};
</script>

<style scoped>
.form {
}
h1 {
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
}

.container {
  margin-bottom: 80px;
  padding: 0 10;
  width: 100%;
  height: 100vh;
}
</style>
