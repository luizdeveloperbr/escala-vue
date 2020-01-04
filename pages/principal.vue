<template lang="pug">
div.main
    p {{teste}}
</template>
<script>
export default {
    data: () => ({teste: "t3st3"})
}
</script>
<style lang="scss">
$principal: red;
.main {
    color: $principal
};
</style>