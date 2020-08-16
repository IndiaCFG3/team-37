<template>
    <v-card class="pa-5 mx-auto my-12" max-width="700" max-height="700">
        <v-card-title>
            SIGN IN
        </v-card-title>
        <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="Email" :rules="EmailRules" label="E-mail" required></v-text-field>
                <v-text-field v-model="Password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="[PasswordRules.required, PasswordRules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-2" label="Password" 
                hint="At least 8 characters" class="input-group--focused" @click:append="showPassword = !showPassword"></v-text-field>
                <v-btn :disabled="!valid" color="success" class="mr-4 mt-12" @click="validate">
                    Sign In
                </v-btn>
                <v-btn color="error" class="mr-4 mt-12" @click="reset">
                    Reset
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
  export default {
    name: 'Login',
    data() {
        return {
            Email: '',
            Password: '',
            
            showPassword: true,
            valid: true,
            
            PasswordRules: {
                required: value => !!value || 'Password is required',
                min: v => v.length >= 8 || 'Min 8 characters',
            },

            EmailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }
    },

    methods: {
        validate () {
            if(this.$refs.form.validate()) {
                var PayLoad = {
                    'Email': this.Email,
                    'Password': this.Password
                }

                this.$store.dispatch('LogInUser', PayLoad);
            }
        },

        reset () {
            this.$refs.form.reset()
        },
    },
}

</script>