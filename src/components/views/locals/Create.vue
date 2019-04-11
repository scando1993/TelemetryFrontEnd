<template>
  <section class="content">
    <div class="span12">
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir un nuevo Local</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="box-content-create table-responsive">
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form action="/create" method="POST" target="hiddenFrame" class="form-horizontal-create" id="profile-form">
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">No.Local</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" required class="form-control" v-model="dataPostDel.numLoc" name="name" maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" required class="form-control" v-model="dataPostDel.name" name="name" maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Family</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" required class="form-control" v-model="dataPostDel.family" name="family" maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-4 control-label">MACs(separadas por comas)</label>
                    <div class="col-sm-9 controls">
                      <input type="text" class="form-control"  v-model="dataPostDel.macs" name="macs" id="macs" maxlength="10000" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Zona</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedZone" required v-on:click="loadProvinces" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoB in zones.dataGet[0].zonas">{{datoB.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Provincia</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedProvince" required v-on:click="loadCities" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoP in provinces.dataGet[0].provincias">{{datoP.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Ciudad</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedCity" required class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoC in cities.dataGet[0].ciudads">{{datoC.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Longitud</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" required class="form-control" v-model="dataPostDel.length" name="name" maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Latitud</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" required class="form-control" v-model="dataPostDel.latitude" name="ruta" maxlength="50" value="">
                    </div>
                  </div>

                  <!-- Submit and cancel -->
                  <div class="form-group">
                    <div class="SaveCancel">
                      <p>
                        <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                        <button class="btn btn-default" v-on:click="cancel">Cancelar </button>
                      </p>
                    </div>
                  </div>
                  <!--End Submit and cancel-->

                </form>
              </div>
              <!-- /.box-body -->
            </div>
            <!--End Box-->
          </div>
        </div>

      </div>
    </div>
    <!--</div>-->
    <!--End content-->
  </section>
</template>
<script>
  import api from '@/api/goApi.js'
  export default {
    methods: {
      cancel() {
        this.$router.push(this.page)
      },
      save() {
        if (this.dataPostDel.name.trim() !== '') {
          var idCity = api.search(this.cities.dataGet[0].ciudads, 'name', this.selectedCity).id
          this.dataPostDel.name = this.dataPostDel.name.trim()
          this.dataPostDel.family = this.dataPostDel.family.trim()
          api.post(this.apiBack, this.$data)
          var head = '/ciudads/' + idCity
          setTimeout(e => {
            console.log(this.dataRespond[0])
            console.log(this.apiBack + '/' + this.dataRespond[0] + '/ciudad')
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/ciudad', head)
            this.$router.push(this.page)
          }, 1100)
        }
      },
      loadProvinces() {
        var url = api.search(this.zones.dataGet[0].zonas, 'name', this.selectedZone)._links.provincias.href
        api.getGeneral(url, this.provinces)
      },
      loadCities() {
        var url = api.search(this.provinces.dataGet[0].provincias, 'name', this.selectedProvince)._links.ciudades.href
        api.getGeneral(url, this.cities)
      }
    },
    data() {
      return {
        apiBack: '/localeses',
        apiBackZone: '/zonas',
        apiBackCity: '/ciudads',
        apiBackProvince: '/provincias',
        selectedZone: '',
        selectedProvince: '',
        selectedCity: '',
        page: '/locals',
        dataRespond: [],
        zones: {
          dataGet: [
            {
              zone: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        provinces: {
          dataGet: [
            {
              provinces: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        cities: {
          dataGet: [
            {
              cities: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        dataPostDel: { // este es basicamente un JSON
          numLoc: 0,
          name: '',
          family: '',
          length: 0,
          latitude: 0,
          macs: ''
        }
      }
    },
    mounted() {
      api.getAll(this.apiBackZone, this.zones)
    }
  }
</script>
