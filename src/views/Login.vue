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
                            v-model="userData.correo"
                            type="text"/>

                        <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="lock"
                            v-model="userData.clave"
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
import axios from "axios"
import {mapState, mapMutations} from 'vuex'

export default {
    data: () =>({
        userData: {
            correo: '',
            clave:''
        }
    }),
    computed:{
        ...mapState([
            'userActual'
        ]),
    },
    methods: {
        ...mapMutations([
            'setUserActual'
        ]),
        validarUsuario: function(){
            var me = this;
            var ok = true

            if(me.userData.correo == ''){
                ok = false
                alert("Ingrese un correo")
            }
            if(me.userData.clave == ''){
                ok = false
                alert("Ingrese la contraseña")
            }

            if(ok == true){
                axios.post("api/Usuario/validate", me.userData)
                .then(res =>{
                    if(res.data.id != 0){
                        me.setUserActual(res.data)
                        this.$router.push('/menu')
                    }else{
                        alert("Hubo un error Intentelo otra vez");
                        console.log("Nose Logue")
                    }
                })
                .catch(err => {
                    console.log("Error: "+err)
                })
            }
            
            // this.$router.push('/menu')
        },
        registrarUsuario: function(){
            
            this.$router.push('/registro')
        }
    }
}
</script>
