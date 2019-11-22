<template>
    <v-container class="accent fill-height" fluid  >
        <v-row>
            <v-col>
                <h1>Datos del Girador</h1>
                <v-radio-group v-model="tipo" hide-details>
                    <v-radio value="empresa" label="Empresa" color="primary"></v-radio>
                    <v-radio value="cliente" label="Cliente" color="primary"></v-radio>
                </v-radio-group>
                <v-row v-if="tipo == 'empresa'" align="center" justify="center">
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataEmpresa.razonSocial"
                            label="Razón Social"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataEmpresa.ruc"
                            label="RUC"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataEmpresa.girado.correo"
                            label="Correo"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                             type="number"
                            v-model="dataEmpresa.girado.telefono"
                            label="Telefono"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataEmpresa.girado.domicilio"
                            label="Domicilio"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select filled
                            :items="departamentos"
                            id="departamentos.id"
                            item-text="nombre"
                            item-value="id"
                            v-model="dataEmpresa.girado.departamentoId"
                            label="Departamento">
                            <template slot="selection-item" slot-scope="departamento">
                                {{departamento.nombre}}
                            </template>
                        </v-select>
                    </v-col>
                </v-row>
                <v-row v-if="tipo == 'cliente'" align="center" justify="center">
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataPersona.dni"
                            label="DNI"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataPersona.nombre"
                            label="Nombre"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataPersona.apellidoPaterno"
                            label="Apellido Paterno"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataPersona.apellidoPaterno"
                            label="Apellido Materno"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataPersona.girado.correo"
                            label="Correo"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            type="number"
                            v-model="dataPersona.girado.telefono"
                            label="Telefono"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="dataPersona.girado.domicilio"
                            label="Domicilio"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select filled
                            :items="departamentos"
                            id="monedas.id"
                            item-text="nombre"
                            item-value="id"
                            v-model="dataPersona.girado.departamentoId"
                            label="Departamento">
                            <template slot="selection-item" slot-scope="departamento">
                                {{departamento.nombre}}
                            </template>
                        </v-select>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <h1>Datos de la Letra</h1>
                <v-row align="center" >
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select filled
                            :items="monedas"
                            id="monedas.id"
                            item-text="nombre"
                            item-value="id"
                            v-model="datosLetra.monedaId"
                            label="Moneda">
                            <template slot="selection-item" slot-scope="moneda">
                                {{moneda.nombre}}
                            </template>
                        </v-select>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            type="number"
                            v-model="datosLetra.valorNominal"
                            label="Importe"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-menu v-model="menuDatepickerfechaGiro"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">

                            <template v-slot:activator="{ on }">
                                <v-text-field filled
                                    v-model="datosLetra.fechaGiro"
                                    label="Fecha de Giro"
                                    prepend-icon="event"
                                    readonly v-on="on" />
                            </template>
                            <v-date-picker v-model="datosLetra.fechaGiro" @input="menuDatepickerfechaGiro = false"/>
                        </v-menu>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select filled
                            :items="departamentos"
                            id="monedas.id"
                            item-text="nombre"
                            item-value="id"
                            v-model="datosLetra.departamentoId"
                            label="Lugar de giro">
                            <template slot="selection-item" slot-scope="departamento">
                                {{departamento.nombre}}
                            </template>
                        </v-select>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-menu v-model="menuDatepickerfechaVencimiento"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">

                            <template v-slot:activator="{ on }">
                                <v-text-field filled
                                    v-model="datosLetra.fechaVencimiento"
                                    label="Fecha de Vencimiento"
                                    prepend-icon="event"
                                    readonly v-on="on" />
                            </template>
                            <v-date-picker v-model="datosLetra.fechaVencimiento" @input="menuDatepickerfechaVencimiento = false"/>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center" >
                <v-btn  color="primary" @click="registrar">
                    Registrar
                </v-btn>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
import axios from "axios"
import {mapState, mapMutations} from 'vuex'

export default {
    data: () => ({
        tipo:'empresa',
        monedas:[ ],
        departamentos: [],
        
        dataEmpresa:{
            girado: {
                tipoCliente: 'EMPRESA',
                tipoDocumento: 'RUC',
                correo: '',
                telefono: '',
                domicilio: '',
                departamentoId: ''
            },
            razonSocial:'',
            ruc:''
        },
        dataPersona:{
            girado: {
                tipoCliente: 'CLIENTE',
                tipoDocumento: 'DNI',
                correo: '',
                telefono: '',
                domicilio: '',
                departamentoId: ''
            },
            nombre:'',
            apellidoPaterno:'',
            apellidoMaterno:'',
            dni:''
        },

        datosLetra: {
            monedaId: '',
            departamentoId: '',
            usuarioId:'',
            giradoId:'',
            valorNominal: '',
            fechaGiro: new Date().toISOString().substr(0, 10),
            fechaVencimiento: new Date().toISOString().substr(0, 10)
        },
        menuDatepickerfechaGiro: false,
        menuDatepickerfechaVencimiento: false,
    }),
    computed:{
    ...mapState([
      'userActual'
    ]),
  },
    methods: {
        registrar: function(){
            var me = this;
            this.datosLetra.usuarioId = this.userActual.id
            console.log("user actual", this.userActual.id)
            // console.log(1, this.datosGirador)
            console.log(this.dataEmpresa)
            // console.log(this.datosGirador)
            console.log(2, this.datosLetra)
            if (this.tipo=='empresa'){
                axios.post("/api/GiradoEmpresa/insertar", me.dataEmpresa)
                .then(res =>{
                    console.log("res/inse",res.data)
                    if(res.data.giradoId !=0){
                        console.log("res",res.data)
                        me.datosLetra.giradoId = res.data.giradoId
                        console.log(3, this.datosLetra)
                        axios.post("/api/Letra", me.datosLetra)
                            .then(res => {
                                console.log(4, res.data)
                                alert("Registro completado");
                                this.$router.push('/menu')
                            })
                            .catch(err => {
                                console.log("Error: "+err)
                            })
                    }else{
                        alert("Hubo un error Intentelo otra vez");
                        console.log("Hubo un error")
                    }
                })
                .catch(err => {
                    console.log("Error: "+err)
                })
            }
            // if(this.tipo == 'cliente'){
            //     axios.post("api/GiradoPersona", me.dataPersona)
            //     .then(res =>{
            //         if(res.data.id != 0){
            //             me.setUserActual(res.data)
            //             this.$router.push('/menu')
            //         }else{
            //             alert("Hubo un error Intentelo otra vez");
            //             console.log("Nose Logue")
            //         }
            //     })
            //     .catch(err => {
            //         console.log("Error: "+err)
            //     })
            // }

            

            // var me = this;
            // axios.post("api/Letra", me.userData)
            //     .then(res =>{
            //         if(res.data.id != 0){
            //             me.setUserActual(res.data)
            //             this.$router.push('/menu')
            //         }else{
            //             alert("Hubo un error Intentelo otra vez");
            //             console.log("Nose Logue")
            //         }
            //     })
            //     .catch(err => {
            //         console.log("Error: "+err)
            //     })
            //this.$router.push('/menu')
        }
    },
    beforeCreate(){
        var me = this
        
        axios.get("api/Usuario/moneda")
        .then(res=>{
            me.monedas = res.data
        })
        .catch(err => console.log("Error: "+err))

        axios.get("api/Usuario/departamento")
        .then(res=>{
            me.departamentos = res.data
        })
        .catch(err => console.log("Error: "+err))
        
    }
}
</script>