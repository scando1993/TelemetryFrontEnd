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
              <div class="box-content table-responsive">
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form  method="POST" class="form-horizontal-create " id="create-boxcar"  target="hiddenFrame">
                  <div class="form-group-boxcar">
                    <label class="col-sm-6 control-label">No.Furgón</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" class="form-control" required name="numFurgon" v-model="dataPostDel.numFurgon" id="numFurgon" />
                    </div>
                  </div>
                  <div class="form-group-boxcar">
                    <label class="col-sm-6  control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required name="name" v-model="dataPostDel.name" id="name" />
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
          this.dataPostDel.name = this.dataPostDel.name.trim()
          api.post(this.apiBack, this.$data)
          setTimeout(e => {
            this.$router.push(this.page)
          }, 700)
        }
      }
    },
    data() {
      return {
        apiBack: '/furgons',
        page: '/boxcar',
        dataRespond: [],
        dataPostDel: { // este es basicamente un JSON
          numFurgon: 0,
          name: ''
        }
      }
    },
    mounted() {
      api.getAll(this.apiBack, this.$data)
    }
  }
</script>
