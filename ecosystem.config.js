module.exports = {
  	apps : [
		{
			name: "socialProofUI",
		    script: "./server.js",
		    watch: true,
		    env: {
		    	"PORT": 8027,
		    	"NODE_ENV" : "production"
		    }
		}
  	]
}