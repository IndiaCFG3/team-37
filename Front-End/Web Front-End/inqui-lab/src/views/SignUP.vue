<template>
    <v-card class="pa-5 mx-auto my-12" max-width="700" max-height="700">
        <v-card-title>
            SIGN UP
        </v-card-title>
        <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="Name" :rules="[NameRules.required, NameRules.max]" label="Name" required></v-text-field>
                <v-text-field v-model="Email" :rules="EmailRules" label="E-mail" required></v-text-field>
                <v-text-field v-model="Password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="[PasswordRules.required, PasswordRules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-2" label="Password" 
                hint="At least 8 characters" class="input-group--focused" @click:append="showPassword = !showPassword"></v-text-field>
                <v-btn :disabled="!valid" color="success" class="mr-4 mt-12" @click="validate">
                    SIGN UP
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
    name: 'SignUP',
    data() {
        return {
            Name: '',
            Password: '',
            Email: '',

            valid: true,
            showPassword: true,

            NameRules: {
                required: value => !!value || 'Name is required',
                max: v => v.length <= 50 || 'Max 50 characters',
            },

            
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
                    'Name': this.Name,
                    'Email': this.Email,
                    'Password': this.Password
                }

                this.$store.dispatch('SignUpUser', PayLoad);
            }
        },

        reset () {
            this.$refs.form.reset()
        },
    },
}

</script>