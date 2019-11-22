<template>
    <v-container class="accent fill-height" fluid  >
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="12">
                <h1>Buscar Letra</h1>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
                <v-text-field filled
                    
                    label="Razon Social / Nombre"/>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
                <v-select filled
                    :items="monedas"
                    id="monedas.id"
                    item-text="nombre"
                    label="Moneda">
                    <template slot="selection-item" slot-scope="moneda">
                        {{moneda.nombre}}
                    </template>
                </v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
                <v-text-field filled
                    v-model="busqueda.porIdentidad"
                    type="number"
                    label="Número de identidad"/>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
                <v-menu v-model="menuDatepickerBusqueda"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px">
                    <template v-slot:activator="{ on }">
                        <v-text-field filled
                            v-model="busqueda.porFecha"
                            label="Fecha de Vencimiento"
                            prepend-icon="event"
                            readonly v-on="on" />
                        </template>
                    <v-date-picker v-model="busqueda.porFecha" @input="menuDatepickerBusqueda = false"/>
                </v-menu>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
                <v-btn  color="primary" @click="buscar"  >
                    Buscar
                </v-btn>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12">
                <!-- <v-simple-table align="center" justify="center" >
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Razon Social / Nombre</th>
                                <th>T. Doc</th>
                                <th>N° Identidad</th>
                                <th>N° Letra</th>
                                <th>F. Vencimiento</th>
                                <th>Moneda</th>
                                <th>Importe</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in datos" :key="data.id">
                                <th>{{data.id}}</th>
                                <th>{{data.id}}</th>
                                <th>{{data.id}}</th>
                                <th>{{data.id}}</th>
                                <th>{{data.id}}</th>
                                <th>{{data.id}}</th>
                                <th>{{data.id}}</th>
                                <th>{{data.id}}</th>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table> -->
                <v-data-table
                    v-model="selectedLetra"
                    :headers="headersLetra"
                    :items="dataLetras"
                    :single-select="singleSelect"
                    item-key="id"
                    show-select
                    class="elevation-1">
                <template v-slot:top>
      <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <v-row >
                <v-col class="d-flex" cols="12" sm="3">
                    <v-btn  color="primary" @click="regresar"  >
                        Regresar
                    </v-btn>
                </v-col>
                <v-col class="d-flex" cols="12" sm="3">
                    <v-btn  color="primary" @click="descuento"  >
                        Descuento
                    </v-btn>
                </v-col>
                <v-col class="d-flex" cols="12" sm="3">
                    <v-btn  color="primary" @click="modificar"  >
                        Modificar
                    </v-btn>
                </v-col>
                <v-col class="d-flex" cols="12" sm="3">
                    <v-btn  color="primary" @click="dialogModificar = true"  >
                        Eliminar
                    </v-btn>
                </v-col>
            </v-row>
    
    
        <v-dialog v-model="dialogModificar" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialogModificar = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Modificar</v-toolbar-title>
                </v-toolbar>
            </v-card>
        </v-dialog>
            
        <v-dialog v-model="dialogDescuento" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialogDescuento = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Descuento</v-toolbar-title>
                </v-toolbar>
                <v-container v-show="selectedLetra != null" class="accent fill-height" fluid  >
                    <v-row>
                        <v-col>
                            <h1>Datos de letra</h1>
                            <v-row align="center" justify="center">
                                
                                <v-col class="d-flex" cols="12" sm="2">
                                    <v-text-field filled
                                        v-model="selectedLetra[0].id"
                                        label="Id"/>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="3">
                                    <v-text-field filled
                                        v-model="selectedLetra[0].fechaGiro"
                                        label="Fecha Giro"/>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="3">
                                    <v-text-field filled
                                        v-model="selectedLetra[0].fechaVencimiento"
                                        label="Fecha Vencimiento"/>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="3">
                                    <v-text-field filled
                                        v-model="selectedLetra[0].valorNominal"
                                        label="Importe"/>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="3">
                                    <v-text-field filled
                                        v-model="selectedLetra[0].moneda.valor"
                                        label="Moneda"/>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h1>Descuento de Letra</h1>
                            <v-spacer/>
                            <v-btn color="primary">Calcular</v-btn>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h1>Tasa y Plazo</h1>

                            
                            <v-row align="center" >
                                <v-col class="d-flex" cols="12" sm="2">
                                    <v-menu v-model="menuDatepickerDescuento"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field filled
                                                v-model="calculoLetra.fechaDescuento"
                                                label="Fecha de Descuento"
                                                prepend-icon="event"
                                                readonly v-on="on" />
                                            </template>
                                        <v-date-picker v-model="calculoLetra.fechaDescuento" @input="menuDatepickerDescuento = false"/>
                                    </v-menu>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="2">
                                    <v-select filled
                                        :items="tipoPlazos"
                                        item-text="nombre"
                                        item-value="valor"
                                        v-model="calculoLetra.dias"
                                        label="Plazo Tasa">
                                        <template slot="selection-item" slot-scope="tipoPlazo">
                                            {{tipoPlazo.nombre}}
                                        </template>
                                    </v-select>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="2">
                                    <v-text-field filled
                                        v-model="calculoLetra.dias"
                                        label="Tdias"/>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="3">
                                    <v-text-field filled
                                        v-model="calculoLetra.letraId"
                                        label="Valor Tasa(%)"/>
                                </v-col>
                            </v-row>


                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </v-container>


