<template>
<v-container>
  <div class="inputs">
   
    <v-text-field 
    label="RAZÃO SOCIAL"></v-text-field>
    <v-text-field 
    label="NOME FANTASIA"></v-text-field>
    <v-text-field 
    label="CNPJ"></v-text-field>
    <v-text-field 
    label="ENDEREÇO"></v-text-field>
    <v-text-field 
    label="CONTATO"></v-text-field>
     <v-text-field 
    label="EMAIL"></v-text-field>
    <v-text-field
    label="LOGIN">
    </v-text-field>
    <v-text-field 
    label="SENHA"></v-text-field>
    </div>

    <div class= "botoes">
    <v-btn @click="delay" class="mr-4" type="submit"> enviar </v-btn>
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
