<template>
    <div>
    <div v-for="t in teste">
    <span>{</span> {{t.mat}} : {{t.nome}} <span>}</span>
    </div>
</div>
</template>
<script>
import {db} from '../db.js'
const setores = db.ref('peixaria')
export default {
    props:['id'],
    name: "home",
    // firebase: { teste: db.ref('peixaria/fevereiro') },

    data: function(){
       return {
            teste: [],
            date: null,
            bd: ''
            }
    },
    //8
    //8
    watch: {
        id: {
            immediate: true,
         handler(id) {
        this.$rtdbBind('teste', setores.child(id))
        }
    }
    }
}
</script>