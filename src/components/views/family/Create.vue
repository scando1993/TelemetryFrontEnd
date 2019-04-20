<template>
  <section class="content">
    <div class="span12"> 
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir familia</h3>
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
                    <label class="col-sm-3 control-label">Grupo</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select v-model="selectedGroup" required  class="FormatSelect">
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
  export default {
    methods: {
      cancel() {
        this.$router.push(this.page)
      },
      async save() {
        this.dataPostDel.name = this.dataPostDel.name.trim()
        if (this.dataPostDel.name !== '') {
          var idGroup = api.search(this.group.dataGet[0].groups, 'name', this.selectedGroup).id
          await api.post(this.apiBack, this.$data)
          var head = '/groups/' + idGroup
          setTimeout(e => {
            console.log(this.dataRespond[0])
            console.log(this.apiBack + '/' + this.dataRespond[0] + '/groupFamily')
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/groupFamily', head)
            this.$router.push(this.page)
          }, 1100)
        }
      }
    },
    data() {
      return {
        apiBack: '/families',
        apiBackGroup: '/groups',
        page: '/family',
        selectedGroup: '',
        dataRespond: [],
        group: {
          dataGet: [
            {
              groups: [{
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
      api.getAll(this.apiBackGroup, this.group)
    }
  }
</script>
