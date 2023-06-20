fs = require('fs')
3. fs.readFile('ex4.html', 'utf8', function (err,data) {
4. if (err) {
5. return console.log(err);
6. }
7. console.log(data);
8. });
