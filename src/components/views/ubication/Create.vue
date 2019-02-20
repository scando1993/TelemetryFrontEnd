<template>
  <section class="content">
    <div class="span12"> 
        <div class="row center-block">
          <div class="col-md-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Add new ubication</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <div class="box-content">
                  <form action="/create" method="POST" class="form-horizontal" id="profile-form">
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">ID</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="number" class="form-control" v-model="idUbi" maxlength="30" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Zona</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="text" class="form-control"  v-model="zona" id="name_store" maxlength="100" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Regional</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="text" class="form-control"  v-model="regional" id="name_store" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Provincia</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="text" class="form-control"  v-model="provincia" id="name_store" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Ciudad</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="text" class="form-control"  v-model="ciudad" id="name_store" maxlength="100" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">FormatoID</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <select v-model="selectedFormat">
                          <option disabled value="">Please select one</option>
                          <option v-for="datoF in myJson4 ">{{ datoF.nombre }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">LocalesID</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <select v-model="selectedLocal">
                          <option disabled value="">Please select one</option>
                          <option v-for="datoL in myJson3 ">{{ datoL.nombre }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">BodegaID</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <select v-model="selectedStore">
                          <option disabled value="">Please select one</option>
                          <option v-for="datoB in myJson2 ">{{ datoB.nombre }}</option>
                        </select>
                      </div>
                    </div>
                    <!-- Submit and cancel -->
                    <div class="form-group">
                      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                        <router-link class="pageLink" to="/ubication">
                          <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Save</button>
                          <a href="/ubication" type="button" class="btn">Cancel</a>
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
  import jSon from './data.json'
  import jsonBodega from './../bodega/data.json'
  import jsonFormato from './../formato/data.json'
  import jsonLocales from './../locales/data.json'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  export default {
    data() {
      return {
        myJson: jSon,
        myJson2: jsonBodega,
        myJson3: jsonLocales,
        myJson4: jsonFormato
      }
    },
    methods: {
      save: function () {
        console.log(this.idUbi + ' ' + this.zona)
      }
    }
  }
</script>
