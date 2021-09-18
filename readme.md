# Path module

The path module provides utilites for working with file and
directory paths. It can be accessed using..

const path = require('path');

## path.dirname(path)
the path.dirname() methods returns the directory name of a path, similar to the Unix dirname command. Trailing directory 
seperators are ignored, see path.sep

ex --> path.dirname('/foo/bar/baz/asdf/quux');
-> returns : '/foo/bar/bax/asdf'
-> A TypeError is thrown if path is not a string.