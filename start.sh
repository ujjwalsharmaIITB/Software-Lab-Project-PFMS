#!/bin/bash

# this script is used to start the application

echo "Starting Mysql Server ..."

sudo service mysql start

cd back-end

echo "Activating Virtual Environment ..."
source env/bin/activate

echo "Starting the Application ..."
python main.py


