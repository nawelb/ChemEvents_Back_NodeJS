node () {
	stage ('firstTry - Checkout') {
 	 checkout scm
	 }
	stage ('firstTry - Build') {
		bat """ 
		npm install 
		"""		// Batch build step
	}
	stage ('firstTry - Build') {
		bat """ 
		git branch
		git checkout master
		git push heroku master		
		"""		// Batch build step
	}
}