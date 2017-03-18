# [Moment Timezone](http://momentjs.com/timezone)

## EARTHLING INTERACTIVE CHANGES

The only difference between this fork and the version it was forked from is a change to allow this library to be more easily imported when using TypeScript and Webpack. 

### Example Usage

1. Install Moment

```
npm install --save moment
```

2. Install this repo, add the following to your package.json dependencies:

```
"moment-timezone": "git://github.com/EarthlingInteractive/moment-timezone.git",
```

3. Install [json-loader](https://github.com/webpack-contrib/json-loader). 

```
npm install --save-dev json-loader
```

4. Add the following rule to your webpack.config:

```
{
    test: /\.json$/,
    loader: 'json-loader'
}
```

5. Import moment and moment-timezone in your code:

```
import * as moment from "moment";
import "moment-timezone";
```

---


[![Join the chat at https://gitter.im/moment/moment-timezone](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/moment/moment-timezone?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

IANA Time Zone Database + [Moment.js](http://momentjs.com).

```js
var june = moment("2014-06-01T12:00:00Z");
june.tz('America/Los_Angeles').format('ha z'); // 5am PDT
june.tz('America/New_York').format('ha z');    // 8am EDT
june.tz('Asia/Tokyo').format('ha z');          // 9pm JST
june.tz('Australia/Sydney').format('ha z');    // 10pm EST

var dec = moment("2014-12-01T12:00:00Z");
dec.tz('America/Los_Angeles').format('ha z');  // 4am PST
dec.tz('America/New_York').format('ha z');     // 7am EST
dec.tz('Asia/Tokyo').format('ha z');           // 9pm JST
dec.tz('Australia/Sydney').format('ha z');     // 11pm EST
```

#### [Contribute code or compile time zone data](contributing.md)

#### [Read the changelog](changelog.md)


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/moment-timezone
[npm-version-image]: http://img.shields.io/npm/v/moment-timezone.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/moment-timezone.svg?style=flat

[travis-url]: http://travis-ci.org/moment/moment-timezone
[travis-image]: http://img.shields.io/travis/moment/moment-timezone/develop.svg?style=flat
