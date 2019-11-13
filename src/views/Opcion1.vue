<template>
    <v-container class="accent fill-height" fluid  >
        <v-row>
            <v-col>
                <h1>Datos del Girador</h1>
                <v-row align="center" justify="center">
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Razón Social"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="RUC"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Correo"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Telefono"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Domicilio"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Departamento"
                            filled/>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <h1>Datos de la Letra</h1>
                <v-row align="center" >
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Razón Social"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Importe"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Correo"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Telefono"
                            filled/>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Domicilio"
                            filled/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center" >
                <v-btn  color="primary">
                    Registrar
                </v-btn>
            </v-col>
        </v-row>
        
    </v-container>
</template>