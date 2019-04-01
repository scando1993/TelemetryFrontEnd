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
                      <input type="text" required class="form-control" v-model="dataPostDel.name" name="ruta" maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Family</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" required class="form-control" v-model="dataPostDel.family" name="family" maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Zona</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedZone" required v-on:click="loadProvinces" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoB in zone.dataGet">{{datoB.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Provincia</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedProvince" required v-on:click="loadCities" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoP in province.listProvinces">{{datoP.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Ciudad</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedCity" required class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoC in city.listCities">{{datoC.name}}</option>
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
      updateData(newData) {
        this.error = newData.error
        this.dataPostDel = newData.dataPostDel
      },
      save() {
        if (this.dataPostDel.name.trim() !== '' && this.dataPostDel.numLoc.toString() !== '' && this.dataPostDel.family.trim() !== '' && this.dataPostDel.length.toString() !== '' && this.dataPostDel.latitude.toString() !== '') {
          var id = api.search(this.city.listCities, 'name', this.selectedCity).id
          this.dataPostDel.name = this.dataPostDel.name.trim()
          this.dataPostDel.family = this.dataPostDel.family.trim()
          api.post(this.apiBack + '/' + id, this.$data)
          this.$router.push(this.page)
        }
      },
      loadProvinces() {
        this.province.listProvinces = api.search(this.zone.dataGet, 'name', this.selectedZone).provincias
      },
      loadCities() {
        this.city.listCities = api.search(this.province.listProvinces, 'name', this.selectedProvince).ciudades
      }
    },
    data() {
      return {
        apiBack: '/locales',
        apiBackZone: '/zona',
        error: '',
        selectedZone: '',
        selectedProvince: '',
        selectedCity: '',
        page: '/locals',
        zone: {
          error: '',
          dataGet: []
        },
        province: {
          error: '',
          dataGet: [],
          listProvinces: []
        },
        city: {
          error: '',
          dataGet: [],
          listCities: []
        },
        dataGet: [],
        dataPostDel: { // este es basicamente un JSON
          numLoc: 0,
          name: '',
          family: '',
          length: 0,
          latitude: 0
        }
      }
    },
    mounted() {
      api.getAll(this.apiBackZone, this.zone)
    }
  }
</script>
