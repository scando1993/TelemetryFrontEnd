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
      save() {
        console.log(this.dataPostDel.numFurgon + '----' + this.dataPostDel.name)
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
        api.getAll(this.apiBack, this.furgon)
        console.log(this.furgon)
        console.log('fin furgon--------------------------------------------------------')
        console.log(this.furgon.dataGet)
        console.log('fin dataget furgon------------------------------------------__---------------')
        console.log(this.furgon.dataGet.length)
        console.log('se mostro el array de dataget de furgon--------------------------------------------------------')
        console.log(this.furgon.dataGet[0]['numFurgon'])
        console.log('pos 0 de dataget furgon---------------------**-----------------------------------')
        for (var i = 0; i < this.furgon.dataGet.length; i++) {
          console.log(this.furgon.dataGet[i])
          if (this.furgon.dataGet[i]['numFurgon'] === this.dataPostDel.numFurgon) {
            console.log('lllllllllllllllllllllllllllllllllll-')
          }
        }
        console.log('fin var k--------------------------------------------------------')
        this.checkedNames.forEach(function (e) {
          console.log(e)
        })
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
        }
      }
    },
    mounted() {
      // se obtiene las ubicaciones
      api.getAll(this.apiBackUbication, this.$data)
    }
  }
</script>
