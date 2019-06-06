const gifResize = require('@gumlet/gif-resize')
const fs = require("fs")

const bufferFile = fs.readFileSync("test.gif")
gifResize({
    width: 100
})(bufferFile).then(data => {
    var stream = fs.createWriteStream("result.gif")
    stream.write(data)
    stream.end()
    console.log('Success')
});