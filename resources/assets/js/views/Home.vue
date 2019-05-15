<template lang="pug">
    .container-fluid
        //- Nav
        header.row.align-items-center.header
            .col-12.px-5
                .brand
                    Logo
                    .bran__text
                        h1 Asociación de Empresarios de Iztapalapa A.C
                        h2 Comunidad AEI
                router-link(to="/login" class="btn btn-primary rounded-pill") Iniciar Sesion
                router-link(to="/registro" class="btn rounded-pill") Registrarse
        main.container.py-5
            section.row.my-3
                .col-sm-12.col-md-7
                    h2 ¿Quienes Somos?
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quasi odio aliquam, quos consectetur aspernatur voluptates, laudantium, assumenda maiores velit sit quae nostrum. Voluptas dolore magnam autem, officia doloremque reiciendis!
            section.row.my-3
                .col-12
                    h2 Nuestros Socios

        Footer
</template>

<script>
    import Footer from '../components/Footer.vue';
    import Logo from '../components/Logo.vue';
    // import Nav from '../components/Nav.vue';

    export default {
        data() {
            return {

            }
        },
        components: {
            // Nav,
            Footer,
            Logo
        }
    }
</script>
