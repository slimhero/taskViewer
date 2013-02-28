define([
    'backbone',
    'hbs!widgets/protoPane/template',
    'lib/bootstrap-transition'
  ],
  function( Backbone, protoTemplate ){
    var protoPaneView = Backbone.View.extend({
      //el: "#activity_section",
      //tagName: "section",
      //id: "activity",
      //idData: ( id + "Data" ),
      name: "protoPaneView",
      manage: true,
      //template: Template,
      protoTemplate: protoTemplate,
      protoRefreshVisible: true,
      protoCloseVisible: true,
      templateOptions: {},
/*
      initialize: function(){
        //this.render();
        this.add(  );
      },
*/
      makeIdData: function(){
        this.idData =  ( this.id + "Data" );
      },

      // Make template which will be inside of this wrapper
      makeTemplate: function(){
        return this.template( this.templateOptions );
      },

      // Delete element if it doesn't need
      makeButtons: function( t ){
        // Delete all buttons
        if( !this.protoRefreshVisible && !this.protoCloseVisible ){
           t.find("#header-group").remove();
        }
        else{
          // Delete refresh buttons
          if( !this.protoRefreshVisible ){
            t.find("#header-group button[data-toggle='refresh']").remove();
          };
          // Delete close buttons
          if( !this.protoCloseVisible ){
            $("#header-group button[data-toggle='close']").remove();
          };
        };

        return t;
      },

      events: {
        "click button[data-toggle='refresh']": "refresh",
        "click button[data-toggle='close']": "close",
      },

      onRefresh: function(){
        alert( "Refresh clicked" );
      },

      onClose: function(){
        alert( "Close clicked" );
      },

      refresh: function(){
        this.onRefresh();
        return false;
      },

      close: function(){
        this.onClose();
        return false;
      },

      pageLoad: function(data){
        alert( "asd pageLoad" );
      },

      // Create template and template prototype
      wrapContext: function(){
        //this.bind('page:load', this.pageLoad, this);
        //this.trigger('page:load');
        // Trying to create idData
        this.makeIdData();
        // Working with prototype
        var tmpl = this.protoTemplate({ id:this.id, name:this.name, idData: this.idData }); 
        // Join proto and template       
        tmpl = $( tmpl );
        tmpl = this.makeButtons( tmpl );
        tmpl.find("#tmpcontext").replaceWith( this.makeTemplate() );
        
        //tmpl.find("button[data-toggle='refresh']").click( this.refresh );

        return tmpl;
      },

      // Add full template to this.$el - into the view
      add: function(){
        this.$el.append( this.wrapContext()  );
        return this;
      },
    
    });
    //protoPaneView.trigger('page:load');

    return protoPaneView;
  }
);
