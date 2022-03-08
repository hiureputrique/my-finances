<template>
    <v-container class="fill-height">
        <v-layout class="align-center justify-center">
            <v-flex class="login-form">
                <v-row class="mb-5 align-center justify-center display-1">
                    <logo />
                    My Finances
                </v-row>
                <v-card light>
                    <v-card-text>
                        <v-card-subtitle class="text-center">
                            Register in to my finances portal
                        </v-card-subtitle>
                        <v-form>
<!--                            <v-text-field prepend-icon="mdi-email" label="Email" type="email"></v-text-field>-->
<!--                            <v-text-field prepend-icon="mdi-lock" label="Password" type="password"></v-text-field>-->
                            <v-btn block dark>
                                Sign In
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import GuestLayout from "../../Layouts/Guest";
import Logo from "../../Components/Logo"

export default {
    name: "Register",
    layout: GuestLayout,

    components: {
        Logo
    }
}
</script>

<style scoped>
.login-form {
    max-width: 500px;
}
</style>
