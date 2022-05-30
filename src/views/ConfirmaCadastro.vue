<template>
    <div>
    <h1>OLÁ {{name}} CADASTRO CONFIRMADO !!! SEJA BEM VINDO AO DONAVERSE</h1>
    <h3> para seguir para área logada </h3>
    <v-btn color="blue" @click="$router.push('/HomeLogada')">  CLIQUE AQUI </v-btn>
    </div>
</template>
<script>
export default {
    data() {
        return{
            name: localStorage.getItem("nome")
        }  
    },
}
</script>
