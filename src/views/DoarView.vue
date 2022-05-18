<template>
  <v-container fluid>
    <div class="titulo">
      <h1>O que você vai doar ?!</h1>
      <p>Detalhar o que vai ser doado com checkbox</p>
    </div>
    <div class="form">
      <v-col class="col-checkbox" cols="6">
        <v-row class="checkbox">
          <v-checkbox v-model="checkbox1" :label="`Agasalho:`"></v-checkbox>
        </v-row>
        <v-row class="checkbox">
          <v-checkbox v-model="checkbox2" :label="`Alimento :`"></v-checkbox>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row class="text-field">
          <v-text-field label="Solo" solo></v-text-field>
        </v-row>
        <v-row class="text-field">
          <v-text-field label="Solo" solo></v-text-field>
        </v-row>
      </v-col>
      <v-col cols="auto"> </v-col>
      <v-col cols="auto"> </v-col>
    </div>
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
.form {
  display: flex;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
}
.checkbox{
  justify-content:flex-end
}
.col-checkbox{
  padding-right: 2rem;
}
.text-field{
  width: 7rem;
}
</style>
