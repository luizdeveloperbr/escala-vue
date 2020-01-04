<template>
<div id="app">
    <p>{{msg}}</p>
    <router-view></router-view>
</div>
</template>
<script>
export default {
name: 'App',
data: () => ({msg: 'mensagen'})
}
</script>