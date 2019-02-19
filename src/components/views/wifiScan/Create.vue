<template>
  <section class="content">
    <div class="span12"> 
        <div class="row center-block">
          <div class="col-md-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Add new</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <div class="box-content">
                  <form action="/create" method="POST" class="form-horizontal" id="profile-form">
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">ID</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="number" class="form-control" placeholder="ID of element" name="id" v-model="id" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">MAC</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="text" class="form-control" placeholder="ID of element" name="id" v-model="MAC" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">RSSI</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="number" class="form-control" placeholder="Name of element" name="name" v-model="RSSI" value="">
                      </div>
                    </div>
                    <!-- Submit and cancel -->
                    <div class="form-group">
                      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                        <router-link class="pageLink" to="/wifiScan">
                          <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Save</button>
                          <a href="/wifiScan" type="button" class="btn">Cancel</a>
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
  import jsonWifi from './../wifiScan/data.json'
  export default {
    data() {
      return {
        myJson: jsonWifi
      }
    },
    methods: {
      save: function () {
        console.log(this.id + ' ' + this.nombre + ' ' + this.track)
      }
    }
  }
</script>
