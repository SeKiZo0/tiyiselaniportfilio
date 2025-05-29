pipeline {
//     agent {
//         label 'docker-agent'  // Use the Docker VM agent
//     }

    environment {
        GITHUB_REGISTRY = 'ghcr.io'
        IMAGE_NAME = 'SeKiZo0/portfolliopage'
        CONTAINER_NAME = 'portfoliopage'
        PORT = '3000'
    }

    stages {
        stage('Verify Webhook') {
            steps {
                script {
                    // Verify this build was triggered by GitHub webhook
                    if (env.BUILD_CAUSE?.contains('GitHubPushCause')) {
                        echo "Build triggered by GitHub webhook - proceeding"
                    } else {
                        echo "Build not triggered by GitHub webhook - manual build"
                    }
                }
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                script {
                    def imageTag = "${GITHUB_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}"
                    def latestTag = "${GITHUB_REGISTRY}/${IMAGE_NAME}:latest"

                    // Build the Docker image
                    sh "docker build -t ${imageTag} -t ${latestTag} ."

                    // Store image tags for later use
                    env.IMAGE_TAG = imageTag
                    env.LATEST_TAG = latestTag
                }
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    withCredentials([usernamePassword(
                        credentialsId: 'github-container-registry',
                        usernameVariable: 'REGISTRY_USER',
                        passwordVariable: 'REGISTRY_PASS'
                    )]) {
                        // Login to GitHub Container Registry
                        sh "echo ${REGISTRY_PASS} | docker login ${GITHUB_REGISTRY} -u ${REGISTRY_USER} --password-stdin"

                        // Push both tags
                        sh "docker push ${IMAGE_TAG}"
                        sh "docker push ${LATEST_TAG}"

                        // Logout
                        sh "docker logout ${GITHUB_REGISTRY}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Stop and remove existing container if it exists
                    sh """
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                    """

                    // Pull and run the new container
                    withCredentials([usernamePassword(
                        credentialsId: 'github-container-registry',
                        usernameVariable: 'REGISTRY_USER',
                        passwordVariable: 'REGISTRY_PASS'
                    )]) {
                        sh "echo ${REGISTRY_PASS} | docker login ${GITHUB_REGISTRY} -u ${REGISTRY_USER} --password-stdin"

                        sh """
                            docker pull ${LATEST_TAG}
                            docker run -d \\
                                --name ${CONTAINER_NAME} \\
                                --restart unless-stopped \\
                                -p ${PORT}:3000 \\
                                -e NODE_ENV=production \\
                                ${LATEST_TAG}
                        """

                        sh "docker logout ${GITHUB_REGISTRY}"
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Remove old images to save space (keep last 3 builds)
                    sh """
                        docker images ${GITHUB_REGISTRY}/${IMAGE_NAME} --format "table {{.Tag}}" | \\
                        grep -E '^[0-9]+\$' | sort -nr | tail -n +4 | \\
                        xargs -I {} docker rmi ${GITHUB_REGISTRY}/${IMAGE_NAME}:{} || true
                    """
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}