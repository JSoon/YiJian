module.exports = function (grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        '<%= pkg.author %>; All right reserved */\n',
    // Task configuration
    // paths
    paths: {
      app: 'html/app',
      lib: 'html/lib',
      test: 'html/test'
    },
    // JS code checking
    jshint: {
      files: [
        'Gruntfile.js',
        '<%= paths.app %>/**/*.js'
      ],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        },
        ignores: ['<%= paths.app %>/**/*.min.js']
      }
    },
    // JS combination
    concat: {
      options: {
        separator: ';'
      },
      scripts: {
        files: {

        }
      }
    },
    // JS compression
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      scripts: {
        files: {
//                    '<%= paths.test %>/test.min.js': '<%= paths.test %>/test.js'
        }
      }
    },
    // Less to CSS
    less: {
      development: {
        options: {
          dumpLineNumbers: 'comments' // 标注每个样式在源文件中的位置
        },
        files: {
//          '<%= paths.lib %>/bootstrap/3.3.6/css/bootstrap.css': '<%= paths.lib %>/bootstrap/3.3.6/less/bootstrap.less',
          '<%= paths.app %>/css/style.css': '<%= paths.app %>/less/style.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
//          '<%= paths.lib %>/bootstrap/3.3.6/css/bootstrap.min.css': '<%= paths.lib %>/bootstrap/3.3.6/css/bootstrap.css',
          '<%= paths.app %>/css/style.min.css': '<%= paths.app %>/css/style.css'
        }
      }
    },
    // CSS autoprefixer
    autoprefixer: {
      styles: {
        files: {
//                    '<%= paths.test %>/out.css': '<%= paths.test %>/test.css'
        }
      }
    },
    // Files watching
    watch: {
      scripts: {
        files: ['<%= paths.app %>/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify']
      },
      styles: {
        files: ['<%= paths.app %>/**/*.less'],
        tasks: ['less', 'autoprefixer']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Test task
  grunt.registerTask('default', ['watch']);
  // Release task.
  grunt.registerTask('release', ['jshint', 'concat', 'uglify', 'less', 'copy']);

};