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
                            v-model="userData.password1"
                            label="Contraseña"/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="12">
                        <v-text-field filled
                            v-model="userData.password2"
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
export default {
    data: () =>({
        userData: {
            razonSocial: '',
            distrito: '',
            ruc:'',
            provincia: '',
            direccion: '',
            departamento: '',
            telefono: '',
            correo:'',
            password1:'',
            password2: ''
        },
        distritos: [{id: 1,valor: 1,nombre: 'Soles'},],
        provincias: [{id: 1,valor: 1,nombre: 'Soles'},],
        departamentos: [{id: 1,valor: 1,nombre: 'Soles'},]
    }),
    methods: {
        registrarUsuario: function(){
            
            this.$router.push('/menu')
        }
    }
}
</script>