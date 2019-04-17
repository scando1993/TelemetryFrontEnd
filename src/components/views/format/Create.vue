<template>
  <section class="content">
    <div class="span12">
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir un nuevo formato</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="box-content table-responsive">
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form  method="POST" target="hiddenFrame" class="form-horizontal-create" id="profile-form">
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required v-model="dataPostDel.name" name="name" maxlength="50" >
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Código</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required v-model="dataPostDel.code" name="code" maxlength="50" >
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Local</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <select v-model="selectedLocal" required="required" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoL in Local">{{ datoL.name }}</option>
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
      removeDuplicates(arreglo) {
        var noDuplicate = arreglo.filter((objeto, index, self) =>
          index === self.findIndex((t) => (t.id === objeto.id
          )))
        return noDuplicate
      },
      async getListLocal(listF) {
        var local = []
        local = this.locals.dataGet[0].localeses
        console.log(local)
        console.log(listF) // contiene los formatos usados
        listF.forEach(function (m, indexM) {
          local.forEach(function (k, index) {
            console.log('lista local')
            console.log(m.nameLocal)
            console.log(k.name)
            console.log('lista local')
            if (k.id === m.idLocal) {
              console.log('cumple')
              console.log(local.splice(index, 1))
            } else { }
          })
        })
        this.Local = local
      },
      save() {
        if (this.dataPostDel.name.trim() !== '' && this.dataPostDel.code.trim() !== '') {
          var idLocal = api.search(this.locals.dataGet[0].localeses, 'name', this.selectedLocal).id
          this.dataPostDel.name = this.dataPostDel.name.trim()
          this.dataPostDel.code = this.dataPostDel.code.trim()
          api.post(this.apiBack, this.$data)
          var head = '/localeses/' + idLocal
          setTimeout(e => {
            console.log(this.dataRespond[0])
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/locales', head)
            this.$router.push(this.page)
          }, 1200)
        }
      }
    },
    data() {
      return {
        page: '/format',
        apiBack: '/formatoes',
        apiBackGetFormats: '/getFormatoes',
        apiBackLocals: '/localeses',
        selectedLocal: '',
        dataRespond: [],
        getFormat: [],
        Local: [],
        formats: {
          error: '',
          dataGet: [
            {
              formatoes: [{
                name: '',
                code: ''
              }]
            }]
        },
        locals: {
          error: '',
          dataGet: [
            {
              localeses: [{
                name: ''
              }]
            }]
        },
        dataPostDel: { // este es basicamente un JSON
          name: '',
          code: ''
        }
      }
    },
    beforeMount() {
      api.getAll(this.apiBackLocals, this.locals)
      api.getAll(this.apiBackGetFormats, this.getFormat)
    },
    mounted() {
      api.getAll(this.apiBackLocals, this.locals)
      setTimeout(e => {
        api.getAll(this.apiBackGetFormats, this.getFormat)
        console.log(this.getFormat.dataGet)
        this.getListLocal(this.getFormat.dataGet)
      }, 500)
    }
  }
</script>
