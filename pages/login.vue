<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm8 md7>
        <v-card class="card--flex-toolbar" :color="loginHasError ? 'red' : 'warning'">
          <v-toolbar card prominent dark color="grey darken-2">
            <v-toolbar-title>
              {{ $t('messages.signin_title') }}
            </v-toolbar-title>
            <v-spacer />
            <v-tooltip v-model="showSignInTip" left>
              <v-btn slot="activator" icon large>
                <v-icon class="mdi-36px">
                  mdi-account-circle
                </v-icon>
              </v-btn>
              <span>{{ $t('messages.signin_tip') }}</span>
            </v-tooltip>
          </v-toolbar>

          <v-form @submit.stop.prevent="signIn">
            <v-card-text>
              <v-text-field
                v-model="username"
                clearable
                prepend-icon="person"
                name="username"
                :label="$t('username')"
                type="text"
              />
              <v-text-field
                id="password"
                v-model="password"
                clearable
                prepend-icon="lock"
                name="password"
                :label="$t('password')"
                type="password"
              />
            </v-card-text>

            <v-card-actions>
              <v-btn
                block
                color="primary darken-3"
                class="elevation-0"
                :loading="loading"
              >
                {{ $t('signin') }}
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthMixin from '~/mixins/auth'

@Component({
  auth: false,
  layout: 'auth',
  mixins: [AuthMixin]
})
export default class LoginPage extends Vue {
  loading: Boolean = false
  username: String = 'admin'
  password: String = 'qwerty'
  showSignInTip: Boolean = true
}
</script>

<style lang="stylus">
.card--flex-toolbar
  margin-top -88px
  z-index 2
</style>
