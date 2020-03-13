const path = require('path');
const fs = require('fs');
const outlineStroke = require('svg-outline-stroke');

const directoryPath = path.join(__dirname, './svg');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        throw err;
    } else {
        files.forEach(function (file) {
            if (file.endsWith('svg')) {
                fs.readFile('./svg/' + file, (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        outlineStroke(data).then(outlined => {
                            fs.writeFile('./newsvgs/' + file, outlined, err => {
                                if (err) {
                                    throw err;
                                }
                                console.log('convert file', file);
                            });
                        });
                    }
                })
            }
        });
    }
});
