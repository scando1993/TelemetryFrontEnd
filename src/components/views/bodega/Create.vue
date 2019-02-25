<template>
  <section class="content">
    <div class="span12"> 
        <div class="row center-block">
          <div class="col-md-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Añadir nuevo elemento</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <div class="box-content">
                  <form method="POST" class="form-horizontal" id="profile-form">

                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="text" class="form-control" name="name" v-model="dataPostDel.nombre" id="name_store" maxlength="50" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Ubicación</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <select v-model="selectedLocal">
                          <option disabled value="">Por favor seleccionar uno</option>
                          <option v-for="datoB in myJson3 ">{{ datoB.zona }}</option>
                        </select>
                      </div>
                    </div>
                    <!-- Submit and cancel -->
                    <div class="form-group">
                      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                        <router-link class="pageLink" to="/store">
                          <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                          <a href="/store" type="button" class="btn">Cancelar </a>
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
  import jsonUbiBox from './../ubication/data.json'

  export default {
    methods: {
      updateData(newData) {
        this.error = newData.error
        this.dataPostDel = newData.dataPostDel
      },
      save: function () {
        console.log(this.dataPostDel.nombre)
        api.post('/api/bodega', this.$data)
      }
    },
    data() {
      return {
        myJson3: jsonUbiBox,
        error: '',
        dataPostDel: { // este es basicamente un JSON
          id: null,
          nombre: ''
        }
      }
    }
  }
</script>
