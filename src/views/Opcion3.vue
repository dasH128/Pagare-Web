<template>
    <v-container class="accent fill-height" fluid>
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="12">
                <h1>Buscar Letra</h1>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
                <v-menu v-model="menuDatepickerFechaCreacion"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px">
                    <template v-slot:activator="{ on }">
                        <v-text-field filled
                            v-model="busqueda.porFechaCreacion"
                            label="Fecha de Creacion"
                            prepend-icon="event"
                            readonly v-on="on" />
                        </template>
                    <v-date-picker v-model="busqueda.porFecha" @input="menuDatepickerFechaCreacion = false"/>
                </v-menu>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
                <v-select filled
                    :items="monedas"
                    id="monedas.id"
                    item-text="nombre"
                    label="Lugar de giro">
                    <template slot="selection-item" slot-scope="moneda">
                        {{moneda.nombre}}
                    </template>
                </v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
            </v-col>
            <v-col class="d-flex" cols="12" sm="12">
                <h1>Mostrar</h1>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
                <v-menu v-model="menuDatepickerFechaCreacion"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px">
                    <template v-slot:activator="{ on }">
                        <v-text-field filled
                            v-model="busqueda.porFechaCreacion"
                            label="Fecha desde"
                            prepend-icon="event"
                            readonly v-on="on" />
                        </template>
                    <v-date-picker v-model="busqueda.porFecha" @input="menuDatepickerFechaCreacion = false"/>
                </v-menu>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
                <v-menu v-model="menuDatepickerFechaCreacion"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px">
                    <template v-slot:activator="{ on }">
                        <v-text-field filled
                            v-model="busqueda.porFechaCreacion"
                            label="Fecha hasta"
                            prepend-icon="event"
                            readonly v-on="on" />
                        </template>
                    <v-date-picker v-model="busqueda.porFecha" @input="menuDatepickerFechaCreacion = false"/>
                </v-menu>
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
        monedas:[
            {id: 1,valor: 1,nombre: 'Soles'},
            {id: 2,valor: 3.65,nombre: 'Dolares'},
            {id: 3,valor: 4.23,nombre: 'Euros'}
        ],
        busqueda: {
            porNombre: '',
            porMoneda: '',
            porIdentidad:'',
            porFechaCreacion: ''
        },
        menuDatepickerFechaCreacion: false,
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