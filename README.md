SSH Keygen module free of any implied binary dependencies. (builds binary upon npm i)

## Usage
```
var {ssh_keygen_promise, ssh_keygen } = require('ssh_keygen_npm').
ssh_keygen(__dirname + "/garbage/key1", (err, result) => {
    console.log(err, result);
    // result = { ok: true, path:'path/to/keys' }
})

ssh_keygen_promise(__dirname + "/garbage/key2").then(result => {
    console.log(result);
    // result = { ok: true, path:'path/to/keys' }
}).catch(err => console.log(err))
```

## Dependency: 

Only golang needed.

to install golang in unix like machines, (on win please get an msi installer from golang.org)
```
    sudo apt-get update
    sudo apt-get -y upgrade
    wget https://dl.google.com/go/go1.12.2.linux-amd64.tar.gz1
    sudo tar -xvf go1.12.2.linux-amd64.tar.gz
    sudo mv go /usr/local
    export GOPATH=$HOME/go
    export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
    go version
    go env
```