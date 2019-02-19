<template>
  <section class="content">
    <div class="span12"> 
        <div class="row center-block">
          <div class="col-md-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Add new element</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <div class="box-content">
                  <form action="/create" method="POST" class="form-horizontal" id="profile-form">
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">ID</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="number" class="form-control" placeholder="ID of element" name="id" v-model="dataPostDel.id" id="id_store" maxlength="30" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="text" class="form-control" placeholder="Name of element" name="name" v-model="dataPostDel.nombre" id="name_store" maxlength="50" value="">
                      </div>
                    </div>
                    <!-- Submit and cancel -->
                    <div class="form-group">
                      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                        <router-link class="pageLink" to="/store">
                          <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Save</button>
                          <a href="/store" type="button" class="btn">Cancel</a>
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
    updateData(newData) {
      this.error = newData.error
      this.dataPostDel = newData.dataPostDel
    },
    save: function () {
      // console.log(this.id + ' ' + this.nombre)
      console.log(this.dataPostDel.id + '----' + this.dataPostDel.nombre)
      this.updateData(api.post('/postBodega', this.data()))
      /* Aun falta de modificar
      fs = require('fs');
      var m = JSON.parse(fs.readFileSync('data.json').toString());
      m.push(this.dataPostDel)
      fs.writeFile('data.json', JSON.stringify(m));
      */
    }
  },
  data() {
    return {
      error: '',
      dataPostDel: { // este es basicamente un JSON
        id: null,
        nombre: ''
      }
    }
  }
}
</script>
