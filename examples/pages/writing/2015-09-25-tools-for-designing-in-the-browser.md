---
title: "Tools I Use for Designing in the Browser"
layout: post
ignore: true
created: 2015-09-25
---
Here is the complete list of tools I use when I design in the browser using css and html.

# [Tachyons](http://tachyons.io)

I try to write as little css as possible at this point. Tachyons is normally my base for putting something together. It handles most of what I need, is easy for me to extend and weighs less than 11kb. I generally strip out things that aren't needed for a project to get the weight down even more.

### [Postcss](https://github.com/postcss/postcss)

For processing and manipulating CSS files. I use the following modules:

*   [autoprefixer](https://github.com/postcss/autoprefixer)
*   [postcss-conditionals](https://github.com/andyjansson/postcss-conditionals)
*   [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
*   [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
*   [postcss-import](https://github.com/postcss/postcss-import)

### [React-cxs](http://jxnblk/cxs)

This is my favorite way to manage styles. Encapsulating your styles in js will help reduce debugging time and you only have to ship the css you need for a view which can be a huge performance boost.

### [React](http://facebook.github.io/react/)

React has transformed my ability to iterate through designs and test different ideas out.

### [Browser-sync](http://www.browsersync.io)

For auto-updating the browser after changing code.

### [NPM/Node](http://npmjs.org "NPM")

For managing build flow and dependencies.

### A Web Browser

For visual testing my css is working. I normally test on lynx, safari, chrome, and firefox as well as mobile iOS and chrome.

### Vim

For writing HTML/CSS/JS.

# [CSSSTATS](https://www.npmjs.com/package/cssstats "css stats - heuristic stats about your styles")

For visualizing various stats about the css I'm refactoring.

# Pen & Paper

I still use pen & to write down notes and sketch out design ideas. When I'm building a complex component I generally write down a list of things I know about the component and a list of things I don't know for sure.
