// appended text
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: '12.13.0') {
                    sh 'npm --version'
                    sh 'node --version'
                    sh 'npm i'
                    sh 'npm run test'
                }
            }
        }
    }
}