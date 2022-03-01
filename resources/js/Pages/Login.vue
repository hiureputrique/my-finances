<template>
    <v-app>
        <v-container class="fill-height">
            <v-layout class="align-center justify-center">
                <v-flex class="login-form">
                    <v-row class="mb-5 align-center justify-center display-1">
                        <v-img :src="logo" class="logo mr-3">
                        </v-img>
                        My Finances
                    </v-row>
                    <v-card light>
                        <v-card-text>
                            <v-card-subtitle class="text-center">
                                Log in to my finances portal
                            </v-card-subtitle>
                            <v-form>
                                <v-text-field prepend-icon="mdi-email" label="Email" type="email"></v-text-field>
                                <v-text-field prepend-icon="mdi-lock" label="Password" type="password"></v-text-field>
                                <v-btn block dark>
                                    Sign In
                                </v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                    <div class="text-center mt-3">
                        | Don't have an account?
                        <v-btn light class="ml-2">
                            Sign Up
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import GuestLayout from "../layouts/GuestLayout";

export default {
    name: "Login",
    layout: GuestLayout,
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
</style>
