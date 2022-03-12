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
                           <v-text-field prepend-icon="mdi-account" v-model="firstName" :rules="[rules.required]" label="First Name" maxlength="20" required></v-text-field>
                           <v-text-field prepend-icon="mdi-email" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                           <v-text-field prepend-icon="mdi-lock" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                           <v-text-field prepend-icon="mdi-lock" block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                             <v-spacer></v-spacer>
                            <v-btn block dark>
                                Register
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
    },
    computed: {
     passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },    
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
      }
    },
      data: () => ({
      dialog: true,
      valid: true,
      name: "",
      email: "",
      password: "",
      verify: "",
      emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      show1: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
      }
    })
}
</script>

<style scoped>
.login-form {
    max-width: 500px;
}
</style>
