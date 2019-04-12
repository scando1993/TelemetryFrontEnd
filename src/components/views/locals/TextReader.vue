<template>
  <div>
    <label class="col-sm-3 col-lg-2 control-label">Seleccione un archivo</label>
    <input type="file" @change="loadTextFromFile">
  </div>
</template>

<script>
export default {
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()

      reader.onload = e => this.$emit('load', e.target.result)
      reader.readAsText(file)
    }
  }
}
</script>
