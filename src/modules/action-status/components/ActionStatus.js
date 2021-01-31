import { mapGetters } from 'vuex'

export default {
  props: {
    scope: {
      type: Object,
      required: true
    }
  },
  computed: mapGetters('actionStatus', {
    statuses: 'statuses'
  }),
  render() {
    const statuses = this.statuses(this.scope)
    return this.$scopedSlots.default({
      ...statuses
    })
  }
}
