<template>
  <section class="content">
    <div class="span12">
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir nueva ubicación</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="box-content">
                <form action="/create" method="POST" class="form-horizontal" id="profile-form">

                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Zona</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" v-model="dataPostDel.zone" id="name_store" maxlength="100" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Regional</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" v-model="dataPostDel.regional" id="name_store" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Provincia</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" v-model="dataPostDel.province" id="name_store" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Ciudad</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" v-model="dataPostDel.city" id="name_store" maxlength="100" value="">
                    </div>
                  </div>
                  <!--
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Formatos</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <select v-model="selectedFormat">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoF in myJson4 ">{{ datoF.nombre }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Locales</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <select v-model="selectedLocal">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoL in myJson3 ">{{ datoL.nombre }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Bodegas</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <select v-model="selectedStore">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoB in myJson2 ">{{ datoB.nombre }}</option>
                      </select>
                    </div>
                  </div>-->
                  <!-- Submit and cancel -->
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                      <router-link class="pageLink" to="/ubication">
                        <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                        <a href="/ubication" type="button" class="btn">Cancelar</a>
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
      save() {
        api.post(this.apiBack, this.$data)
      }
    },
    data() {
      return {
        apiBack: '/api/ubicacion',
        error: '',
        dataGet: [],
        dataPostDel: { // este es basicamente un JSON
          zone: '',
          regional: '',
          province: '',
          city: ''
        }
      }
    }
  }
</script>
