import { Vue, Component } from 'vue-property-decorator'

@Component({
  fetch({ redirect }) {
    redirect('/typescript')
  }
})
export default class Index extends Vue {}
