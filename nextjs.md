
Check why we cannot use next export with /api ?? (bradversity -> api route ka last 2 min)

## DOM to write to HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        .orange {
            color: #F15B2A;
        }
    </style>

</head>
<body>
<div id="app"></div>
<Script src="index.js" type="application/ecmascript"></Script>
</body>
</html>

```
```js

const rootElement = document.getElementById('app');

const myElement = document.createElement('h1');
myElement.className = "orange";
myElement.innerText = 'Hello From Pluralsight';

rootElement.appendChild(myElement);

```


## Replacing DOM with React
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        .orange {
            color: #F15B2A;
        }
    </style>

</head>
<body>
<div id="app"></div>

<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<Script src="index.js" type="application/ecmascript"></Script>
</body>
</html>. 
```''''
```js
//const rootElement = document.getElementById('app');

// const myElement = document.createElement('h1');
// myElement.className = "orange";
// myElement.innerText = 'Hello From Pluralsight';


const myReactElement = React.createElement('h1',
    {className: 'orange'},
    'Hello From Pluralsight and React');

ReactDOM.render(
    myReactElement,
    document.getElementById('app')
);
```
```js
##### WITH PROPS
const Hello = (props) => {
    return React.createElement('h1',
        {className: 'orange'},
        'Hello From Pluralsight and React ' + props.time);
};

ReactDOM.render(
    React.createElement(Hello, {time: new Date().toLocaleTimeString()}, null),
    document.getElementById('app')
);
```



## Simple NEXT js app

* getInitialProps() -> older version of getServerSideProps.
	* runs both in server and client
	* while getServerSideProps runs first on server and later just call the api to run the function in server.

* Create node app
* install react react-dom and next 
	* npm i react react-dom next
* Next will look for the file in pages directory
	* so create folder with name pages and then index.js in it.
	* next.config.js -> conig file for next
	* _document.js  -> runs only during server side render
		* data will be available to all the pages
		```html
			import Document, {Head, Main, NextScript} from 'next/document'

			export default class MyDocument extends Document {
				render() {
					return (
						<html>
						<Head>
							<meta name="viewport" content="width=device-width, initial-scale=1"/>
						</Head>
						<body>
						<Main/>
						<NextScript/>
						</body>
						</html>
					)
				}
			}
		```
	* _app.js	-> Componenents present in this page will be available on all the pages
		* By default it will return index.js
		* we can import css file directly in this file
		```js
		import '../styles/globals.css'

		export default function App({ Component, pageProps }) {
		  return <Component {...pageProps} />
        }
		```
	* routing is automatically handles in next js (client side routing)
		* simply navigate to file name presents in pages directory
		* by default index.js is entry point
		* if we create any folder in the pages then index.js will be default page for if we hit that folder	
			* If we event folder had home.js then	
			* /event/home -> will load pages/event/home.js
			* /event -> will load pages/event/index.js
		* [slug].js -> for dynamic page name we can create a file with square bracket
		* import {useRouter} from 'next/router'
		* const router = useRouter()
		* router now has function like pathname, push 
		* it also has query which contains slug value.
			* if we have created [slug].js then we can get the value of slug using router.query.slug

* getStaticProps
	* when we build the application it will fetch the data and then create a static website with the data fetched during build
	* there is workaround, that we can make it to check the change in data after certain interval
	* has access to various parameters - > locale,locales and default locales
	```js
	  export async function getStaticProps(){
		const res =await fetch(`${API_URL}/api/events`)  
		const events= await res.json()
		return {
			props:{events},
			revalidate:1,  //validate after every 1 sec
			}
	  }
	```
	
* getStaticPaths
	* This function will always return array of  params:{object:value}  -> [params:{object:value}]
		* normally we use it to get all the slug path of the static website and pass it to getStaticProps to get events.
			* because getStaticProps cannot have access to dynamic path generated.
		```		  
		EXPECTED RETURN BLOCK
		return {
			paths:[
			{params:{id:1}},
			{params:{id:2}},
			{params:{id:3}},
			{params:{id:4}},
			]
		}
  
		```
	* let say we have dynamic website where events-name are coming from database and these are part of URL
	* then by using getServerSideProps we can get the data by:
	```js
		export async function getServerSideProps(context) {
		const {query: { slug },} = context; //destructuring context to get slug
		const res = await fetch(`${API_URL}/api/events/${slug}`);
		const data = await res.json();
		const event = data[0];
		return {
			props: { event },
		};
		}
	```
	
	* But getStatic props does not have access to query or req etc, there for we need to get all the slugs possible and then pass it to getStaticProps
	```js
		export async function getStaticPaths(){
		const res = await fetch(`${API_URL}/api/events`)
		const events = await res.json()
		const paths = events.map(evt=>({params:{slug:evt.slug}}))
		return{
			paths,
			fallback:true  
			//true to get the paths again in case of failure
			//false if you want to show 404 in case path is not found or not available during build time
		}
		/*
		EXPECTED RETURN BLOCK
		return {
			paths:[
			{params:{id:1}},
			{params:{id:2}},
			{params:{id:3}},
			{params:{id:4}},
			]
		}
		*/
		}
		//Now we have access to "paths" exported by getStaticPath
		export async function getStaticProps(paths) {
		const {params: { slug } } = paths; //destructuring context to get slug
		const res = await fetch(`${API_URL}/api/events/${slug}`);
		const data = await res.json();
		const event = data[0];
		return {
			props: { event },
			revalidate:1
		};
		}

	```
	
	
	
* getServerSideProps
	* when fetching data from /api/.. we cannot use relative url instead we have to use full URL.
	* this function will run on server even though we are using in frontend js file.
		* if we console print anything, it will print in server console instead of browser.
	* this function will always return props object
	* getServerSideProps has access to various parameters like query, req,res,resolvedUrl,params,locale,locales and default locales
	* 
	```js
	export async function getServerSideProps(context){
		const res =await fetch (`${API_URL}/api/events`)
		const events = await res.json
		console.log(events)
		return {
			props:{events}
			}
	}
	```
	* Below we are able to get slug of the page we are in right now using query parameter
		* Obviously we can use this query in [slug].js
	```js
	export async function getServerSideProps({query:{slug}}){
		const res =await fetch (`${API_URL}/api/events/${slug}`)
		const events = await res.json
		console.log(events)
		return {
			props:{events}
			}
	}
	```

* optimize Image
	* npm i next-images
	* add it to next.config.js (webpack entry point)
		* Now we can directly import the image as variable and use the variable in image tag
		* REsult -> on inspect page we can see the inline binary of image instead of URL of image from where we are fetching  it.
		```
		const withCSS    = require("@zeit/next-css")
		const withImages = require("next-images")
		module.exports   = withCSS(withImages({inlineImageLimit:16384}))
		
		## import logo from '../static/logo.png'
		...
		...
		<div><img src={logo}/></div>
		```
		

* caching
	* npm i lru-cache
	
* CDN
	* First get the CDN url
	* make changes in the next.config.js
		 
		```
			
			const withCSS    = require("@zeit/next-css")
			const withImages = require("next-images")
			const is Prod = process.env.NODE_ENV ==="production"
			module.exports   = withCSS(withImages(
				{inlineImageLimit:16384,
				 assetPrefix:isProd?'http//d30jjdhkiro.cloudfront.net': ''
				}
				))
		```

* loading skeleton
	* npm i react-placeholder
	
	
	

## Steps

* npx create-next-app myapp -y
* import Link from 'next/link'
* import {useRouter} from 'next/router'
	* const router = useRouter()
	* router now has function like pathname push 
	* it also has query which contains slug value.
		* if we have created [slug].js then we can get the value of slug using router.query.slug
* import Head from 'next/head'
	* In return statement : 
	* <Head> <title> DJ Events </title> </Head>
* 404.js -> to create customize 404 page (create it in pages dir)
* Module aliases with jsconfig
	* create jsconfig.json or tsconfig.json in root folder
	```json
	{"baseUrl":".",
    "paths": {
      "@/components/*":["components/*"],
      "@/styles/*":["styles/*"]
    }
	}
	```
* /pages/api -> anything inside this folder will be treated as API end point instead of route
	* we cannot route the function according to request verb, instead we have to check the type of req and act accordingly.
	* we can create [slug].js in /api also. In whatever folder we have created, any un-defined route in that folder will get here.
		* for /api/event/some-slug
		* we can get value of slug using -> req.query.slug
	```
	import {events} from "./data.json";
	
	export default function handler(req, res) {
	const slug = req.query.slug
	if (req.mathod === "GET") {
		res.status(200).json(events);
	}
	else{
		res.setHeader('Allow',['GET'])
		res.status(405).json({message:`Method ${req.method} is not allowed`})
		}
	}
	```
* import Image from 'next/image'
	* help us to display small optimize image in webpage.
	* If the image URL is different than the nextjs url i.e other than public folder then we need to specify it in the next.config.js
	```js
	module.exports={
	images:{
		domains:['res.cloudinary.com']
		},
	}
	
	
	
* strapi
	* npx create-strapi-app dj-events-backend
	
	
	
* npm i react-toastify
	* to show toast (side popup message) for success or failure
	

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
