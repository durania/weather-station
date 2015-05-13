'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        express: 'grunt-express-server',
    });

    // Define the configuration for all the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {
                port: 9000
            },
            dev: {
                options: {
                    script: 'server/app.js',
                }
            }
        },

        open: {
            server: {
                url: 'http://localhost:9000'
            }
        },
        watch: {

            gruntfile: {
                files: ['Gruntfile.js']
            },

            express: {
                files: [
                    'server/**/*.{js,json}'
                ],
                tasks: ['express:dev', 'wait'],
                options: {
                    livereload: true,
                    nospawn: true //Without this option specified express won't be reloaded
                }
            }
        },
        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: false
            }
        }

    });
    grunt.registerTask('wait', function() {
        grunt.log.ok('Waiting for server reload...');

        var done = this.async();

        setTimeout(function() {
            grunt.log.writeln('Done waiting!');
            done();
        }, 1500);
    });
    grunt.registerTask('serve', function(target) {
        grunt.task.run([
            'express:dev',
            'wait',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', function(target) {
        return grunt.task.run([
            'karma'
        ]);
    });

};