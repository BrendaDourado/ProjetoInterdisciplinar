<template>
<v-container>
  <div class="inputs">
    <v-text-field
      label="LOGIN"
    >
    </v-text-field>
    <v-text-field 
    label="SENHA"></v-text-field>
  </div>
<div class= "botoes">
  <v-btn class= "mb-4">
    LOGIN
  </v-btn>
  <v-btn @click="$router.push('/CadastroCliente')">
    CADASTRE-SE
  </v-btn>
</div>
  </v-container>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style scoped>

.inputs {
  text-align: center;
}
.botoes { 
  display: flex;
  flex-direction: column;
}

</style>