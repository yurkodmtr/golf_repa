module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "assets/css/main.css": "assets/less/design.less"
            }
          }
        },
        watch: {
            default: {
                files: [
                    'assets/less/design.less'
                ],
                tasks: ['build'],
                options: {
                    event: ['all']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch'); 

    /*build dev + prod*/
    grunt.registerTask('build', [
        'less'
    ]);
};
