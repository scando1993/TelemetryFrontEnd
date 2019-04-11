<template>
  <section class="content">
    <div class="span12"> 
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir un nuevo Dispositivo</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body ">
              <div class="box-content-create table-responsive">
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form id="create-store" method="post" class="form-horizontal-create" target="hiddenFrame">

                  <div class="form-group">
                    <label class="col-sm-3 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required name="name" v-model="dataPostDel.name" id="name_store" maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Familia</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required name="family" v-model="dataPostDel.family" id="name_store" maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Grupos</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <select v-model="selectedGroup" required class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoB in group.dataGet[0].groups">{{datoB.name}}</option>
                      </select>
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
  //  import devFun from './deviceFunctions'
  export default {
    methods: {
      cancel() {
        this.$router.push(this.page)
      },
      save: function() {
        if (this.dataPostDel.name.trim() !== '' && this.dataPostDel.family.trim() !== '' && this.selectedGroup !== '') {
          var idGroup = api.search(this.group.dataGet[0].groups, 'name', this.selectedGroup).id
          this.dataPostDel.name = this.dataPostDel.name.trim()
          this.dataPostDel.family = this.dataPostDel.family.trim()
          api.post(this.apiBack, this.$data)
          console.log('+++++datarespond++++++++')
          console.log(this.dataRespond)
          console.log('+++++datarespond++++++++')
          setTimeout(e => {
            var head = '/groups/' + idGroup
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/groupFamily', head)
            setTimeout(e => {
              var headStatus = 'devices/' + this.dataRespond[0]
              api.post(this.apiBackStatus, this.$data)
              setTimeout(e => {
                api.postWithHeader(this.apiBackStatus + '/' + this.dataRespond[0] + '/device', headStatus)
                this.$router.push(this.page)
              }, 1000)
            }, 1400)
          }, 1909)
        }
      }
    },
    data() {
      return {
        apiBack: '/devices',
        apiBackGroup: '/groups',
        apiBackStatus: '/statuses',
        error: '',
        selectedGroup: '',
        page: '/devices',
        dataGet: [],
        dataRespond: [],
        dataPostDel: { // este es basicamente un JSON
          name: '',
          family: '',
          description: 'Registrado'
        },
        group: {
          dataGet: [
            {
              groups: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        device: {
          dataGet: [
            {
              devices: [{
                id: '',
                name: '',
                family: ''
              }]
            }
          ],
          error: ''
        }
      }
    },
    mounted() {
      api.getAll(this.apiBackGroup, this.group)
      api.getAll(this.apiBack, this.device)
    }
  }
</script>
