'use strict';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(grunt) {

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
         * Set project object
         */
        project: {
            app: './',
            assets: '<%= project.src %>/assets',
            src: '<%= project.app %>src',
            css: [
                './node_modules/foundation-sites/scss',
                '<%= project.assets %>/scss/style.scss'
            ],
            dist : '<%= project.app %>dist'
        },
		webpack: {
			"build-dev": {
                    entry: {
                        "sour-mash" : ["./src/index.tsx",
                        "./src/assets/scss/styles.scss"
                        ]
                    },
                    output: {
                        filename: "./dist/js/[name].js",
                    },

                    // Enable sourcemaps for debugging webpack's output.
                    devtool: "source-map",

                    resolve: {
                        // Add '.ts' and '.tsx' as resolvable extensions.
                        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
                    },

                    module: {
                        loaders: [
                            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                            { test: /\.tsx?$/, loader: "ts-loader" },
                            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')}
                        ],

                        preLoaders: [
                            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                            { test: /\.js$/, loader: "source-map-loader" }
                        ]
                    },
                    plugins: [
                        new ExtractTextPlugin('./dist/css/styles.css', {
                            allChunks: true
                        })
                    ],

                    sassLoader: {
                        includePaths: [
                            './node_modules/foundation-sites/scss',
                            './node_modules/foundation-sites/scss/settings'
                                    ]
                    },

                    // When importing a module whose path matches one of the following, just
                    // assume a corresponding global variable exists and use that instead.
                    // This is important because it allows us to avoid bundling all of our
                    // dependencies, which allows browsers to cache those libraries between builds.
                    externals: {
                        "react": "React",
                        "react-dom": "ReactDOM"
                    }
			}
		},
        copy: {
            main :{
                files: [{
                    src: './src/index.html',           // copy all files and subfolders
                    dest: './dist/index.html',    // destination folder
                },
                {
                    src: './src/main.js',
                    dest: './dist/main.js'
                },
                {
                    src: './src/package.json',
                    dest: './dist/package.json'
                }]
            },
            react :{
                files: [{
                    src : './node_modules/react/dist/react.js',
                    dest: './dist/js/react.js'
                },{
                    src : './node_modules/react-dom/dist/react-dom.js',
                    dest: './dist/js/react-dom.js'
                }]
            }

        },
		watch: {
			app: {
				files: ["./src/**/*.tsx",
                "./src/**/*.html"],
				tasks: "webpack:build-dev",
				options: {
					spawn: false,
				}
			},
            scss : {
                files : ["./node_modules/foundation-sites/scss/**/*.scss", 
                "<%= project.assets %>/scss/styles.scss"],
                tasks : "webpack:build-dev"
            }
		}
	});

	require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
	var webpack = require("webpack");
	var webpackConfig = require("./webpack.config.js");

	// Build and watch cycle (another option for development)
	// Advantage: No server required, can run app from filesystem
	// Disadvantage: Requests are not blocked until bundle is available,
	//               can serve an old app on too fast refresh
	grunt.registerTask("dev", ["webpack:build-dev", "copy", "watch"]);

	// Production build
	grunt.registerTask("build", ["webpack:build-dev"]);
};