</template>

<script>
import axios from "axios"

export default {
    data: () => ({
        tipoTasas:[{id:0,nombre:'EFECTIVA'}],
        tipoPlazos:[{id:'0',nombre:'ANUAL', valor:360},
        {id:'1',nombre:'SEMESTRAL', valor:180},
        {id:'2',nombre:'CUATRIMESTRAL', valor:120},
        {id:'3',nombre:'TRIMESTRAL', valor:90},
        {id:'4',nombre:'BIMESTRAL', valor:60},
        {id:'5',nombre:'MENSUAL', valor:30}],
        calculoLetra:{
            dias:'',
            letraId:'',
            fechaCreacion:'',

            fechaGiro:'',
            fechaVencimiento:'',
            fechaDescuento:new Date().toISOString().substr(0, 10),
            valorNominal:'',
            monedaId:'',
            valorNeto:'',
            valorEntregado:'',
            valorRecibido:'',
            descuento:'',
            costoGastoInicial:'',
            costoGastoFinal:'',
            diasDescontar:'',
            tea:'',
            tcea:''
        },
        dialogModificar:false,
        dialogDescuento:false,
        datos:[
            {id: 1},
            
        ],
        busqueda: {
            // porNombre: '',
            porMoneda: '',
            porIdentidad:'',
            porFecha: ''
        },
        menuDatepickerDescuento:false,
        menuDatepickerBusqueda: false,
        monedas:[
            {id: 1,valor: 1,nombre: 'Soles'},
            {id: 2,valor: 3.65,nombre: 'Dolares'},
            {id: 3,valor: 4.23,nombre: 'Euros'}
        ],


        letra:{
            id:'ss',

        },
        singleSelect: true,
        selectedLetra:[{
            id:'',

            fechaGiro:'',
            fechaVencimiento:'',
            valorNominal:'',
            moneda:{nombre:'', valor:''}
            }],
        headersLetra:[
            {text:'N°', value:'id'},
            {text: 'RAzon Social', value:'giradoId'},
            {text: 'T Doc', value:'girado.tipoDocumento'},
            {text: 'N Identidad'},
            {text: 'N Letra', value:'id'},
            {text: 'Vencimiento', value:'fechaVencimiento'},
            {text: 'Moneda', value:'moneda.nombre'},
            {text: 'Importe', value:'valorNominal'}
        ],
        dataLetras:[],
        departamentos: [],
        datosGirador: {
            razonSocial: '',
            ruc: 'asgasgwgas',
            correo: '',
            telefono: '',
            domicilio: '',
            departamento: ''
        },
        datosLetra: {
            moneda: 1,
            importe: '',
            fechaGiro: new Date().toISOString().substr(0, 10),
            lugar: 'lima',
            fechaVencimiento: new Date().toISOString().substr(0, 10)
        },
        menuDatepickerfechaGiro: false,
        menuDatepickerfechaVencimiento: false,
    }),
    methods: {
        buscar: function(){

        },
        regresar: function(){
            this.$router.push('/menu')
        },
        descuento: function(){
            this.dialogDescuento=true
        },
        modificar: function(){
            this.dialogModificar=true
        },
        eliminar: function(){

        }
    },
    beforeCreate(){
        var me = this
        
        axios.get("api/Letra")
        .then(res=>{
            console.log("ee: "+res)
            me.dataLetras = res.data
        })
        .catch(err => console.log("Error: "+err))


        
    }

}
</script>