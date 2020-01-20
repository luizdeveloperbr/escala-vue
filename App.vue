<template>
<div id="app">
    <router-link :to="{name: principal, params:{setor: mes}}">{{principal}}</router-link>
    <form>
    <input type="radio" name="principal" value="principal" v-model="principal">
    <label for="principal">Mensal</label>
    <input type="radio" name="interjornada" value="interjornada" v-model="principal">
    <label for="interjornada">Interjornada</label>
    </form>
    <input type="text" placeholder="mês" v-model="mes" />
    <router-view></router-view>
</div>
</template>
<script>
export default {
name: 'App',
data: () => ({
    principal: '',
    mes: ''
    }),
    computed:{
        join(){
           return this.principal + "/" + this.mes
        }
    }
}
</script>