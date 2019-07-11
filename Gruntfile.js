module.exports = function(grunt) {
	grunt.initConfig({
		'dss': {
			docs: {
				files: {
					'docs/': 'src/**/koffie.{less,styl,scss}'
				},
				options: {
					template: 'docs/template/',
					include_empty_files: false,
					parsers: {
						// Finds @alias in comment blocks
						alias: function(i, line, block){
							return line;
						},
						// Finds @ref in comment blocks
						ref: function(i, line, block) {
							if (line.length > 0) {
								return line.split(',');
							} else {
								return;
							}
						},
						// Finds @author in comment blocks
						author: function(i, line, block) {
							return line;
						},
						// Finds @input in comment blocks
						input: function(i, line, block) {
							return line;
						},
						// Finds @format in comment blocks
						format: function(i, line, block) {
							return line;
						},
						//finds @output in comment blocks
						output: function(i, line, block) {
							return line;
						}
					}
				}
			}
		}
	});

  grunt.loadNpmTasks('grunt-dss');
	grunt.option('debug', false);

};
