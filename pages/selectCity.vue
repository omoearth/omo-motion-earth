<template>
  <div>
    <OMapLeaflet :data="leaflet.data" />
    <section class="container section">
      <p class="content">
        <b>Selected:</b> {{ selected }}
      </p>
      <b-field>
        <b-autocomplete
          v-model="name"
          size="is-large"
          rounded
          class="is-large"
          :data="filteredDataArray"
          placeholder="change hometown, f.e. Berlin, Paris, Prag etc"
          icon="magnify"
          @select="option => selected = option"
        >
          <template slot="empty">
            No results found
          </template>
        </b-autocomplete>
      </b-field>
    </section>
  </div>
</template>

<script>
import OMapLeaflet from '~/components/OMapLeaflet.vue'

export default {
  components: {
    OMapLeaflet
  },
  data() {
    return {
      leaflet: {
        data: {
          zoom: 10,
          location: [48.137154, 11.576124],
          center: [48.137154, 11.576124]
        }
      },
      data: [
        'Munich',
        'London',
        'Berlin',
        'Paris'
      ],
      name: '',
      selected: 'Munich'
    }
  },
  created() {
    this.$store.commit('setActions', [
      {
        name: 'next',
        link: '/selectOffer',
        color: 'is-primary'
      }
    ])
  },
  middleware: ['authentication'],
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    }
  }
}

</script>
