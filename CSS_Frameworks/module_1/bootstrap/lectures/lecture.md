---
header: "Lesson 1: 1 Bootstrap and installing"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2022 [Eivind Holvik](https://www.noroff.no/en/contact/staff/) using [Marp](https://marp.app/)"
---

<!-- prettier-ignore -->
# Bootstrap

---

<!-- prettier-ignore -->
## Setting up

- https://content.noroff.dev/node/installing-node.html

---

<!-- prettier-ignore -->
## Setting up

<!-- prettier-ignore -->
Navigate to your project in the terminal

```bash
npm init -y
npm install bootstrap
npm install bootstrap@5.2.0
```

---

## CDN vs Install

<!-- prettier-ignore -->
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
 rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" 
integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
```

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />

<script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

- Install is better when you need to make changes to the styling

---

<!-- prettier-ignore -->
## Explaining the files.

- bootstrap.min.css vs bootstrap.css
- SCSS vs CSS

---

<!-- prettier-ignore -->
## 3.x vs 5.x

data-toggle = data-bs-toggle
tata-target = data-bs-target
Older examples will need some changes.
JQUERY is no longer a dependency.

---

<!-- prettier-ignore -->
## tips

- HTML-CSS-suport extension
- Need poppers for dropdowns, popowers and tooltips
- Box-sizing: border-box; to change just apply box-sizing: content-box; to element.
- Bootstrap is mobile first
