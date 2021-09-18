const path = require('path');

// it gives you directory name
console.log(path.dirname('/home/santha/Downloads/details'));

// it gives you extension name
console.log(path.extname('home/santha/Downloads/hello.python'));

//it gives you file name
console.log(path.basename('home/santha/Downloads/hello.python'));

// path.parse() method returns an object whose properties
// represent significant element of the path
// dir, root, base, name , ext
console.log(path.parse('home/santha/Downloads/hello.python'));

// if we just want file name than
const fileName = path.parse('home/santha/Downloads/hello.pytho').name;
console.log(fileName);
