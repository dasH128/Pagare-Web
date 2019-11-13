<template>
    <v-container class="accent fill-height" fluid >
        <v-row align="center">
            <v-col >
                <div class="text-center">
                    <div class="my-2">
                    <v-btn x-large color="primary" dark @click="btnOpcion1">Registrar Letra</v-btn>
                    </div>
                    <div class="my-2">
                    <v-btn x-large color="primary" dark @click="btnOpcion2">Consultar Letra</v-btn>
                    </div>
                    <div class="my-2">
                    <v-btn x-large color="primary" dark @click="btnOpcion3">Registro de Letra Descontada</v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
export default {
    methods:{
        btnOpcion1: function(){
            this.$router.push('/opcion1')
        },
        btnOpcion2: function(){
            this.$router.push('/opcion2')
        },
        btnOpcion3: function(){
            this.$router.push('/opcion3')
        }
    }
}
</script>