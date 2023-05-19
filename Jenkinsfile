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
                        echo 'prueba01'
                    }
                }
                stage('Slave 2') {
                    agent {
                        label "Agente02_2"
                    }
                    steps {
                        echo 'prueba02'
                    
                    }
                }
                
                

                

            }

             
        }

    }
            
}