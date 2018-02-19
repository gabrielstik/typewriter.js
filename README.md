# typewriter.js

Type.js is a simple tool for a cool writing effect on your website.



## Usage

```html
<!-- Add the attribute tw on your element. -->
<p tw>Hello World!</p>
<!-- Link the script at the bottom of your HTML page. -->
<script src="scripts/typewriter.min.js"></script>
```

### Properties

Add attributes to your element from the list below 

| **Attribute** | **Description**                          | **Default value** |
| ------------- | ---------------------------------------- | ----------------- |
| tw-delay      | Delay before typewriter animation starts (in milliseconds) | 1000              |
| tw-interval   | Interval between each letter (in milliseconds) | 50                |

### Example

```html
<p tw tw-delay="1000" tw-interval="50">Hello World!</p>
```

"Hello World!" will start writing after 1000ms and each letter will be written 50ms after the previous.

*Clone the project to try!*



## Contribute

I invite you to create properties and make this project cooler !

### Prerequisites

![](https://img.shields.io/badge/npm-%3E%3D%205.6.0-blue.svg) ![](https://img.shields.io/badge/gulp-%3E%3D%203.9.1-blue.svg)

```sh
# Download node_modules
npm install
```

### Minify

You can minify and copy the code you made to *typewriter.min.js* using the following command

```shell
# Copy and minify
gulp minify
```

### Conventions used

#### ECMAScript standard

Please use ES6 ECMAScript standard as possible

#### Object programming

All the code should fit in the TypeWriter class

#### Dom elements prefixing

Please add a **$** as a prefix of DOM elements

```javascript
const $el = document.querySelector('[tw]')
// is different from
const el = {}
```

#### Array of DOM elements suffixing

Please add a **s** as a suffix of an array which contains DOM elements

```javascript
const $els = document.querySelectorAll('[tw]')
for (const $el of $els) {
  // $el is one of the element in $els
}
```

#### Short conditionals

Use as much as possible short conditionals

```javascript
// Ternary conditional if there is one line in if and else
return $el.hasAttribute(attr) ? $el.getAttribute(attr) : def
// No bracket if there is one line in conditional
if (i < length) setTimeout(write, el.interval)
```



## License

This project is under MIT license