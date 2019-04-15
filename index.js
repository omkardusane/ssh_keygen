var path = require("path");
var exec = require('child_process').exec;
var f = (keyName, callback) => {
    var pathResolved = path.resolve(keyName)
    exec('ssh_keygen.exe "' + pathResolved + '"', {
        cwd: __dirname + "/bin"
    }, function (error, stdout, stderr) {
        // console.log('[EVALD]', { error, stdout, stderr })
        let result = { ok: !error && stdout.match(/Key saved to/), path: pathResolved, stdout, stderr };
        callback(error, result)
    });
};
module.exports = f;      