<template>
    <v-container class="accent fill-height" fluid  >
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <h1>Registro</h1>
                <v-row>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="userData.razonSocial"
                            label="Razón Social"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select filled
                            :items="distritos"
                            v-model="userData.distritoId"
                            item-text="nombre"
                            item-value="id"
                            label="Distrito">
                            <template slot="selection-item" slot-scope="distrito">
                                {{distrito.nombre}}
                            </template>
                        </v-select>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="userData.ruc"
                            label="Ruc"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select filled
                            :items="provincias"
                            item-text="nombre"
                            label="Provincias">
                            <template slot="selection-item" slot-scope="provincia">
                                {{provincia.nombre}}
                            </template>
                        </v-select>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="userData.direccion"
                            label="Dirección"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select filled
                            :items="departamentos"
                            item-text="nombre"
                            label="Departamentos">
                            <template slot="selection-item" slot-scope="departamento">
                                {{departamento.nombre}}
                            </template>
                        </v-select>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            type="number"
                            v-model="userData.telefono"
                            label="Teléfono"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="userData.correo"
                            label="Correo"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="12">
                        <v-text-field filled
                            v-model="userData.clave"
                            type="password"
                            label="Contraseña"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="12">
                        <v-text-field filled
                            v-model="userData.clave2"
                            type="password"
                            label="Repetir Contraseña"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="12">
                        <v-btn text color="deep-purple accent-4" @click="registrarUsuario">
                            Registrar
                        </v-btn>
                    </v-col>
                </v-row>
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
            razonSocial: '',
            distritoId: 1,
            ruc:'',
            provinciaId: '',
            direccion: '',
            departamentoId: '',
            telefono: '',
            correo:'',
            clave:'',
            clave2: ''
        },
        distritos: [{id: 1,valor: 1,nombre: 'Soles'},{id: 2,valor: 2,nombre: 'Soles2'}],
        provincias: [{id: 1,valor: 1,nombre: 'Soles'},],
        departamentos: [{id: 1,valor: 1,nombre: 'Soles'},]
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
        registrarUsuario: function(){
            var me = this;

            console.log("registrando...")
            axios.post("api/Usuario/registrar", me.userData)
                .then((res)=>{
                    console.log(res)
                    if(res.data == true){
                        console.log("se registro satisfactoriamente")
                        me.setUserActual(res.data)
                        this.$router.push('/menu')
                    }else{
                        alert("Hubo un error. No se registro");
                        console.log("Nose registro")
                    }
                }).
                catch((err)=>{
                    console.log("Error: "+err)
                })
            
        }
    }
}
</script>