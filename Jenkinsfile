pipeline {
   environment {
             registry = '***'
             registryCredential = '***'
             registyAddr = '***'
             dockerImage = ''
             scannerHome = tool 'SonarQubeScanner'
   }
  agent {
    node {
      label 'host-2-jenkins-dind-nodejs-slave'
    }
  }

  stages {
    stage ('Verify Tools'){
      steps {
            parallel (
              node: { sh "npm -v" },
              docker: { sh "docker -v" }

            )
      }
    }


 /*   stage('Static Code Analysis'){
       /* SonarQube Analysis  */
  /*    steps {
            withSonarQubeEnv('Host-2-SonarQube') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
            timeout(time: 1, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: true
            }
      }
    } */

    stage('Build Frontend'){
          /* Build React Frontend  */
             steps{
              sh 'cd frontend && npm install && npm run build'
             }
          }

 stage('Build Docker Image & Publish'){
      /* Build Docker Image & Publish to Nexus Local  Private Docker registry  */
         steps{
             script {
               dockerImage = docker.build(registry + ":$BUILD_NUMBER" ,"-f Dockerfile .")
                docker.withRegistry( 'https://repos.opotel.com', registryCredential ) {
                  dockerImage.push()
                }
             }
         }
    }


/* QA Env */
  /*  stage ('Deploy Docker Image To Test Server') {
         agent {
                node {
                 label 'app-test-jenkins-dind'
                 }
                }
                  steps {
                     sh 'docker pull ***/guestbook' + ":$BUILD_NUMBER"
                  }

    }*/
    /* QA Env; Deploy Docker image to Stage/Test Server */

     stage ('Deploy To AWS') {
             steps{
                  sshagent(credentials : ['AWS-eu-central-key']) {

                      sh 'ssh -o StrictHostKeyChecking=no ubuntu@*** uptime'
                      sh 'ssh -v ubuntu@***'
                      sh 'ssh ubuntu@*** sudo docker pull repos.opotel.com/gamescore' + ":$BUILD_NUMBER"
                      sh 'ssh ubuntu@***  sudo docker rm --force gamescore'
                      sh 'ssh ubuntu@*** sudo docker run --detach  --name gamescore  --restart=always --env "VIRTUAL_PORT=8080" --env "VIRTUAL_HOST=gamescore.romandulman.com" --env  "LETSENCRYPT_HOST=gamescore.romandulman.com"  repos.opotel.com/gamescore'+ ":$BUILD_NUMBER"

                  }
              }
        }

  }
}

