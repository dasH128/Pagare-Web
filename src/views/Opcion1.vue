<template>
    <v-container class="accent fill-height" fluid  >
        <v-row>
            <v-col>
                <h1>Datos del Girador</h1>
                <v-row align="center" justify="center">
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="datosGirador.razonSocial"
                            label="Razón Social"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="datosGirador.ruc"
                            label="RUC"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="datosGirador.correo"
                            label="Correo"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="datosGirador.telefono"
                            label="Telefono"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field filled
                            v-model="datosGirador.domicilio"
                            label="Domicilio"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select filled
                            :items="monedas"
                            id="monedas.id"
                            item-text="nombre"
                            label="Departamento">
                            <template slot="selection-item" slot-scope="moneda">
                                {{moneda.nombre}}
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
                            label="Moneda">
                            <template slot="selection-item" slot-scope="moneda">
                                {{moneda.nombre}}
                            </template>
                        </v-select>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
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
                            :items="monedas"
                            id="monedas.id"
                            item-text="nombre"
                            label="Lugar de giro">
                            <template slot="selection-item" slot-scope="moneda">
                                {{moneda.nombre}}
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
export default {
    data: () => ({
        monedas:[
            {id: 1,valor: 1,nombre: 'Soles'},
            {id: 2,valor: 3.65,nombre: 'Dolares'},
            {id: 3,valor: 4.23,nombre: 'Euros'}
        ],
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
        registrar: function(){
            // console.log('1 click')
            console.log(1, this.datosGirador)
            console.log(2, this.datosLetra)

            this.$router.push('/menu')
        }
    }
}
</script>