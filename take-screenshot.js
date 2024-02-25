const screenshot = require("screenshot-desktop");

screenshot()
  .then((img) => {
    // img: Buffer containing the image
    const fs = require("fs");
    const path = require("path");
    const outputPath = path.join(__dirname, "screenshot.jpg");

    fs.writeFile(outputPath, img, (err) => {
      if (err) return console.log(err);
      console.log(`Screenshot saved to ${outputPath}`);
    });
  })
  .catch((err) => {
    console.error("Failed to take screenshot:", err);
  });
