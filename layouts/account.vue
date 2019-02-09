<template>
  <v-app :dark="darkTheme">
    <v-toolbar
      extended
      fixed
      flat
      app
    >
      <n-link id="logo" to="/">
        <v-toolbar-title
          id="logo-text"
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
        @click.stop="$router.push('/account/login')"
      >
        <v-icon class="mdi-36px">
          mdi-account-circle-outline
        </v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- <v-container fluid fill-height> -->
      <nuxt class="page" />
      <!-- </v-container> -->
    </v-content>

    <v-footer
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
  darkTheme: Boolean = true

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
</style>
