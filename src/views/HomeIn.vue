<template>
  <v-container>
    <div class="mt-5 home-img">
    </div>
    <h1>
      O donaverse é um universo de doações , um universo paralelo onde...</h1>
<br>
    <h1> Somos um grupo de estudante na área de tecnologia, programamos web sistema voltado para doação, junto com a instituição iremos ajudar o próximo e se tornar dinâmico.
    </h1>
    <v-btn @click="delay" color="blue" class="mr-4" type="submit">
      VENHA DOAR
    </v-btn>
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

<style>
.home-img {
  display: flex;
  justify-content: center;
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
