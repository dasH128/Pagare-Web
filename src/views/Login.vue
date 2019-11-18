<template>
    <v-container class="accent fill-height" fluid >
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">

                    <v-card-text>
                        <p class="display-1 text--primary">
                            Bienvenido
                        </p>
                        <v-form>
                        <v-text-field
                            label="Usuario"
                            name="login"
                            prepend-icon="person"
                            type="text"/>

                        <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="lock"
                            type="password"/>
                        </v-form>
                        <v-btn text>
                            <span class="mr-2">¿olvido su contraseña?</span>
                        </v-btn>
                        <v-btn text color="deep-purple accent-4" @click="validarUsuario">
                            Ingresar
                        </v-btn>
                        <v-btn text color="deep-purple accent-4" @click="registrarUsuario">
                            Registrarse
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () =>({
        userData: {
            user: '',
            pass:''
        }
    }),
    methods: {
        validarUsuario: function(){
            
            this.$router.push('/menu')
        },
        registrarUsuario: function(){
            
            this.$router.push('/registro')
        }
    }
}
</script>
