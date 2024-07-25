FROM jenkins/jenkins:lts

USER root

# Install SSH server and set up password for root
RUN apt-get update && \
    apt-get install -y openssh-server && \
    mkdir /var/run/sshd && \
    echo 'root:nodestore' | chpasswd

# Ensure jenkins user exists and set up password
RUN usermod -aG sudo jenkins && \
    echo 'jenkins:nodestore' | chpasswd

# Expose SSH port
EXPOSE 22

USER jenkins
