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

      <v-divider v-if="$route.path === '/typescript'" />

      <v-list v-if="$route.path === '/typescript'" two-line class="py-0">
        <!-- <v-list two-line> -->
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

      <v-divider class="mt-5" />

      <v-list class="py-0">
        <v-list-tile @click="darkTheme = !darkTheme">
          <v-list-tile-action>
            <v-icon v-text="`${darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'}`" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title
              class="subheading"
              v-text="`Dark: ${darkTheme ? 'ON' : 'OFF'}`"
            />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="signOut">
          <v-list-tile-action>
            <v-icon
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
      <v-divider />
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
      <v-divider inset vertical class="mx-3" />
      <n-link id="logo" to="/redirect">
        <v-toolbar-title
          :class="`${darkTheme ? 'grey--text text--darken-2' : 'grey--text text--lighten-1'}`"
          v-html="title"
        />
      </n-link>
      <v-spacer />

      <v-divider inset vertical class="mx-3 hidden-sm-and-down" />

      <v-layout row align-center hidden-sm-and-down style="max-width: 110px">
        <v-tooltip
          v-for="locale in $i18n.locales"
          :key="locale.code"
          bottom
        >
          <n-link
            slot="activator"
            :to="switchLocalePath(locale.code)"
          >
            <div class="ma-2">
              <flag :iso="locale.flag" />
            </div>
          </n-link>
          <span>{{ locale.name }}</span>
        </v-tooltip>
      </v-layout>

      <v-divider inset vertical class="mx-3 hidden-sm-and-down" />

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
        @click="$router.push('/account/login')"
      >
        <v-icon class="mdi-36px">
          mdi-account-circle-outline
        </v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <nuxt class="page" />
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      width="420"
      temporary
      fixed
    >
      <v-list two-line class="pt-0">
        <v-list-tile class="grey" @click.native="right = !right">
          <v-list-tile-action>
            <v-icon class="mdi-36px" color="deep-orange darken-2">
              mdi-drag-variant
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="subheading">
              {{ 'Action Center' | uppercase }}
            </v-list-tile-title>
            <v-list-tile-sub-title class="body-1">
              You notifications here..
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      class="px-3"
      app
    >
      <span>2019 &copy; {{ description }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class DefaultLayout extends Vue {
  clipped: Boolean = false
  drawer: Boolean = true
  fixed: Boolean = false
  miniVariant: Boolean = false
  right: Boolean = true
  rightDrawer: Boolean = false
  darkTheme: Boolean = false

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

  get title(): String { return '<span class="deep-orange--text text--lighten1">S</span>ales <span class="deep-orange--text text--lighten1">A</span>ssessment <span class="deep-orange--text text--lighten1">C</span>enter'; };
  get description(): String | undefined { return (process.env.DESCRIPTION || '[SAC]'); };
}
</script>

<style lang="stylus">
#logo
  text-decoration-line none
  .v-toolbar__title
    font-size 36px
    font-weight 600

.flag-icon
  font-size 22px
  border-radius 50%
</style>
