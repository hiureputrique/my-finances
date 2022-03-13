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
                        <v-form @submit.prevent="submit">
                            <v-text-field
                                prepend-icon="mdi-account"
                                v-model="form.name"
                                :rules="[rules.required]"
                                label="First Name"
                                maxlength="20"
                                required
                            ></v-text-field>
                            <v-text-field
                                prepend-icon="mdi-email"
                                v-model="form.email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                            <v-text-field
                                prepend-icon="mdi-lock"
                                v-model="form.password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Password"
                                hint="At least 8 characters"
                                counter
                                @click:append="show1 = !show1"
                            ></v-text-field>
                            <v-text-field
                                prepend-icon="mdi-lock"
                                v-model="form.password_confirmation"
                                block
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, passwordMatch]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Confirm Password"
                                counter
                                @click:append="show1 = !show1"
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn block dark type="submit"> Register </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import GuestLayout from "../../Layouts/Guest";
import Logo from "../../Components/Logo";

export default {
    name: "Register",
    layout: GuestLayout,

    components: {
        Logo,
    },
    computed: {
        passwordMatch() {
            return () =>
                this.password === this.password_confirmation ||
                "Password must match";
        },
    },
    props: {
        errors: Object,
    },
    data: () => ({
        dialog: true,
        valid: true,
        form: {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        },
        emailRules: [
            (v) => !!v || "Required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        show1: false,
        rules: {
            required: (value) => !!value || "Required.",
            min: (v) => (v && v.length >= 8) || "Min 8 characters",
        },
    }),
    methods: {
        validate() {
            if (this.$refs.loginForm.validate()) {
            }
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
        submit() {
            //  name: this.name
            this.$inertia.post("/register", this.form);
        },
    },
};
</script>

<style scoped>
.login-form {
    max-width: 500px;
}
</style>
