pipeline {
    agent none
    stages {
        stage('build') {
            agent { docker { image 'node:10.13.0-alpine' } }
            environment { HOME = "${env.WORKSPACE}" }
            steps {
                sh 'npm --version'
                sh 'node --version'
                sh 'npm i'
            }
        }
        stage('test') {
            agent { docker { image 'node:10.13.0-alpine' } }
            environment { HOME = "${env.WORKSPACE}" }
            steps {
                sh 'npm run test'
            }
        }
    }
}
