<template>
  <section class="content">
    <div class="span12">
      <div class="row center-block">
        <div class="col-md-15">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir nuevo Furgón</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="box-content">
                <form action="/create" method="POST" class="form-horizontal" id="profile-form">

                  <div class="form-group">
                    <label class="col-sm-6 control-label">No.Furgón</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" class="form-control" name="name" v-model="dataPostDel.numFurgon" id="name_store" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-6  control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" name="name" v-model="dataPostDel.name" id="name_store" value="">
                    </div>
                    
                  </div>
                  <div class="form-group">
                    <label class="col-sm-offset-3 control-label">Seleccione las Ubicaciones</label>
                    <br />
                  </div>
                    <div id="checkboxUbiCreate" class="form-group">
                      <ul>
                        <li v-for="datoL, indexUb in dataGet" class="col-sm-3  controls">
                          <input type="checkbox" :value="datoL.id" :id="datoL.id" v-model="checkedNames" @click="check($event)">
                          <label>{{datoL.zone}}--{{datoL.city}}</label>
                        </li>
                      </ul>
                    </div>
                    <!-- Submit and cancel -->
                    <div class="form-group">
                      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                        <router-link class="pageLink" to="/boxcar">
                          <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                          <a href="/boxcar" type="button" class="btn">Cancelar</a>
                          </router-link>
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
import { setTimeout } from 'timers'
  export default {
    methods: {
      check: function (e) {
        if (e.target.checked) {
          console.log(e.target.value)
        }
      },
      updateData(newData) {
        this.error = newData.error
        this.dataPostDel = newData.dataPostDel
      },
      get() {
        api.getAll(this.apiBack, this.$data)
      },
      resto() {
        console.log('Ya en resto')
        console.log(this.dataRespond)
        var idFurgon = this.dataRespond.id
        console.log('.....en checknames')
        console.log(this.checkedNames)
        var errCode = ''
        this.checkedNames.forEach(element => {
          console.log(this.apiBackUbicationBoxcar + '/' + element + '/' + idFurgon)
          api.postEmpty(this.apiBackUbicationBoxcar + '/' + element + '/' + idFurgon, errCode)
          console.log(errCode)
        })
      },
      getBodega() {
        api.getAll(this.apiBack, this.furgon)
      },
      save() {
        console.log(this.dataPostDel.numFurgon + '----' + this.dataPostDel.name)
        this.dataPostDel.numFurgon = Number(this.dataPostDel.numFurgon)
        // se obtienne los ids de las ubicaciones
        // api.getAll(this.apiBack, this.$data)
        console.log('aqui checkbox--------------------------------------------------------')
        console.log(this.checkedNames)
        console.log('fin check--------------------------------------------------------')
        api.post(this.apiBack, this.$data)
        console.log(this.dataGet)
        console.log('fin dataget--------------------------------------------------------')
        console.log(this.dataPostDel)
        console.log('fin datapost--------------------------------------------------------')
        // setTimeout(this.getBodega, 500)
        setTimeout(this.resto, 3000)
      }
    },
    data() {
      return {
        el: '#checkboxUbiCreate',
        apiBack: '/api/furgon',
        apiBackUbication: '/api/ubicacion',
        apiBackUbicationBoxcar: '/api/ubicacionFurgon',
        error: '',
        checkedNames: [],
        furgon: {
          error: '',
          dataGet: []
        },
        dataGet: [],
        dataPostDel: { // este es basicamente un JSON
          name: '',
          numFurgon: 0
        },
        dataRespond: []
      }
    },
    mounted() {
      // se obtiene las ubicaciones
      api.getAll(this.apiBackUbication, this.$data)
    }
  }
</script>
