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
            <div class="box-body ">
              <div class="box-content-create table-responsive">
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form id="create-store" method="post" class="form-horizontal-create" target="hiddenFrame">
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required name="name" v-model="dataPostDel.name" id="name_zone" maxlength="100" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-5 control-label">Seleccione la(s) Provincia(s)</label>
                    <ul id="checkboxZone" class="GroupCheckboxCreate">
                      <li v-for="datoL, indexU in province.dataGet[0].provincias" class="col-sm-12 controls">
                        <input type="checkbox" :value="datoL.id" :id="datoL.id" v-model="checkedNames" @click="check($event)">
                        <label>{{datoL.name}}</label>
                      </li>
                    </ul>
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
      check: function (e) {
        if (e.target.checked) {
          console.log(e.target.value)
        }
      },
      cancel() {
        this.$router.push(this.page)
      },
      save() {
        if (this.dataPostDel.name.trim() !== '' && this.checkedNames.length !== 0) {
          this.dataPostDel.name = this.dataPostDel.name.trim()
          api.post(this.apiBack, this.$data)
          setTimeout(e => {
            for (var i = 0; i < this.checkedNames.length; i++) {
              var head = '/zonas/' + this.dataRespond[0]
              console.log(head)
              console.log(this.checkedNames[i])
              api.postWithHeader(this.apiBackProvince + '/' + this.checkedNames[i] + '/zona', head)
            }
            this.$router.push(this.page)
          }, 1300)
        }
      }
    },
    data() {
      return {
        checkedNames: [],
        apiBack: '/zonas',
        apiBackProvince: '/provincias',
        page: '/zone',
        error: '',
        dataGet: [],
        dataRespond: [],
        province: {
          dataGet: [
            {
              provincias: [{
                id: '',
                name: '',
                _links: {}
              }]
            }
          ],
          error: ''
        },
        dataPostDel: { // este es basicamente un JSON
          name: ''
        }
      }
    },
    mounted() {
      api.getAll(this.apiBackProvince, this.province)
    }
  }
</script>
