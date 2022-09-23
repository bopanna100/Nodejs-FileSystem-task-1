const fs = require("fs"); // importing inbuild filesystem modules here - no need to install ..
const { join } = require("path");

// two parms  - one is curretn path , callback)=>
fs.readdir(".", (err, files) => {
  if (err) {
    console.log("Error in Dir File");
  } else {
    console.log(files);
  }
});


// Topics covered:
// Global Object,Modules,exports,require,Inbuild modules,File systems,HTTP
