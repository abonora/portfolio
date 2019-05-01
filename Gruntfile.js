// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
path = require('path');
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

	// all of our configuration will go here
	
	// configure jshint to validate js files -----------------------------------
	 jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },
      files: ['Grunfile.js', 'src/js/**/*.js']
    },
    
    //concat js files and move to script.js in dist folder
    concat: {
     options: {
        separator: ';',
      },
      dev: {
        src: 'src/js/*.js',
        dest: 'dist/js/scripts.js'
      }
    },
    //combine and minify all js files in src and move to dist/js/script.min.js -----------------------
    uglify: {
      static_mappings: {
        files: {
          'dist/js/scripts.min.js':'src/js/*.js'
        }
      },
      dynamic_mappings1: {
        files: [{
          expand: true,
          cwd: 'src/vendors',
          src: ['*.js'],
          extDot: 'last', 
          dest: 'dist/vendors',
          ext: '.min.js'
        }]
      },
      dynamic_mappings2: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: ['**/*.js','!*.js'],
          extDot: 'last', 
          dest: 'dist/js',
          ext: '.min.js'
        }]
      }
    },
	
	  // compile less stylesheets and move to dist -----------------------------------------
    less: {
      dynamic_mappings: {
        files: [{
          expand: true,
          cwd: 'src/css/less',
          src: ['*.less'],
          dest: 'dist/css/raw',
          ext: '.css'
        }]
      }
    },

  // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        rebase:false
      },
      dynamic_mappings: { //minify the already concated .css file in dist
        files: [{
          expand: true,
          cwd: 'dist/css/raw',
          src: '*.css',
          dest: 'dist/css/min',
          ext: '.min.css'
        }]
      },
      src_mappings: { //minify any .css files in src folder
        files: [{
          expand: true,
          cwd: 'src/css',
          src: '*.css',
          dest: 'dist/css/min',
          ext: '.min.css'
        }]
      }
    },
    //compress images 
    imagemin: {                          
      dynamic_mappings: {                      
        files: [{
          expand: true,                  
          cwd: 'src/images',                   
          src: ['**/*.{png,jpg,gif,svg,ico}'],   
          dest: 'dist/images'                  
        }]
      }
    },
   //add vendor prefixes in css 
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dev:{
        src:['dist/css/raw/*.css','src/css/**/*.css']
      }

    },
    // configure watch to auto update ------------------------------------------
    watch: {
      // for stylesheets, watch css and less files
      // only run less and cssmin
      less_stylesheets: {
        files: ['src/css/less/*.less'],
        tasks: ['newer:less', 'newer:autoprefixer:dev']
      },
      less_inc_stylesheets: {
        files: ['src/css/less-inc/**/*.less'],
        tasks: ['less', 'newer:autoprefixer:dev']
      },
      css_stylesheets: {
        files: ['src/css/**/*.css'],
        tasks: ['newer:autoprefixer:dev']
      },
      // for scripts, run jshint and uglify
      scripts: {
        files: 'src/**/*.js',
        tasks: ['newer:jshint','concat']
      },
      images:{
        files: 'src/images/**/*.{png,jpg,gif,svg,ico}',
        tasks: ['imagemin']
      },
      livereload: {
        options: { livereload: true },
        files: ['**/*','!node_modules/**']
      }
    }

  });
  

  // ===========================================================================
  // CREATE TASKS ==============================================================
  // ===========================================================================
  // this default task will go through all configuration (dev and production) in each task 
  grunt.registerTask('default', [
    'dev'
  ]);

  // this task will only run the dev configuration
  grunt.registerTask('dev', ['jshint', 'concat', 'less','autoprefixer','imagemin']);

  // only run production configuration
  grunt.registerTask('build', ['jshint','uglify','less','autoprefixer','cssmin','imagemin']);


  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');


};