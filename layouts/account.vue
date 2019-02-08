<template>
  <v-app :dark="darkTheme">
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
      <v-divider class="my-2" />
      <!-- <v-list v-if="$route.name === 'typescript'" two-line> -->
      <v-list two-line>
        <v-list-tile avatar href="#">
          <v-list-tile-avatar>
            <img src="/images/avatars/nzxtua.png" alt="Deniz True">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="`Deniz True`" />
            <v-list-tile-sub-title class="grey--text body-2" v-text="`In love w/ Vue.js`" />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar href="#">
          <v-list-tile-avatar>
            <img src="/images/avatars/uliana.jpg" alt="Uliana Zhernokleva">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="`Uliana Zhernokleva`" />
            <v-list-tile-sub-title class="grey--text body-2" v-text="`In love w/ Vue.js`" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider />
      <v-list id="options">
        <v-list-tile>
          <v-list-tile-action>
            <v-switch
              v-model="darkTheme"
              color="grey darken-1"
            />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title
              class="subheading"
              v-text="`DarkTheme ${darkTheme ? 'enabled' : 'disabled'}..`"
            />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="signOut">
          <v-list-tile-action>
            <v-icon
              class="ml-1"
              v-text="'mdi-exit-run'"
            />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title
              class="subheading"
              v-text="$t('signout')"
            />
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
      <v-spacer />
      <v-btn
        icon
        small
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-notification-clear-all</v-icon>
      </v-btn>
      <v-btn
        icon
        small
        to="/account/login"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt class="page" />
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
            <v-icon>mdi-texture</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      class="px-3"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AccountLayout extends Vue {
  clipped: Boolean = false
  drawer: Boolean = false
  fixed: Boolean = false
  miniVariant: Boolean = false
  right: Boolean = true
  rightDrawer: Boolean = false
  darkTheme: Boolean = true
  title: String = 'Vuetify.js'
  items: Array<any> = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/'
    },
    {
      icon: 'mdi-language-typescript',
      title: 'TypeScript',
      to: '/typescript'
    },
    {
      icon: 'mdi-vuejs',
      title: 'About',
      to: '/about'
    }
  ]

  signOut() {
    return this.$auth.logout();
  }
}
</script>

<style lang="stylus">
.v-toolbar__content a
  color: #f5f5f5
  text-decoration: none

#options
  position: absolute
  bottom: 0
</style>
