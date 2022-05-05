<template>
<v-container>
  <div class="inputs">
    <v-text-field
      label="LOGIN"
    >
    </v-text-field>
    <v-text-field 
    label="SENHA"></v-text-field>
    <v-text-field 
    label="NOME COMPLETO"></v-text-field>
    <v-text-field 
    label="NOME COMPLETO"></v-text-field>
    <v-text-field 
    label="NOME COMPLETO"></v-text-field>
    <v-text-field 
    label="NOME COMPLETO"></v-text-field>
    <v-text-field 
    label="NOME COMPLETO"></v-text-field>
  </div>
<div class= "botoes">
  <v-btn class= "mb-4">
    Enviar
  </v-btn>
</div>
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
