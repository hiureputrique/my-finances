<template>
    <v-container class="fill-height">
        <v-layout class="align-center justify-center">
            <v-flex class="login-form">
                <v-row class="mb-5 align-center justify-center display-1">
                    <v-img :src="logo" class="logo mr-3">
                    </v-img>
                    My Finances <br>
                    Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
                </v-row>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import GuestLayout from "../Layouts/Guest";

export default {
    name: "Welcome",
    layout: GuestLayout,

    props: {
        laravelVersion: String,
        phpVersion: String,
    },

    computed: {
        logo() {
            return this.$page.props.logo
        }
    },
}
</script>

<style scoped>

.login-form {
    max-width: 500px;
}

.logo {
    max-width: 50px;
}

h1 {
    color: white;
}
</style>
