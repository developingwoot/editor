module.exports = function(grunt) {

	grunt.initConfig({
		webpack: {
			"build-dev": {
                entry: "./src/index.tsx",
                output: {
                    filename: "./dist/bundle.js",
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
                        { test: /\.tsx?$/, loader: "ts-loader" }
                    ],

                    preLoaders: [
                        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                        { test: /\.js$/, loader: "source-map-loader" }
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
        sass: {
            dist: {
                options: {
                    loadPath: ['./node_modules/foundation-sites/scss'],
                    dest : './dist'
                }
            }
        },
		watch: {
			app: {
				files: "./src/**/*.tsx",
				tasks: "webpack:build-dev",
				options: {
					spawn: false,
				}
			},
            scss : {
                files : "./node_modules/foundation-sites/scss",
                tasks : "sass"
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
	grunt.registerTask("dev", ["webpack:build-dev", "watch:app"]);

	// Production build
	grunt.registerTask("build", ["webpack:build-dev"]);
};