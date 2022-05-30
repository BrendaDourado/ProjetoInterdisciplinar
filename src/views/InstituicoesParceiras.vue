<template>
<div>
    <h1>Colocar aqui a lista e instituições parceiras</h1>
 <v-btn class= "mb-4 btn" @click="$router.push('/CadastroInstituicao')">
 QUERO CADASTRAR MINHA INSTITUIÇÃO
  </v-btn>
</div>
</template>

<script>
export default {
  data() {
    return {
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
  },
}
<style scoped>
  .btn{
  background-color: #002960 !important;
  color: #fff;
}
</style>