<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12 card--flex-toolbar" style="z-index:9">
          <v-toolbar card prominent dark color="grey darken-1">
            <v-toolbar-title>
              SignIn please..
            </v-toolbar-title>
            <v-spacer />
            <v-tooltip left>
              <v-btn slot="activator" icon large>
                <v-icon large>
                  mdi-account-circle
                </v-icon>
              </v-btn>
              <span>Welcome, User!<br>Enter you credits..</span>
            </v-tooltip>
          </v-toolbar>

          <v-form @submit.stop.prevent="signIn">
            <v-card-text>
              <v-text-field
                v-model="login"
                clearable
                prepend-icon="person"
                name="login"
                :label="$t('login')"
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
                dark
                block
                color="primary"
                type="submit"
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

<!-- <script>
export default {
  data() {
    return {
      login: '',
      password: ''
    };
  },

  methods: {
    async signIn() {
      debugger;
      // this.$axios.$post('/api/Account/Login', {
      await this.$auth.loginWith('local', {
        data: {
          userName: this.login,
          password: this.password
        }
      })
        .then((response) => {
          debugger;
        });
    }
  }
};
</script> -->

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  layout: 'account'
})
export default class LoginPage extends Vue {
  loading: Boolean = false
  login: String = 'admin'
  password: String = 'qwerty'

  signIn(): void {
    this.loading = true;
    // this.$axios.$post('/api/Account/Login', {
    this.$auth.loginWith('local', {
      data: {
        userName: this.login,
        password: this.password
      }
    })
      .then(() => {
        this.loading = false;
      });
  }
}
</script>

<style lang="stylus">
.card--flex-toolbar
  margin-top -88px
</style>
