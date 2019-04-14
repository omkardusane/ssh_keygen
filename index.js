var exec = require('child_process').exec;
var f = (keyName, callback) => {
    const proc = exec('ssh-keygen.exe ' + keyName, {
        cwd: __dirname + "/bin"
    }, function (error, stdout, stderr) {
        console.log('[EVALD]', { error, stdout, stderr })
        callback(error, stdout, stderr)
    });
};
module.exports = f;