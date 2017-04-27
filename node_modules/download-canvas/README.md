# Download Canvas

Js to support download canvas

This package distribute from [https://github.com/kaxi1993/canvas-to-image](https://github.com/kaxi1993/canvas-to-image). Write by [kaxi1993](https://github.com/kaxi1993)

## Instalation

```bash
$ npm install download-canvas
```

## Quick Start

```bash
downloadCanvas(canvasId, options);

options = {
    name: 'custom name', // default image
    type: 'jpg',         // default png, accepted values jpg or png
    quality: 0.4         // default 1, can select any value from 0 to 1 interval
}

```

**Download as jpg**
```bash
downloadCanvas('my-canvas', {
    name: 'myImage',
    type: 'jpg',
    quality: 0.7
});
```
**Download as png**
```bash
downloadCanvas('my-canvas', {
    name: 'myImage',
    type: 'png',
    quality: 1
});

or

downloadCanvas('my-canvas');
```

## Examples

```html
<html>
<head></head>
<body>
    <canvas id="my-canvas"></canvas>
    ...
    <script src="/download-canvas/src/index.js"></script>
    <script>
        downloadCanvas('my-canvas', {
            name: 'myJPG',
            type: 'jpg',
            quality: 0.5
        });

        downloadCanvas('my-canvas', { 
            name: 'myPNG',
            type: 'png',
            quality: 1
        });
        
        downloadCanvas('my-canvas', {});
    </script>
</body>
</html>
```

```bash
or using browserify
browserify -r canvas-to-image > bundle.js
```

```html
<html>
<head></head>
<body>
    <canvas id="my-canvas"></canvas>
    ...
    <script src="bundle.js"></script>
    <script>
        downloadCanvas('my-canvas', {
            name: 'myJPG',
            type: 'jpg',
            quality: 0.5
        });

        downloadCanvas('my-canvas', { 
            name: 'myPNG',
            type: 'png',
            quality: 1
        });
        
        downloadCanvas('my-canvas', {});
    </script>
</body>
</html>
```
