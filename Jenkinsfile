pipeline {
    agent any  
    stages {
        stage('Build') {
            steps {
                checkout scm
                sh 'docker-compose build'
            }
        }
        stage('Test'){
            steps{
                echo 'Test'
                echo 'Test'
                eqrger
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploy'
            }
        }
    }
}