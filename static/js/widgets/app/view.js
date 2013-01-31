define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!widgets/app/template',
    'widgets/signin/view',
    'widgets/signup/view',
    'bootstrap'
    //'bootstrap', 
    //'tooltip', 
    //'widgets/app/template'
  ],
  function( $, _, Backbone, Template, SignInView, SignUpView ){
    var AppView = Backbone.View.extend({
      el: '.context',
      manage: true,

      initialize: function(){
        this.render();
      },

      // Render document from script
      render: function(){
        var template = Template({});
        //$(this.el).html( template );
         
        this.$el.html( template );
        
        //$(".templates").appendTo( (new SignInView).render() );
        //$(".templates").appendTo( (new SignUpView).render() );
        
        //this.setViews({ ".templates": [ new SignInView(), new SignUpView() ] });

        return this;
      },
      
      
      views: {
        ".templates": [new SignInView(),new SignUpView()]
      },
      

      // Events for template
      events: {
        "click #sign_in": "signIn", 
        "click #sign_up": "signUp" 
      },

      // Events action
      signIn: function(e){
        e.preventDefault();
        //this.setView('.templates', new SignInView() );
        $('div#sign_in_form').modal( "show" );
      },

      signUp: function(e){
        e.preventDefault();
        $('div#sign_up_form').modal( "show");
      }

    });

    return AppView;
  }
);
