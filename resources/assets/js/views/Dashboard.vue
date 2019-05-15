<template lang="pug">
    .container
        h1 Dashboard {{ currentUsr.nombres }}
        a.btn.btn-primary(@click.prevent="logout")
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$store.commit('logout');
                this.$router.push({path: '/'})
            }
        },
        computed: {
            currentUsr() {
                return this.$store.getters.currentUsr;
            }
        }
    }
</script>
