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
    <OFooter :action="footer.action" />
  </div>
</template>

<script>
import OMapLeaflet from '~/components/OMapLeaflet.vue'
import OFooter from '@/layouts/OFooter.vue'

export default {
  components: {
    OMapLeaflet,
    OFooter
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
      footer: {
        action: {
          name: 'Vote for {Munich}',
          link: '/selectOffer',
          color: 'is-primary'
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
