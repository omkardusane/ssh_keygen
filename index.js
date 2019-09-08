var path = require("path");
var { promisify } = require('util')
var exec = require('child_process').exec;
var ssh_keygen = (keyName, callback) => {
    var pathResolved = path.resolve(keyName)
    exec('./bin/ssh_keygen.exe "' + pathResolved + '"', {
        cwd: __dirname + "/bin"
    }, function (error, stdout, stderr) {
        // console.log('[EVALD]', { error, stdout, stderr })
        let result = { ok: !error && /success/.test(stdout), path: pathResolved, stdout, stderr };
        callback(error, result)
    });
};
module.exports = { ssh_keygen, ssh_keygen_promise: promisify(ssh_keygen) };      