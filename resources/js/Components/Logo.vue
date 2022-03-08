<template>
    <v-img :src="logo" class="logo mr-3">
    </v-img>
</template>

<script>
export default {
    name: "Logo",
    computed: {
        logo() {
            return this.$page.props.logo
        }
    },
}
</script>

<style scoped>
.logo {
    max-width: 50px;
}
</style>
