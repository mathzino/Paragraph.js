var fs = require("fs");
var filename = "mytext.txt";
var newFileName = "paragraph.txt";
var contents = fs.readFileSync(filename);
try {
  let newText = contents.toString().replace(/(\r\n|\n|\r)/gm, " ");
  fs.writeFileSync(newFileName, newText);
} catch (error) {
  console.log(error);
}
