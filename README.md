es2015-Promise.allSettled
=========================

# What This Is

This is a ponyfill for Promise.allSettled.

It works like you would expect. It is safe so if Promise.allSettled ever gets added to JavaScript, it
shouldn't break, of course assuming the one added supports the same way of handling promise resolution
and rejection.

```JavaScript
Promise.allSettled(promises)
.then((results) => {
    results.forEach(function (result) {
        if (result.state === "fulfilled") {
          let value = result.value;
        } else {
          let reason = result.reason;
        }
    });
});
```

# Installation

## NodeJS

```bash
npm i es2015-promise.allsettled -S
```

## Bower

```bash
bower install es2015-promise.allsettled -S
```

# Usage

## NodeJS

```JavaScript
require('es2015-promise.allsettled');
```

## es2015

```JavaScript
import 'es2015-promise.allsettled'
```
