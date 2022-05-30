<template>
  <div>
    <br/>
    <h1>OLÁ {{ name }} CADASTRO CONFIRMADO !!! SEJA BEM VINDO AO DONAVERSE</h1>
    <br/>
    <br/>
    <h3>para seguir para área logada</h3>
      <br>
    <v-btn color="blue" @click="$router.push('/HomeLogada')">
      CLIQUE AQUI
    </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: localStorage.getItem("nome"),
    };
  },
};
</script>
