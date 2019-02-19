<template>
  <div>
    <!--<div>
    <h2>Search and add a pin</h2>
    <label>
      <gmap-autocomplete
        @place_changed="setPlace">
      </gmap-autocomplete>
      <button @click="addMarker">Add</button>
    </label>
    <br/>

  </div>
  <br/>-->
    <gmap-map :center="center"
              :zoom="12"
              style="width:100%;  height: 400px;">
      <gmap-marker :key="index"
                   v-for="(m, index) in markers"
                   :position="m.position"
                   @click="center=m.position" />
    </gmap-map>
  </div>
</template>

<script>
  import jSon from './../views/locales/data.json'
  export default {
    name: 'GoogleMap',
    data() {
      return {
        myJson: jSon,
        // default to Ecuador - Quito to keep it simple
        // change this to whatever makes sense
        center: { lat: -2.1862504, lng: -79.9815 },
        markers: [],
        places: [],
        currentPlace: null
      }
    },
    mounted() {
      this.addMarker()
      this.geolocate()
    },
    methods: {
      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place
      },
      addMarker() {
        for (let p = 0; p < jSon.length; p++) {
          console.log(parseFloat(jSon[p].longitud) + ' -- ' + parseFloat(jSon[p].latitud))
          const marker = {
            lat: parseFloat(jSon[p].latitud),
            lng: parseFloat(jSon[p].longitud)
          }
          this.markers.push({ position: marker })
          this.places.push(this.currentPlace)
          this.center = marker
          this.currentPlace = null
        }
      },
      geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      }
    }
  }
</script>
