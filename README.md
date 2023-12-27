#Annotation to the solved problem

You will need to run your node js server on some vps server. Small installation instructions and ready code can be found in this repository: https://github.com/lopata29435/little-node-js-server/tree/main.

The extension sends http request to the server on port 3000, which we specified in our server code. A json file is located at this server address:
```json
{
    "``message'': ``Hello from the server''
}
```

After that our extension will display the status of connection to our server in the corresponding window.
