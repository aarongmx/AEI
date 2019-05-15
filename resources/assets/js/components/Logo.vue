<template lang="pug">
    img.img-fluid(:src="`/img/logo-aei-${loadLogo}.png`")
</template>

<script>
    export default {
        props: {
            logo: String
        },
        computed: {
            loadLogo() {
                if (this.props === 'b') {
                    return 'blanco';
                }
                return 'azul';
            }
        }
    }
</script>
