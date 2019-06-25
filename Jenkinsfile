pipeline {
    agent any  
    stages {
        stage('Build') {
            steps {
                checkout scm
                sh 'docker-compose build'
            }
        }
        stage('Deploy'){
            steps{
                sh 'docker tag auctiondb-auctionapp-rest_master_app ncrmns/auction'
                sh 'docker push ncrmns/auction'
        }
    }
}