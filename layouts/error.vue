<template v-cloak>
  <v-img
    contain
    height="450px"
    src="/nuxt.png"
    :position="'center center'"
    class="mt-5 errorPage"
  >
    <v-container mt-0 fill-height>
      <v-layout column align-center justify-center>
        <h1 class="errorCode">
          {{ error.statusCode }}
        </h1>
        <caption class="grey--text text--lighten-1">
          [{{ error.message }}]
        </caption>
        <br>
        <h1 v-if="error.statusCode === 404">
          Page not found
          <!-- Сторінка не знайдена -->
        </h1>
        <h1 v-else-if="error.statusCode === 401">
          Sign In?
          <!-- Не авторизовані? -->
        </h1>
        <h1 v-else>
          An error occured..
          <!-- Сталася помилка -->
        </h1>
        <nuxt-link class="mt-1" to="/" style="text-decoration-line:none;">
          <v-icon class="mdi-18px">
            mdi-reply
          </v-icon>
          Back to home page?
          <!-- Повернутись на головну сторінку -->
        </nuxt-link>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      gradient: 'to top right, rgba(128, 128, 128, .9), rgba(228, 228, 228, 1)'
    };
  }
};
</script>

<style>
.errorPage .v-image__image {
  opacity: .09;
}

.errorPage .errorCode {
  font-size: 750%;
  color: rgb(182, 182, 182)
}
</style>
