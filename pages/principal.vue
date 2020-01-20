<template>
<div >
<div class="main">

<button class="button is-link">+</button>

    <home :id="$route.params.setor"></home>

</template>
<script>
import home from './home.vue'
export default {
    data:function(){
        return {teste:""}
        },
    components: {home}
}
</script>
<style lang="scss">

$principal: hsla(226.7, 62.4%, 64.5%, 0.5);
$notPrin: green;
.main {
    color: $principal
};
.teste {
    color: $notPrin
}
</style>