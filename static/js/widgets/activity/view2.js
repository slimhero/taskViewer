define([
    'backbone',
    'hbs!widgets/dataTemplate/template',
    'hbs!widgets/activity/template',
    'moment',
    'assets/calendar-graph',
    'message',
    'lib/bootstrap-transition'
  ],
  function( Backbone, ParentTmpl, Template ){
    var activityView = Backbone.View.extend({
      //el: "#activity_section",
      tagName: "section",
      id: "activity",
      //idData: ( id + "Data" ),
      manage: true,
      template: Template,
      initialize: function(){
        this.idData = ( this.id + "Data" );
        this.render();
          $(function(){
          var obj = $.activityCalendar({ place: ".js-calendar-graph", format: "YYYYMMDD" });
          //var obj = new this.$el.activityCalendar({ place: ".js-calendar-graph", format: "YYYYMMDD" });
          obj.table();
          obj.run();
          });

      },
      getContext: function(){
        //return ParentTmpl({ id:"activity", name:"Activity", context: this.template({}) });
        var tmpl = ParentTmpl({ id:"activity", name:"Activity", idData: this.idData });        
        tmpl = $( tmpl );
        var p = this.template({});
        tmpl.find("#tmpcontext").replaceWith( this.template({}) );
        m = tmpl;
        /*
        z = "";
        var a_html = $(m).children();
        for( var i=0; i< a_html.length; i++ ){
          z = z + a_html[c].outerHTML;
        };*/
        return tmpl;
        //return $( tmpl ).find("#tmpcontext").replaceWith( this.template({}) );
      },

      render: function(){
          this.$el.append( this.getContext()  );

          

          return this;
      }
    
    });
    return activityView;
  }
);
