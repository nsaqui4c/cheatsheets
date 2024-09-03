## 14 DOM manipulation using JS

#### element selection
* document.getElementByID("some-id")                    -> will always return single item
* document.getElementByClassName("some-id")             -> can also return array of item
* document.querySelector("#some-id")                    -> we can pass any css selector to get item
* document.querySelectorAll(".some-clsass")             -> we can pass any css selector to get item. return array of item
* To get children of grandparent
    * select grandparent-> grandparent.children         -> return array of children
    * We can also traverse within parent only 
        * child = grandparent.querySelector(".child")   -> traverse grandparent element only
* To get parent from child
    * select child -> child.parentElement               -> return parent element

* closest -> same as querySelector, but traverse upward
    * grandparent = child.closest(".class")
* finding sibling-> element in same level
    * childTwo = childOne.nextElementSibling
    * childTwo = childOne.previousElementSibling

#### Adding and creating element
* appendChild -> use to append child element.
    * using this we can only append child element (div,span etc)

* append -> along with appending element we can also append string
    * we can also pass multiple string to append

* createElement -> we use this to create new element

```js
const body = document.body
const div = document.createElement('div')
body.appendChild(div)
body.append('hello','world')
```

#### Getting element Text

* innerText -> this will get the text as it is available in website
    * if it is not visible, it will not be able to get the text
* textContent -> this will get the text as it written in html file
    * it will also get indentation from html

```html
<body>
    <div>
        <span>Hello</span>
        <span style="diaplay:none">bye</span>
    </div>
</body>
```
```js
const div = document.querySelector("div")
console.log(div.textContent) // this will have same indentation and line change as in html
//          Hello
//                                 bye
console.log(div.innertext) // bye will not get print
//Hello
```

#### Modifying element Text
* we can modify text by using both innerText or textContent
* If we want to render html also we have to use innerHTML
```js
const div = document.createElement("div")
div.innerText="<strong>Hello world </strong>"
body.append(div)
// this will print  -> <strong>Hello world </strong>
// if we want to render then use innerHTML
div.innerHtml="<strong>Hello world </strong>"
// this will priny t Hello world in bold
```

#### remove element
```js
const spanHi = document.querySelector('#hi') 
spanHi.remove()
// or if have parent element we can below function
div.removeChild(spanHi)
```

#### Element attribute and Data attribute
* Element attribute
    * we can get using spanHi.getAttribute('title')
    * OR by using spanHi.title
    * for setting -> spanHi.setAttribute("id","some_new_id")
    * for removing -> spanHi.removeAttribute("id")
* Data attribute
    * to get data attribute, we use keyword *dataset*
    * it convert the name to camelCasing and remove data from starting
    * data-test -> test; data-longer-name ->longerName
    * to get data -> spanHi.dataset.test OR spanHi.dataset.longerName
    * to add data -> spanHi.dataset.newName ="hi" -> will create data-new-name="hi"
    * to delete data-> delete div.dataset.active
```html
<body>
    <div>
        <span id ="hi" 
            title="some title" 
            data-test="this is test"
            data-longer-name="some more data">
            Hello
        </span>
        <span id = "bye">bye</span>
    </div>
</body>
```
```js
const spanHi = document.querySelector('#hi') 
spanHi.getAttribute('title')
let att= spanHi.title
spanHi.setAttribute("id","some_new_id")
spanHi.removeAttribute('title')

// data attribute
spanHi.dataset.test   // "this is test"
spanHi.dataset.longerName // "some more data"
panHi.dataset.newName ="hi" // will create data-new-name="hi"
delete div.dataset.newName
```

#### class and style
```js
spanHi.classList.add('hi1','hi2')
spanHi.classList.remove('hi1')
spanHi.classList.toggle('hi1') // remove if present, otherwise add it

// style
spanHi.style.color= 'red'
spanHi.style.backgroundColor= 'red'

```
