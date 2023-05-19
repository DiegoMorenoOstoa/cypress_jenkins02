pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente02_1"
                    }

                    steps {
                        bat 'git --version'

                    
                    }
                }
                stage('Slave 2') {
                    agent {
                        label "Agente02_2"
                    }
                    steps {
                        git branch: 'main', url: 'https://github.com/DiegoMorenoOstoa/cypress_jenkins02.git'
                        bat 'npm install'
                        bat 'npx cypress run cypress run --record --key 776deb98-57d5-4221-bac7-61a4d7889e25  --parallel'
                    
                    }
                }
                
                

                

            }

             
        }

    }
            
}