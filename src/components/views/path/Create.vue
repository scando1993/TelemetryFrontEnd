<template>
  <section class="content">
    <div class="span12"> 
        <div class="row center-block">
          <div class="col-md-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Añadir una nueva ruta</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <div class="box-content">
                  <form action="/create" method="POST" class="form-horizontal" id="profile-form">

                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Furgón ID</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <select v-model="selectedFormat1">
                          <option disabled value="">Por favor seleccionar uno</option>
                          <option v-for="datoF in myJson2 ">{{ datoF.nombre }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Tracking ID</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <select v-model="selectedFormat2">
                          <option disabled value="">Por favor seleccionar uno</option>
                          <option v-for="datoT in myJson1 ">{{ datoT.location }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Seleccione la fecha de inicio</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="date" name="fechaInicio">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Seleccione la Hora de inicio</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="time" name="fechaInicio">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Seleccione la fecha Fin</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="date" name="fechaFin">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Seleccione la Hora de fin</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="time" name="fechaInicio">
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
  import jsonTrack from './../tracking/data.json'
  import jsonBoxcar from './../boxcar/data.json'
  export default {
    methods: {
      updateData(newData) {
        this.error = newData.error
        this.dataPostDel = newData.dataPostDel
      },
      save: function () {
        // console.log(this.id + ' ' + this.nombre)
        console.log(this.dataPostDel.id + '----' + this.dataPostDel.nombre)
        this.updateData(api.post('/postBodega', this.data()))
        /* Aun falta de modificar
         * fs = require('fs');
         * var m = JSON.parse(fs.readFileSync('data.json').toString());
         * m.push(this.dataPostDel)
         * fs.writeFile('data.json', JSON.stringify(m));
         * */
      }
    },
    data() {
      return {
        myJson1: jsonTrack,
        myJson2: jsonBoxcar,
        error: '',
        dataPostDel: { // este es basicamente un JSON
          id: null,
          nombre: ''
        }
      }
    }
  }
</script>
