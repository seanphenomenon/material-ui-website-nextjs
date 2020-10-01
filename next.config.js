//this file includes  packages that gives us the ability to extend the functionality/middleware/customization of next.js setup (github page)
const withPlugins = require('next-compose-plugins'); //  this plug-in allows us to take optimized images and packages them all together
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
      /* config for next-optimized-images */
    }],
  
    // your other plugins here
  
  ]);