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
                sh 'cd app && npm install'
                sh 'cd app && node tests.js'
                sdfsdfsadfsdf
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploy'
            }
        }
    }
}