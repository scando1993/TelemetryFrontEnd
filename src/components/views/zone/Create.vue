<template>
  <section class="content">
    <div class="span12">
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir zona</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="box-content table-responsive">
                <form action="validar()" method="POST" class="form-horizontal-create" id="profile-form">

                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required v-model="dataPostDel.name" id="name_zone" maxlength="100" value="">
                    </div>
                  </div>                  
                  <div class="form-group">
                    <label class="col-sm-5 control-label">Seleccione la(s) Provincia(s)</label>
                    <ul id="checkboxZone" class="GroupCheckboxCreate">
                      <li v-for="datoL, indexU in province.dataGet" class="col-sm-12 controls">
                        <input type="checkbox" :value="datoL.id" :id="datoL.id" required v-model="checkedNames" @click="check($event)">
                        <label>{{datoL.name}}</label>
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Submit and cancel -->
                  <div class="form-group">
                    <div class="SaveCancel">
                      <router-link class="pageLink" to="/zone"><br/>
                        <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                        <a href="/zone" type="button" class="btn">Cancelar</a>
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
    mounted() {
      api.getAll(this.apiBackProvince, this.province)
    },
    methods: {
      check: function (e) {
        if (e.target.checked) {
          console.log(e.target.value)
        }
      },
      save() {
        var provinces = ''
        for (var i = 0; i < this.checkedNames.length; i++) {
          if (i === 0) {
            provinces = provinces + this.checkedNames[i]
          } else { provinces = provinces + ',' + this.checkedNames[i] }
        }
        api.post(this.apiBack + '/' + provinces, this.$data)
      }
    },
    data() {
      return {
        el: '#checkboxZone',
        checkedNames: [],
        apiBack: '/zona',
        apiBackProvince: '/provincia',
        error: '',
        dataGet: [],
        province: {
          error: '',
          dataGet: []
        },
        dataPostDel: { // este es basicamente un JSON
          name: ''
        }
      }
    }
  }
</script>
