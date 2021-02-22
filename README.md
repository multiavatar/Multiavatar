# Multiavatar #

<img src="https://raw.githubusercontent.com/multiavatar/Multiavatar/main/logo.png?v=001" width="65">

[Multiavatar](https://multiavatar.com) is a multicultural avatar maker.

Multiavatar represents people from multiple races, multiple cultures, multiple age groups, multiple worldviews and walks of life.

In total, it is possible to generate **12,230,590,464** unique avatars.



### Installation and usage ###

Include the script and pass any string to the 'multiavatar' function. It will return the SVG code for the avatar.


Using npm: 

`npm i @multiavatar/multiavatar`

CommonJS:
```
const multiavatar = require('@multiavatar/multiavatar')
let svgCode = multiavatar('Binx Bond')
```

ES Module:
```
import multiavatar from '@multiavatar/multiavatar/esm'
let svgCode = multiavatar('Binx Bond')
```


Using the script tag:

```
<script src="multiavatar.min.js"></script>

<script>
  var avatarId = 'Binx Bond';
  var svgCode = multiavatar(avatarId);
</script>
```


Include from CDN:

```
<script src="https://cdn.jsdelivr.net/npm/@multiavatar/multiavatar/multiavatar.min.js"></script>
```



### Info ###

The initial unique 48 (16x3) avatar characters are designed to work as the source from which all 12 billion avatars are generated.

You can find them in the `svg` folder. These initial characters can be edited with a vector drawing program, such as Inkscape. They are in grayscale, since the color is applied later by the script, and grayscale is better for shapes design.

Every avatar consists of 6 parts:
- Environment
- Clothes
- Head
- Mouth
- Eyes
- Top

Also, there are different versions of different parts. In some final avatars, additional parts are hidden with transparency (`none` for the color) to create different shapes by re-using the same code. Also, each avatar has 3 unique color themes that are defined in the script. In total, there are: `16 characters x 3 versions/themes = 48 initial unique avatars`. You can see them all by opening the `svg/index.html` file in your browser.

To create new avatars, the Multiavatar script mixes different parts of different avatars, and different color themes.

The total number of unique avatars: 48^6 = 12,230,590,464

One of the main Multiavatar functions is to work as an identicon. Every unique avatar can be identified by the unique string of characters, associated with the avatar.

The string of characters is also the input for the Multiavatar script, which converts the provided string into a 6 double-digit numbers (range 00-47), each representing an individual part of the final avatar.

`000000000000` - this string of numbers represents the very first avatar + its A theme. You can also read it like this: `00 00 00 00 00 00`.

`474747474747` - this is the 12,230,590,464th avatar (or the 16th initial avatar + its "C" color theme).

More info can be found in the `multiavatar.js` file comments.



### Development ###

Multiavatar is coded in vanilla JavaScript. Only a single library (SHA-256) is used, integrated into the script. The initial character designs in SVG are also integrated into the script. So there is a single dependency-free JavaScript file that has everything in it (minified 68 KB).

To test different parts manually, you can uncomment them in the code.

Also, the Multiavatar script accepts the following three paramenters: `string`, `sansEnv`, `ver`.

`string` - The text string that will be converted into the avatar. This parameter is required, the other two are optional.

`sansEnv` - If this is `true`, the script returns the final avatar without the circle background (environment part).

`ver` - Pass an object to force a specific initial version, for example: `multiavatar('test', false, {'part': '01', 'theme': 'A'});`

While the algorithm generates 12 billion unique avatars, some parts (eyes, mouth) are still similar, so it means that currently there are less than 12 billion unique avatars. It is trivial to make all avatars unique by slightly changing the color, but visually that would not make a difference. That's why instead of forcing a formal solution, some parts are left unfinished intentionally.

The design of shapes, and the multicultural balance of avatars are also open for further polishing, optimization, creative ideas and improvements.



### Design ###

The final SVG files are saved (Inkscape 1.0 as "Optimized SVG") with the `_final` suffix in the `svg` folder.

After editing the SVG files with a vector program, overwrite the existing `_final.svg` files with your new versions. Then run the `_build.php` script to automatically update the `multiavatar-dev.js` script with the new SVG code from your `_final.svg` files.



### API ###

To get an avatar as SVG code, add the avatar's ID to the URL:

```
https://api.multiavatar.com/Binx Bond
```
JavaScript API call example to get SVG code:

```
let avatarId = 'Binx Bond'
fetch('https://api.multiavatar.com/'
+JSON.stringify(avatarId))
  .then(res => res.text())
  .then(svg => console.log(svg))
```
To get an avatar as SVG file, add .svg to the end of the URL:

```
https://api.multiavatar.com/Binx Bond.svg
```
To get an avatar as PNG file, add .png to the end of the URL:

```
https://api.multiavatar.com/Binx Bond.png
```



### License ###

You can use Multiavatar for free, as long as the conditions described in the [LICENSE](LICENSE) are followed.



### Screenshots ###

<img src="https://multiavatar.com/press/img/screenshots/screenshot-02.png?v=001">

<img src="https://multiavatar.com/press/img/screenshots/screenshot-03.png?v=001">

<img src="https://multiavatar.com/press/img/screenshots/screenshot-09.png?v=001">

<img src="https://multiavatar.com/press/img/screenshots/screenshot-10.png?v=001">



### More info ###

For additional information and extended functionality, visit the [multiavatar.com](https://multiavatar.com) web-app.

The app is based on static html for the home page, and on Laravel 8 + Vue.js for extended functionality, including the web store.

The product mockup generator for the [Merch Maker](https://multiavatar.com/merch-maker) is based on the ImageMagick library.
