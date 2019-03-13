<template>
  <section class="content ">
  <Timeline :timeline-items="timelineItems"
            :message-when-no-items="messageWhenNoItems" />
    </section>
</template>

<script>
  import Timeline from 'timeline-vuejs'

  export default {
    components: {
      Timeline
    },
    data: () => ({
      messageWhenNoItems: 'There are not items',
      dataTimeline: [
        {
          from: new Date(2018, 7),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        },
        {
          from: new Date(2016, 1),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        },
        {
          from: new Date(2016, 6),
          title: 'Name',
          description:
            'Lorem ipsum dolor vitae magnam voluptate fea tempore beatae unde.'
        },
        {
          from: new Date(2012, 1),
          title: 'Name',
          description:
            'Lorem ipsum dognam voluptate accusantisequuntur reprehenderit cum a tempore beatae unde.'
        }
      ]
    })
  }
</script>
<style>

  /* Using the bootstrap style, but overriding the font to not draw in
     the Glyphicons Halflings font as an additional requirement for sorting icons.

     An alternative to the solution active below is to use the jquery style
     which uses images, but the color on the images does not match adminlte.

  @import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
  */

  @import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

  table.dataTable thead .sorting:after,
  table.dataTable thead .sorting_asc:after,
  table.dataTable thead .sorting_desc:after {
    font-family: 'FontAwesome';
  }

  table.dataTable thead .sorting:after {
    content: '\f0dc';
  }

  table.dataTable thead .sorting_asc:after {
    content: '\f0dd';
  }

  table.dataTable thead .sorting_desc:after {
    content: '\f0de';
  }
</style>
