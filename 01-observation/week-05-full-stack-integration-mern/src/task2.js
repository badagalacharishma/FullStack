const fs = require('fs');
const rline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rline.question('Provide file name: ', (fName) => {
    rline.question('Provide file content: ', (fData) => {
        fs.writeFile(fName, fData, (error) => {
            if (error) return console.error(error);
            console.log('--- Data saved successfully ---');
            
            fs.readFile(fName, 'utf8', (error, readData) => {
                console.log('Current Data:', readData);
                
                rline.question('Provide data to append: ', (appendData) => {
                    fs.appendFile(fName, '\n' + appendData, (error) => {
                        fs.readFile(fName, 'utf8', (error, finalResult) => {
                            console.log('Final Data:', finalResult);
                            rline.close();
                        });
                    });
                });
            });
        });
    });
});