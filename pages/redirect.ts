import { Vue, Component } from 'vue-property-decorator'

@Component({
  fetch({ app, redirect }) {
    const tsLocalePath = app.localePath('typescript')
    redirect('301', tsLocalePath)
  }
})
export default class TypescriptRedirect extends Vue {}
