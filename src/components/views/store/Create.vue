<template>
  <section class="content">
    <div class="span12"> 
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir nueva bodega</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body ">
              <div class="box-content-create table-responsive">
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form id="create-store"  method="post" class="form-horizontal-create" target="hiddenFrame" >
                  
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required name="name" v-model="dataPostDel.name" id="name_store" maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Zona</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedZone" v-on:click="loadProvinces" class="FormatSelect" required="required">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoB in zone.dataGet">{{datoB.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Provincia</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedProvince" v-on:click="loadCities" class="FormatSelect" required="required">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoP in province.listProvinces">{{datoP.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Ciudad</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedCity" class="FormatSelect" required>
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoC in city.listCities">{{datoC.name}}</option>
                      </select>
                    </div>
                  </div>
                  <!-- Submit and cancel -->
                  <div class="form-group">
                    <div class="SaveCancel">
                      <p>
                        <button type="submit" class="btn btn-primary" v-on:click="save" ><i class="fa fa-ok"></i> Guardar</button>
                        <button class="btn btn-default" v-on:click="cancel" >Cancelar </button>
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
          var id = api.search(this.city.listCities, 'name', this.selectedCity).id
          this.dataPostDel.name = this.dataPostDel.name.trim()
          api.post(this.apiBack + '/' + id, this.$data)
          this.$router.push(this.page)
        }
      },
      loadProvinces() {
        api.getGeneral(this.apiBackProvince, this.provinces)
        //  this.province.listProvinces = api.search(this.zone.dataGet, 'name', this.selectedZone).provincias
      },
      loadCities() {
        this.city.listCities = api.search(this.province.listProvinces, 'name', this.selectedProvince).ciudades
      }
    },
    data() {
      return {
        apiBack: '/bodega',
        apiBackZone: '/zonas',
        apiBackCity: '/ciudads',
        apiBackProvince: '/provincias',
        error: '',
        selectedZone: '',
        selectedProvince: '',
        selectedCity: '',
        page: '/store',
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
          name: ''
        }
      }
    },
    mounted() {
      api.getAll(this.apiBackCity, this.zone)
    }
  }
</script>
