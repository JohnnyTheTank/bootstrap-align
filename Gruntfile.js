module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            distMin: {
                options: {                       // Target options
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'dist/bootstrap3-align.min.css': 'src/bootstrap3-align.scss',
                    'dist/bootstrap4-align.min.css': 'src/bootstrap4-align.scss'
                }
            },
            dist: {
                options: {                       // Target options
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'dist/bootstrap3-align.css': 'src/bootstrap3-align.scss',
                    'dist/bootstrap4-align.css': 'src/bootstrap4-align.scss'
                }
            }

        },
        watch: {
            minifySCSS: {
                files: [
                    'src/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    spawn: true,
                },
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['watch']);

};

