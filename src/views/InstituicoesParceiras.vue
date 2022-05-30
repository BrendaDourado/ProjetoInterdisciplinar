<template>
<div>
    <h1>Instituições parceiras</h1>

      <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1 mb-4 mr-4 ml-4 mt-4"
  ></v-data-table>

 <v-btn class= "mb-4 btn" @click="$router.push('/CadastroInstituicao')">

 QUERO CADASTRAR MINHA INSTITUIÇÃO
  </v-btn>
</div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
          {
            text: 'Instituição',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Endereço', value: 'endereço' },
          { text: 'Funcionamento', value: 'func' },
          { text: 'Responsavel', value: 'resp' },
        ],
        desserts: [
          {
            name: 'CRECHE COMUNITÁRIA RAIO DE SOL',
            endereço: 'Avenida Nova Cantareira, 1201',
            func: "9h as 18h",
            resp: "Adônis",
          },
          ]
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