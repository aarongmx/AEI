<template lang="pug">
    footer.row
        .col-sm-12.col-md-6
            p <b>Asociación de Empresarios de Iztapalapa A.C</b> | {{ new Date() | moment("YYYY") }}
        .col-sm-12.col-md-3
            p <b>Hola</b>
        .col-sm-12.col-md-3
            p <b>Como estas?</b>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
