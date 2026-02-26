---
title: The importance of writing a semantic HTML
author: Goran Solev
date: 2023-02-12
description: Explanation of how important the semantic HTML code is and all the benefits of doing it.
tags: ["html"]
draft: false
excerpt: "Semantic HTML isn't just accessibility checkbox — it improves SEO, maintainability, screen-reader experience, and future-proofs your markup."
thumbnail:
---

*If you are asking yourself do you need to learn HTML before anything else on your path to become a web developer, the only correct answer is **YES**!*

<br />

By writing semantic HTML, you give meaning to your HTML code to be more understandable, readable and maintainable for yourself and everyone else.

<br />

Your page need to contain this basic mark-up with these important tags included as a standard when writing HTML. In the following example, I will show you how one web page should look and what tags have to be written for the browser to understand the page structure.

```html
<!DOCTYPE html>

<html>
  <head>
    <title>My title</title>
  </head>

  <body>
    <h1>First Heading</h1>
    <p>First paragraph.</p>
    <p>Second paragraph.</p>
  </body>
</html>
```

Let's break down this code:

<br/>

The first line `<!DOCTYPE html>` is telling the browser what type of file is rendering. This line is important and has to be in every HTML page in your project.

<br/>

Next, we have `<html></html>` which defines the document itself. It is very important to include the opening tag as well as the closing tag to give the browser the start and the end of our mark-up code.

<br/>

The whole document is later split to head `<head></head>` which contains the title of the page, the meta-data and the styling of the page and body `<body></body>` which contain all the further structure of the page. We will talk in detail about the head and the body of the page in the later posts.

<br />

An example of bad and good practices of writing markup or HTML structure:

```html
<div id="”container”">
  <div>Some heading here</div>
  <div>Brown bears likes honey!</div>
  <div>Bear properties:</div>
  <div>- big</div>
  <div>- brown</div>
  <div>- hungry</div>
  <div></div>
</div>
```

The same markup structure written with semantic HTML:

```html
<section id="”container”">
  <h2>Some heading here</h2>
  <p>Brown bears like honey!</p>
  <h3>Bear properties:</h3>
  <ul>
    <li>big</li>
    <li>brown</li>
    <li>hungry</li>
  </ul>
  <section></section>
</section>
```

If you are new to HTML, this article gives you the basics of all the practices when structuring your page. The mark-up is the skeleton or the bones of the website. If you want to practice a semantic writing of HTML, the best way is to learn the tags and their use. These are the best resources where you can find more answers to your questions and also read more in-depth about the usage and meanings of the tags in HTML.

<br />

---

<br />

#### Additional reading:

<a href="https://www.w3schools.com/html/html5_semantic_elements.asp" target="_blank">w3schools.com | HTML Semantic Elements</a> <br />
<a href="https://www.freecodecamp.org/news/semantic-html5-elements" target="_blank">freecodecamp.org | Semantic HTML5 Elements Explained</a> <br />
<a href="https://web.dev/learn/html/semantic-html" target="_blank">web.dev | Semantic HTML</a>