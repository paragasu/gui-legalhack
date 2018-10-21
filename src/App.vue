<template>
<v-app>
  <v-toolbar app>
    <v-toolbar-title> SIMPLYLEGACY </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon router-link="/home"><v-icon>add</v-icon></v-btn>
  </v-toolbar>
  <v-content>
    <router-view/>
  </v-content>
</v-app>
</template>
