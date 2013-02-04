// Require.js allows us to configure shortcut alias
require.config({
  baseUrl: '/js/',
  //urlArgs: "addingsfornotcache=" +  (new Date()).getTime(),
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
  shim: {
    bootstrap: {
      deps: [
        'jquery'
      ],
      exports: '_'
    },
    tooltip: {
      deps:[ 'bootstrap' ]
    },
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		},
    backboneLayoutManager: {
      deps: ['backbone']
    },
    handlebars:{
      exports: 'Handlebars'
    },
    jqueryPnotify:{
      deps: ['jquery', 'bootstrap']
    },
    message:{
      deps: ['jqueryPnotify']
    }
	},


  pragmasOnSave: {
    //removes Handlebars.Parser code (used to compile template strings) set
    //it to `false` if you need to parse template strings even after build
    excludeHbsParser : true,
    // kills the entire plugin set once it's built.
    excludeHbs: true,
    // removes i18n precompiler, handlebars and json2
    excludeAfterBuild: true
  },

  // default plugin settings, listing here just as a reference
  hbs : {
    templateExtension : 'hbs',
    // if disableI18n is `true` it won't load locales and the i18n helper
    // won't work as well.
    disableI18n : true
  },

  modules: [
    {
      name: "main"
    }
  ],

	paths: {
		jquery: 'lib/jquery-1.8.3',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		//backboneLocalstorage: '/js/lib/backbone.localStorage',
    backboneLayoutManager: 'lib/backbone.layoutManager',
    moment: 'lib/moment.js',
    handlebars: 'lib/handlebars-1.0.rc.1',
    hbs: 'lib/hbs',
    //handlebars: '/js/lib/handlebars-1.0.rc.1',
    i18nprecompile: 'lib/i18nprecompile',
    json2: 'lib/json2',
    
    bootstrap: 'lib/bootstrap',
    tooltip: 'lib/bootstrap-tooltip',
    jqueryPnotify: 'lib/jquery.pnotify',
    message: 'assets/message'
	}
});

require([
    'widgets/app/view',
    'routers/router'
  ],
  function( AppView ){
    // Initialize routing and start Backbone.history()
    //var underscore = _.noConflict();
    //Backbone.noConflict();
    Backbone.history.start();
    // Start application
    new AppView();
  }
);
