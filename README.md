SSH Keygen module free of any binary dependencies. 
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