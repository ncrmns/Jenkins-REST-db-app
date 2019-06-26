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
                sh 'docker-compose up -d'
                sh 'cd app && npm install'
                sh 'cd app && node tests.js'
                sh 'docker-compose down'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploy'
            }
        }
    }
}