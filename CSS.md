CSS:
	cascading style sheet
	
World Wide Web Consortium (W3C) CSS Working Groups:
``` https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group
```

3 ways of styling

```
Inline : <h1 style="background:red;"></h1>
Internal: adding css in head <style>h1{color:red}</style>
Extenal : <link rel="stylesheet" href="main.css">
```

Custom/Default fonts in your browser:
Browser preference->customize fonts
		
		We can use serif,sans-serif or monospace.
		we can rely on these value as all browser has default font store for this value.
		
		font-family:sans-serif
		
We can also use google fonts.
		add link to head section of page
		customize font-family for the selector
		

Selectors:

```
Elements: h1 p body html
classess: .container
ID		: #red-box
universsal: *
Attributes: [disabled]  //<button diabled></button> 
```

Inheritance:
	if we apply any style in body, then it will bubble down to all the element inside the body.
	
	But the specificity is very low. Even the browser has greater specificity than inheritance
	
	To increase the specificity of inheritance:
	```
	font-family:inherit  
	```
	
Combinator:
```
<section id='section'>
	<h1> This is some Text</h1>
</section>	


#section h1{
	some styling
	}
	
```

Types of combinator:

**Adjacent Sibling:
Elements share the same Parents
Second element come immediately after first element
```diff
h2 + p{
color:red}

<div>
	<h2>not applied</h2>
-	<p>Css applied</p>
	<h3>not applied</h3>
	<p>not applied</p>
	<h2>not applied</h2>
-	<p>Css applied</p>
```
**General Sibling
Element share the same element
second element come after first element
```diff
h2 ~ p{color:red}

	<h2>not applied</h2>
-	<p>Css applied</p>
	<h3>not applied</h3>
	<h2>not applied</h2>
-	<p>Css applied</p>
```
**Child
Second element is direct child of first element

```diff
div > p{color:red}

<div>
-	<p> Css applied</p>
	<div>Not a applied</div>
	<span>
		<p>Not applied</p>
	</span>
-	<p>Css applied</p>
</div>

```
**Descendant

All second element will get red color
No matter whether they are direct or indirect child
```diff
div > p{color:red}

<div>
-	<p> Css applied</p>
	<div>Not a applied</div>
	<span>
-		<p>Css Applied</p>
	</span>
-	<p>Css applied</p>
</div>

```


Cascading style sheet and specificity
Cascading- > Multiple rule can be apply on same element and rule with higher specificity will cascade other rule

*******************************************

Specificity in desceasing order:

Indeveloper tool poperty are shown with decreasin specificity.

The last ones in darker background are browser default
```
Inline
combinator
ID
class
:psedo-class
attribute
<tag> and :pseudo-element-selector

```


		 

Properties:
```
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

Common CSS properties

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
```

```
background:
color:
font-family:
display:
overflow:
order:
background:url()
transform:scale()

```