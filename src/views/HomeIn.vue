<template>
  <v-container>
    <h1>
     BEM VINDO AO DONAVERSE...
     <br>
    Um universo de doações , um universo paralelo onde suas doações são revertidas em pontos, DONAPOINTS que você poderá trocar por vouchers, pontos e até produtos com um dos nossos parceriros</h1>
<br>
<img src="../assets/img maos.jpeg">
<v-spacer/>
<br>
  <v-btn x-large @click="delay" color="blue" class="mr-4" type="submit">
      VENHA DOAR
    </v-btn>
    <br>
    <br>

    <h1> Somos um grupo de estudante na área de tecnologia, programamos web sistema voltado para doação, junto com a instituição iremos ajudar o próximo e se tornar dinâmico.
    </h1>
  
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "HomeIn",
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    delay() {
      setTimeout(() => {
        if (localStorage.length > 0) {
           this.$router.push('/DoarView');
        } else {
          this.$router.push("/LoginIn");
        }
      }, 100);
    },
  },
};
</script>


<style scoped>

h1{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(0, 132, 209);
}
img {
  max-width: 100%;
  height: 300px;
}
.text-home {
  font-size: 14px;
}
.form {
  display: flex;
  justify-content: center;
}
</style>

