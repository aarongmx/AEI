<template lang="pug">
    #main
        Nav
        .container
            router-view
</template>

<script>
    import Nav from '../components/Nav.vue';
    export default {
        data() {
            return {

            }
        },
        components: {
            Nav
        }
    }
</script>
