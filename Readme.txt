Instructions for running the client project:
1)	Open terminal/command prompt and navigate to the ‘BMI-Client’ by running               
    cd BMI-Client command.
2)	Execute  ‘sails lift’ command to start the sever.
3)	Open a web browser and navigate to the http://localhost:1337/ URL.

Instructions for running the server project:
1)	Open terminal/command prompt and navigate to the ‘BMI-calculator’ by running cd BMI-calculator command.
2)	Execute  ‘sails lift --port 8080’ command to start the sever.
	The client project is configured to make a REST API call to the web service at localhost:8080, 
	so it is really important to start the server project only at port 8080.

If the project throws the following error when trying to start the server,
error: A hook (`userconfig`) failed to load!

kindly run 'npm install' to install the missing dependencies and then
start the server again

