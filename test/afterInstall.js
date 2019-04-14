let s = require('../index.js');
s('./outs/yolo', (error, stdout, stderr) => {
    console.log('[TEST EVAL]', { error, stdout, stderr })
});