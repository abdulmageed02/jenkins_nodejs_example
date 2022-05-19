pipeline {
    agent { label 'slave' } 
    stages {
        stage('Build') {
            steps {
                sh 'docker build . -t node-app'
                sh 'docker rm -f node-app'
                 withCredentials([usernamePassword(credentialsId: 'ENV_VAR', usernameVariable: 'USERNAME', passwordVariable: 'PASS')]) {
                        sh "docker run -d --name node-app --env-file /home/ubuntu/.env -e RDS_USERNAME=${USERNAME} -e RDS_PASSWORD=${PASS} -p3000:3000  node-app"
                    }
           
               
            }

            
        }
    }
}
