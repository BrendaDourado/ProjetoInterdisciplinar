<template>
<v-container>
  <div class="inputs">
    <v-text-field v-model="name"
    label="NOME COMPLETO"/>
    <v-text-field 
    label="DATA DE NASCIMENTO"/>
    <v-text-field 
    label="CPF"/>
    <v-text-field 
    label="GÊNERO"/>
    <v-text-field 
    label="TELEFONE"/>
    <v-text-field v-model="email"
    label="EMAIL"/>
     <v-text-field 
    label="CEP"/>
     <v-text-field 
    label="SENHA"/>
     <v-text-field 
    label="CONFIRMAÇÃO DE SENHA"/>
  </div>
<div class= "botoes">
  <v-btn @click="signup" class= "mb-4">
    Enviar
  </v-btn>
</div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email:"",
      name:"",
    };
  },
  methods: {
    saveData(){

      localStorage.setItem("email", this.$data.email)
      localStorage.setItem("nome", this.$data.name)
    },
    signup() {
      if(!this.$data.email||!this.$data.name){
        return alert("dados inválidos")
      }
      this.saveData()
      setTimeout(() => {
        this.$router.push("/ConfirmaCadastro");
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
</style>
