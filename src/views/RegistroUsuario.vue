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
                            item-text="nombre"
                            item-value="id"
                            v-model="userData.distritoId"
                            label="Distrito">
                            <template slot="selection-item" slot-scope="distrito">
                                {{distrito.nombre}}
                            </template>
                        </v-select>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="userData.ruc"
                            type="number"
                            label="Ruc"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select filled
                            :items="provincias"
                            item-text="nombre"
                            item-value="id"
                            v-model="userData.provinciaId"
                            v-on:change="cargarDistritos"
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
                            item-value="id"
                            v-model="userData.departamentoId"
                            v-on:change="cargarProvincias"
                            label="Departamentos">
                            <template slot="selection-item" slot-scope="departamento">
                                {{departamento.id}}
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
            distritoId: '',
            ruc:'',
            provinciaId: '',
            direccion: '',
            departamentoId: '',
            telefono: '',
            correo:'',
            clave:'',
            clave2: ''
        },
        distritos: [],//[{id: 1,valor: 1,nombre: 'Soles'},{id: 2,valor: 2,nombre: 'Soles2'}],
        provincias: [],//[{id: 1,valor: 1,nombre: 'Soles'},],
        departamentos: [],//[{id: 1,valor: 1,nombre: 'Soles'},]
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
            var ok = true
            // alert(me.userData.ruc)
            if(me.userData.ruc.length != 11){
                ok = false
                alert("la longitud del ruc debe ser de 11 caracteres")
            }
            
            if(me.userData.razonSocial.length  == 0){
                ok = false
                alert("Ingrese la razon social")
            }
            
            if(me.userData.telefono.length != 9){
                ok = false
                alert("DEbe ingresar un telefono con 9 digistos")
            }
            if(me.userData.distritoId == ''){
                ok = false
                alert("Debe ingresar un distrito")
            }
            if(me.userData.provinciaId == ''){
                ok = false
                alert("Debe ingresar un provincia")
            }
            if(me.userData.departamentoId == ''){
                ok = false
                alert("Debe ingresar un departamento")
            }

            if(ok == true){
                 console.log("registrando...")
                axios.post("api/Usuario/registrar", me.userData)
                    .then((res)=>{
                        console.log(me.userData)
                        console.log(res)
                        if(res.data.id != 0){
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
           
            
        },
        cargarProvincias: function(){
            var me = this
            console.log("Milagr"+me.userData.departamentoId)
            axios.get("api/Usuario/provincia/"+me.userData.departamentoId)
            .then(res=>{
                me.provincias = res.data
            })
            .catch(err => console.log("Error: "+err))
        },
        cargarDistritos: function(){
            var me = this

            axios.get("api/Usuario/distrito/"+me.userData.provinciaId)
            .then(res=>{
                me.distritos = res.data
            })
            .catch(err => console.log("Error: "+err))
        }
    },
    beforeCreate(){
        var me = this

        axios.get("api/Usuario/departamento")
        .then(res=>{
            me.departamentos = res.data
        })
        .catch(err => console.log("Error: "+err))
    }
}
</script>