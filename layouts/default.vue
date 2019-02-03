<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider class="my-2"></v-divider>
      <v-list two-line>
        <v-list-tile avatar href="#">
          <v-list-tile-avatar>
            <img src="/images/avatars/nzxtua.png" alt="Deniz True">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="`Deniz True`"></v-list-tile-title>
            <v-list-tile-sub-title class="grey--text body-2" v-text="`In love w/ Vue.js`"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar href="#">
          <v-list-tile-avatar>
            <img src="/images/avatars/uliana.jpg" alt="Uliana Zhernokleva">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="`Uliana Zhernokleva`"></v-list-tile-title>
            <v-list-tile-sub-title class="grey--text body-2" v-text="`In love w/ Vue.js`"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        small
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `mdi-chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        small
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-window-maximize</v-icon>
      </v-btn>
      <v-btn
        icon
        small
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-window-minimize</v-icon>
      </v-btn>
      <n-link to="/redirect">
        <v-toolbar-title class="logo" v-text="title" />
      </n-link>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-notification-clear-all</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon>
              mdi-texture
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-language-typescript',
          title: 'TypeScript',
          to: '/typescript'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="styl">
  .v-toolbar__content a
    color: white
    text-decoration: underline
</style>
