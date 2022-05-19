pipeline {
    agent { label 'slave' } 
    stages {
        stage('Build') {
            steps {
                sh 'docker build . -t node-app'
                sh 'docker rm -f node-app'
                sh 'docker run --env-file /home/ubuntu/.env -d -p 3000:3000 --name node-app node-app'
               
            }

            
        }
    }
}
