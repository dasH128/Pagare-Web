<template>
    <v-container class="accent fill-height" fluid  >
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="12">
                <h1>Buscar Letra</h1>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
                <v-text-field filled
                    v-model="busqueda.porNombre"
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
                <v-simple-table align="center" justify="center" >
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
                </v-simple-table>
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
                    <v-btn  color="primary" @click="eliminar"  >
                        Eliminar
                    </v-btn>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        datos:[
            {id: 1},
            
        ],
        busqueda: {
            porNombre: '',
            porMoneda: '',
            porIdentidad:'',
            porFecha: ''
        },
        menuDatepickerBusqueda: false,
        monedas:[
            {id: 1,valor: 1,nombre: 'Soles'},
            {id: 2,valor: 3.65,nombre: 'Dolares'},
            {id: 3,valor: 4.23,nombre: 'Euros'}
        ],
    }),
    methods: {
        buscar: function(){

        },
        regresar: function(){

        },
        descuento: function(){

        },
        modificar: function(){

        },
        eliminar: function(){

        }
    }
}
</script>