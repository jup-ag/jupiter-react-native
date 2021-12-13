// Inject node globals into React Native global scope.

global.Buffer = require("buffer").Buffer;
global.Buffer.TYPED_ARRAY_SUPPORT = false;
