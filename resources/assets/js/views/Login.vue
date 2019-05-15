<template lang="pug">
    .container
        .row
            .col-sm-12.col-md-7
                h1 Iniciar Sesión
                form(@submit.prevent="auth")
                    .form-group
                        label Correo
                        input.form-control(type="email" v-model="form.email")
                    .form-group
                        label Contraseña
                        input.form-control(type="password" v-model="form.password")
                    input.btn(type="submit", value="Inciar Sesión")
</template>

<script>
    import { login } from '../helpers/auth';
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                error: null
            }
        },
        methods: {
            auth() {
                this.$store.dispatch('login');
                login(this.$data.form)
                .then(response => {
                    this.$store.commit("loginSuccess", response);
                    this.$router.push({path: '/dashboard'});
                })
                .catch(error => {
                    this.$store.commit("loginFailed", {error})
                })

            }
        }
    }
</script>
