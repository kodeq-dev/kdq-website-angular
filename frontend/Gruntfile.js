// Generated on 2016-01-15 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn',
    express: 'grunt-express-server'
  });

  var cdnService = {
    jquery: {
      versions: ['2.2.0', '2.1.4'],
      url: function(version) {
        return '//cdnjs.cloudflare.com/ajax/libs/jquery/' + version + '/jquery.min.js';
      }
    },
    lodash: {
      versions: ['4.0.1', '3.10.1'],
      url: function(version) {
        return '//cdn.jsdelivr.net/lodash/' + version + '/lodash.min.js';
      }
    },
    bootstrap: {
      versions: ['4.0.0-alpha.2', '3.3.6'],
      url: function(version) {
        return '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/' + version + '/js/bootstrap.min.js';
      }
    },
    tether: {
      versions: ['1.1.1', '1.1.0'],
      url: function(version) {
        return '//cdnjs.cloudflare.com/ajax/libs/tether/' + version + '/js/tether.min.js';
      }
    },
  };
  var cdnUrls = [
    '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.9/angular.min.js',
    '//cdn.jsdelivr.net/lodash/4.0.1/lodash.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/tether/1.1.1/js/tether.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.2/js/bootstrap.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.9/angular-sanitize.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.9/angular-touch.min.js'
  ];

  var angularFiles = [
    'angular',
    'angular-animate',
    'angular-aria',
    'angular-cookies',
    'angular-loader',
    'angular-messages',
    'angular-resource',
    'angular-route',
    'angular-sanitize',
    'angular-touch'
  ];

  angularFiles.forEach(function(item) {
    var stableVersions = ['1.4.9', '1.4.8'];

    cdnService[item] = {
      versions: stableVersions,
      url: function(version) {
        return '//cdnjs.cloudflare.com/ajax/libs/angular.js/' + version + '/' + item + '.min.js';
      }
    };
  });

  // Configurable paths for the application
  var appConfig = {
    appName: require('./bower.json').name,
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/**/*.js'],
        tasks: ['newer:jshint:all', 'newer:jscs:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/**/*.js'],
        tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'postcss:server']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    express: {
      options: {
        background: false
      },
      dev: {
        options: {
          background: true,
          script: '../server_dev.js'
        }
      },
      prod: {
        options: {
          script: '../server_prod.js',
          node_env: 'production'
        }
      }
    },
    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function(connect, options) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/**/*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/**/*.js']
      }
    },

    // Make sure code styles are up to par
    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/**/*.js'
        ]
      },
      test: {
        src: ['test/spec/{**/*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({
            browsers: ['last 1 version']
          })
        ]
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//,
        fileTypes: {
          html: {
            replace: {
              js: '<script defer src="{{filePath}}"></script>'
            }
          }
        }
        
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath: /\.\.\//,
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        options: {
          algorithm: 'sha512',
          length: 10
        },
        src: [
          '<%= yeoman.dist %>/scripts/**/*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/scripts/**/*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images',
          '<%= yeoman.dist %>/styles'
        ],
        patterns: {
          js: [
            [/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']
          ]
        },
        blockReplacements: {
          js: function (block) {
            return '<script defer src="' + block.dest + '"><\/script>';
          }
        }
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      options: {
        keepSpecialComments: false
      }
    },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    ngtemplates: {
      dist: {
        options: {
          module: 'kdq',
          htmlmin: '<%= htmlmin.dist.options %>',
          usemin: 'scripts/scripts.js'
        },
        cwd: '<%= yeoman.app %>',
        src: 'scripts/**/*.html',
        dest: '.tmp/templateCache.js'
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      options: {
        cdn: cdnService
      },
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '*.html',
            'sitemap.xml',
            'scripts/bootstrap.js',
            'service-worker-registration.js',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.tmp/styles',
          dest: '<%= yeoman.dist %>/styles',
          src: 'lato.css'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    manifest: {
      generate: {
        options: {
          basePath: '<%= yeoman.dist %>',
          network: ['*'],
          preferOnline: false,
          headcomment: ' <%= yeoman.appName %>',
          verbose: false,
          timestamp: true,
          hash: true,
          cache: cdnUrls,
          process: function(path) {
            if(path.indexOf('fontawesome') > -1) {
              return path + '?v=4.5.0';
            }
            return path;
          }
        },
        src: ['**/**.*'],
        dest: '<%= yeoman.dist %>/<%= yeoman.appName %>.appcache'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    swPrecache: {
      dev: {
        handleFetch: true,
        rootDir: '<%= yeoman.dist %>'
      }
    },

    inline: {
      dist: {
        options:{
          cssmin: true
        },
        src: '<%= yeoman.dist %>/index.html',
        dest: '<%= yeoman.dist %>/index.html'
      }
    },

    uncss: {
      dist: {
        options: {
          stylesheets: ['../.tmp/styles/kdq.css'],
          ignore: [/\.collapsing/,/\.collapse/, /\.nav-link \+ \.nav-link/, /\.nav-white/, /\.map/, /\.navbar-nav \.nav-link\.active/, /\.has-success/, /\.has-danger/, /\.form-control-success/, /\.form-control-danger/]
        },
        files: {
          '.tmp/styles/kdq.css': [
            '<%= yeoman.dist %>/index.html',
            '<%= yeoman.app %>/scripts/**/*.html'
            ]
        }
      }
    },

    custom: {
      useManifest: {
        basePath: '<%= yeoman.dist %>',
        src: 'index.html',
        manifest: 'kdq.appcache'
      }
    }

  });

  grunt.registerMultiTask('custom', 'Custom task', function() {
    if (this.target === 'useManifest') {
      var fs = require('fs');
      var pathFileHtml = this.data.basePath + '/' + this.data.src;

      var result = fs.readFileSync(pathFileHtml, 'utf8');
      var found = result.match(/<html(.*?)>/);
      var newValue = '<html' + found[1] + ' manifest="' + this.data.manifest + '">';
      result = result.replace(/<html(.*?)>/g, newValue);

      grunt.log.writeln('Replace ' + found[0] + ' to ' + newValue);

      fs.writeFileSync(pathFileHtml, result, 'utf8');
    }
  });

  var path = require('path');
  var swPrecache = require('sw-precache');

  function writeServiceWorkerFile(rootDir, handleFetch, callback) {
    var config = {
      cacheId: appConfig.appName,
      handleFetch: handleFetch,
      logger: grunt.log.writeln,
      staticFileGlobs: [
        rootDir + '/fonts/**.*',
        rootDir + '/styles/**.css',
        rootDir + '/images/**.*',
        rootDir + '/scripts/**.js'
      ],
      stripPrefix: rootDir + '/'
    };

    swPrecache.write(path.join(rootDir, 'service-worker.js'), config, callback);
  }

  grunt.registerMultiTask('swPrecache', function() {
    var done = this.async();
    var rootDir = this.data.rootDir;
    var handleFetch = this.data.handleFetch;

    writeServiceWorkerFile(rootDir, handleFetch, function(error) {
      if (error) {
        grunt.fail.warn(error);
      }
      done();
    });
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'express:prod']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'postcss:server',
      // 'connect:livereload',
      'express:dev',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function(target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'wiredep',
    'concurrent:test',
    'postcss',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'inline',
    'uncss',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
    'manifest',
    'custom:useManifest'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ]);
};
