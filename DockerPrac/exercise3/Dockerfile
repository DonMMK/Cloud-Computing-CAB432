############################################################
# Dockerfile to build Python WSGI Application Containers
# Based on Ubuntu
############################################################
# Set the base image to Ubuntu
FROM ubuntu

# File Author / Maintainer
MAINTAINER Don Kaluarachchi

# Install basic applications, Python, Python tools
         RUN apt-get update && apt-get install -y \
            build-essential \
            curl \
            dialog \
            git \
            net-tools \
            python3 \
            python3-dev \
            python3-setuptools \
            python-distribute \
            python3-pip \
            tar \ 
	        python3-numpy \
	        python3-scipy \
	        wget

         # Get pip3 to download and install Python requirements:
         RUN pip3 install flask
         RUN pip3 install cherrypy
	     RUN pip3 install nltk

# Copy the application folder inside the container
         ADD /app /app
         # Expose ports
         EXPOSE 80
         # Set the default directory where CMD will execute
         WORKDIR /app

# Set the default command to execute when creating a new container
         # i.e. using CherryPy to serve the application
         CMD python3 server.py
