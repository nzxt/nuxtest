<template>
  <v-layout class="page">
    <v-flex text-xs-center>
      <img
        src="/typescript.png"
        alt="TypeScipt"
        class="my-5"
      >
      <blockquote class="blockquote">
        &#8220;{{ quote }}&#8221;
        <footer>
          <small>
            <em>&mdash; {{ author }}</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class InspirePage extends Vue {
    quote: String = 'First, move to strong typing. Then, write the code w/o problems.'
    author: String = 'TypeScript'
  }
</script>
