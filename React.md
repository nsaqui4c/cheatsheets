



## LifeCycle: 

```
There are three different phases of React component’s lifecycle:

* Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.
* Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
* Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.

Some of the most important lifecycle methods are:
	componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
	componentDidMount() – Executed on the client side only after the first render.
	componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
	shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
	componentWillUpdate() – Called just before rendering takes place in the DOM.
	componentDidUpdate() – Called immediately after rendering takes place.
	componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.

INITIAL LOAD LIFECYCLE:
	constructor
	component will mount
	render
	child constructor
	child will mount
	child render
	child component did mount
	component did mount
	component will unmount

PROP CHANGE LIFECYCLE:
	component will receive props
	should component update
	component will update
	render
	componentDidUpdate(prevProps,prevState,snapshot)

STATE CHANGE CYCLE: 
	should component update
	component will update
	render
	component did update


Constructor: 
		class Counter extends React.Components{
		constructor(props){
		this.state={ counter:0}
		this.increment=()=>this.setState({this.state.counter+=1})
		}
Render

componentDidMount(){
	console.log("component did mount")
	}
	// Callled when component is constructed and added in DOM not when it is updated

componentDidUpdate(prevProps,prevState,snapshot){
	console.log("component did update")
	}
	//called whenever there  is update not called when it is first created
	
componentWillUnmount(){
	console.log("component will unmount")
	}
	// this will trigger if we unmount the component from the DOM

shouldComponentUpdate(nextProp,nextState){
	//we can get current props using this.props
	//and new props using nextProp.props and
	//return false we do not want to render the component again

}

static getDerivedStateFromProps(props, state) {
       if(props.name !== state.name){
           //Change in props
           return{
               name: props.name
           };
       }
       return null; // No change to state
   }
	//should be called above all function
	getDerivedStateFromProps(props, state) is a static method that is called just before render() method in both mounting and updating phase in React. It takes updated props and the current state as arguments.
}

getSnapshotBeforeUpdate(prevProps,prevState){
//allow us to store some props before it re-render the component
//call just before render
	return null

}

componentDidCatch(error,info){
	console.log(error)
	this.setState({error,info})
}
	
	

```
### Lifecycle in Functional based component
```
# By default useEffect runs on every render. so if we want to restrict it,we need to use[] to show dependency
Mounting
	Initialization
	componentWillMount
	
			useLayoutEffect(() => {
				console.log('Component is mounted in the DOM');
			}, []);
			
  
	render
	componentDidMount-------------------------------------- empty[]
			useEffect(() => {
			console.log('Im inside useEffect hook')
			}, [])
Updating
	componentWillReceiveProps
	shouldComponentUpdate ----------------------------------useMemo
	componentWillUpdate
	render
	componentDidUpdate ------------------------------------- no []
		 useEffect(() => {
		console.log('hey, Im inside useEffect Hook')
		})
Unmounting
	componentWillUnMount-------------------------------------return function
		useEffect(() => {
			console.log("Here, useEffect act as componentDidMount")
			return () => {
				console.log("Here, you can add clean up code - componentWillUnmount")
				};
		}, [])


```








## Questions

* Explain DOM Diffing in React.
```
The process of checking the difference between the new VDOM tree and the old VDOM tree is called "diffing". Diffing is accomplished by a heuristic O(n) algorithm. During this process, React will deduce the minimum number of steps needed to update the real DOM, eliminating unnecessary costly changes. This process is also referred to as reconciliation.
```

* Reconcilation
```
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
```

* How to prevent a function from being called multiple times?
```
If you use an event handler such as onClick or onScroll and want to prevent the callback from being fired too quickly, then you can limit the rate at which callback is executed. This can be achieved in the below possible ways:

Throttling: Changes based on a time based frequency. For example, it can be used using _.throttle lodash function.
Debouncing: Publish changes after a period of inactivity. For example, it can be used using _.debounce lodash function.
RequestAnimationFrame throttling: Changes based on requestAnimationFrame. For example, it can be used using raf-schd lodash function.
```

* What is the second argument that can optionally be passed to setState and what is its purpose? ↑
```
A callback function which will be invoked when setState has finished and the component is re-rendered.
Since the setState is asynchronous, which is why it takes in a second callback function. With this function, we can do what we want immediately after state has been updated.

setState() actions are indeed asynchronous. setState() doesn’t immediately mutate this.state. Instead, it creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.

The reason behind is the way setState alters the state and causes rerendering. Making it synchronous might leave the browser unresponsive. That being said, the setState calls are asynchronous as well as batched for better UI experience and performance.

```

* DOM Document object model
```
Virtual DOM- changes are easy, minimal memory wastage,JSX elements are updated if elements exist,cannot update html directly,faster update
Real DOM   - changes can be expensive,High demand of memory and more wastage, create new DOM every time an element get updated, directly mainpulate html, slow update
	
Virtual DOM is  simple javascript object that is exact copy of corresponding real dom. Render function creates a node tree and updates it based on change occur in data model
```

* Features
```
single direction data flow model
It deals with complete server side data processing and handling
Uses virtual dom
JSX is abbreviation of javascript xml
JSX transformer converts the jsx into javascript object which can be read by browser
React is simple library and not a framework and hence need of dependencies
It increases the application’s performance
It can be conveniently used on the client as well as server side
Because of JSX, code’s readability increases
React is easy to integrate with other frameworks like Meteor, Angular, etc
Using React, writing UI test cases become extremely easy
```

* What is JSX?
```
JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.
```

* Why can’t browsers read JSX?
```
Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.
```

* What  are states and props
```
To Be updated
```

* High order function
```
To Be updated
```

* Imperative and declarative approach
```
React is declarative approach. We just let the compliler know what we want and behind the scene it convert everything and render the page to us.
```


* What are Pure Components?  useMemo in case of functional based component
```
Now, ReactJS has provided us a Pure Component. If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state and props with 	new props and states to decide whether the React component should re-render itself or  Not.

In simple words, If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of 		re-rendering of the component. Pure Components are Class Components which extends React.PureComponent. 
```

* What are synthetic events in React?
```
Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.
```	
		
		
* Why is switch keyword used in React Router v4?  -> changed to Routes in v6
```
Although a <div> is used to encapsulate multiple routes inside the Router. The ‘switch’ keyword is used when you want to display only a single route to be rendered amongst the several defined routes. The <switch> tag when in use matches the typed URL with the defined routes in sequential order. When the first match is found, it renders the specified route. Thereby bypassing the remaining routes.
```

* Comments:
```
{/* Single Line comment */}  
```

* Controlled and uncontrolled component
* Controlled Components
Controlled components are React components that store their form data (input values) in the component's state. The React state is the single source of truth for the input values, and any changes to the input are reflected in the state.
	* Key Characteristics:
		* The value of the input element is controlled by the React state.
		* The component re-renders every time the state changes.
		* You can easily control and validate the input data before it is submitted.
* Uncontrolled Components
	* Uncontrolled components rely on the DOM to manage their own state, rather than storing the value in the React state. In uncontrolled components, you use refs to access the input values directly from the DOM.

	* Key Characteristics:
		* The value of the input element is controlled by the DOM, not by the React state.
		* The component does not re-render when the input value changes.
		* Useful when you need to integrate with non-React code or when you don't need to track the input state in React.
```
A Controlled Component
	is one that takes its current value through props and notifies changes through callbacks like onChange.
	The component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.
A Uncontrolled Component
	is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
Most native React form components support both controlled and uncontrolled usage:

// Controlled:
<input type="text" value={name} onChange={handleChange} />
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

// Uncontrolled:
const inputRef = useRed(null)
<input type="text" defaultValue="foo" ref={inputRef} />
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${nameRef.current.value}`);
  };
// Use `inputRef.current.value` to read the current value of <input>
```
* 	PropTypes and defaultProps
```
	import PropTypes from 'prop-types'
	const Header=({title})=>{
	return<>something {title}</>}
	
	Header.defaultProps={
	title: 'some text'
	}
	
	Header.propTypes={
	title:Proptypes.String.isRequired
	}
	
```
* Implicit and explicit return

```
// returns: undefined
// explanation: an empty block with an implicit return
((name) => {})() 

// returns: 'Hi Jess'
// explanation: no block means implicit return
((name) => 'Hi ' + name)('Jess')

// returns: undefined
// explanation: explicit return required inside block, but is missing.
((name) => {'Hi ' + name})('Jess')

// returns: 'Hi Jess'
// explanation: explicit return in block exists
((name) => {return 'Hi ' + name})('Jess') 

// returns: undefined
// explanation: a block containing a single label. No explicit return.
// more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
((name) => {id: name})('Jess') 

// returns: {id: 'Jess'}
// explanation: implicit return of expression ( ) which evaluates to an object
((name) => ({id: name}))('Jess') 

// returns: {id: 'Jess'}
// explanation: explicit return inside block returns object
((name) => {return {id: name}})('Jess') 
```
	
### Higher Order function 

* A function which takes another component as parameter and return the component with its props along with some other functionality.

```
const withClapAnimation = (WrappedComponent) => {
  class WithClapAnimation extends Component {
    // This handles animation logic
    animate=()=>{
      //do something in this function 
    }
    render() {
      return <WrappedComponent {...this.props} animate={this.animate}/>;
    }
  }
  return WithClapAnimation;
};
```
* WithClapAnimation is actually pointing to WrappedComponent with additional property "animate", and this property will be available to wrapped component when render.

```
const MediumClap = ({animate}) => {
  animate()
  return(<h1>hello</h1>)
  
  export default withClapAnimation(MediumClap)

```
* function based HOC -> HOC which logs component mounting and unmountin
```js
import React, { useEffect } from 'react';

function withLogging(WrappedComponent) {
  return function WithLoggingComponent(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);
      
      return () => {
        console.log(`Component ${WrappedComponent.name} will unmount`);
      };
    }, []);

    // Render the wrapped component with all its props
    return <WrappedComponent {...props} />;
  };
}

export default withLogging;
```
```js
import React from 'react';
import withLogging from './withLogging';

function Button(props) {
  return <button>{props.label}</button>;
}

// Wrap the Button component with the withLogging HOC
const ButtonWithLogging = withLogging(Button);

function App() {
  return (
    <div>
      <ButtonWithLogging label="Click Me" />
    </div>
  );
}

export default App;

```
* Another example of HOC for conditional rendering
```js
import React from 'react';

function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const { isAuthenticated } = props;

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <div>Please log in to access this page.</div>;
    }
  };
}
////////////

function Dashboard() {
  return <div>Welcome to the Dashboard!</div>;
}

///////////////
import React from 'react';

function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const { isAuthenticated } = props;

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <div>Please log in to access this page.</div>;
    }
  };
}

///////////////
const DashboardWithAuth = withAuth(Dashboard);

function App() {
  const userIsAuthenticated = true; // Change this to false to test the unauthenticated state

  return (
    <div>
      <DashboardWithAuth isAuthenticated={userIsAuthenticated} />
    </div>
  );
}

export default App;

```
	
## Hooks

* callback function in UseEffect
```
useEffect(()=>{
console.log('render done')
return(()=>'This will call first to clean up last changes then above functions will be called')
},[]}

```
* To make useEffect not to run on mounting but only if dependency changes
```
  const isComponentMounted =useRef( true)
  useEffect(()=>{
    if (!isComponentMounted.current)
        onClap && onClap(clapState)
    
    isComponentMounted.current=false

  },[clapState.count])
  
```
* useState
	* While modifying state value using state use prevState
```
const handleClick=()=>{
setState(prevState=>({
count:prevState.count+1
})
}
```
	
* useMemo => to save expensive calculation
* useCallback => to stop re-rendering of child
* useEfect vs useLayoutEffect
	* https://blog.logrocket.com/useeffect-vs-uselayouteffect-examples/

* useContext

	* create context with your choosen name
	* get {Provider} from context
	* wrap the return function with {Provider with all the values that you want in global level
	* get the value in other component using same context name you have created.
```
const MediumClapContext=createContext()
const {Provider} = MediumClapContext


const MediumClap = ({children}) => {
  const isClicked=true
return (
    <Provider value={isClicked}>
    <button
      ref={setRef}
      data-refkey="clapRef"
      className={styles.clap}
      onClick={handleClapClick}
    >
      {children}
    </button>
    </Provider>
  );
}
  
const ClapIcon = () => {
    const { isClicked }=useContext(MediumClapContext)
  return (
    <span>
	</span>
	)
}
```
	
## Custom Hooks
* UsePrevios / useEffect cleanup examples 

* creating custom hook to get previous value of prop or state
```

const usePrevious = (value)=>{
	const ref= useRef()
	useEffect(()=>{	
	ref.current=value
	})	
	return ref.current
	}
//First it will return the value ref.current and then useEffect will update the new value
//In any function useEffect runs after the return function.

/***USAGE***/

const prevCount= usePrevious(count)

//Whenever value of count change, it will re-render causing invoking custom hook again
//which will return the prev value and then change the ref to new value.


```
* Custom Hook for useEffectAfterMount
```
const useEffectAfterMount =(cb,deps)=>{
  const isComponentMounted=useRef(true)
  useEffect(()=>{
    if(!isComponentMounted.current){
        return cb()// incase user return something it will funct will return to useEffevt for cleanup
    }
    isComponentMounted.current=false
  },deps)
  
}
//usage:
//useEffectAfterMount(()=>{animate.replay();},[clapState.count])
```
#### callbacks Ref
* React also support another way to set ref called callback ref  which gives more fine-grain control over when ref are set and unset.

* Instead of passing a ref attribute created by createRef() [useRef in function] you pass a function. 
* The function recieved the react component instance or HTML Dom element as its argument, which can be stored and accessible elsewhere.

```
  const [{ clapRef, clapCountRef, clapTotalRef }, setRefState] = useState({});
  const setRef = useCallback(node => {     
      setRefState(prevRefState => ({
        ...prevRefState,
        [node.dataset.refkey]: node,
      }));
    
  },[]);
  
 
const ClapCount = ({ count, setRef }) => {
  return (
    <span data-refkey="clapCountRef" ref={setRef} className={styles.count}>
      + {count}
    </span>
  );
};

const ClapTotal = ({ countTotal, setRef }) => {
  return (
    <span data-refkey="clapTotalRef" ref={setRef} className={styles.total}>
      {countTotal}
    </span>
  );
};

```
## Props collection / collection of props passed to child component
```
//create object which contains collction of props
const counterProps={
        count:clapState.count,
        'aria-maxvalue':MAXIMUM_USER_CLAP,
        'aria-minvalue':0,
        'aria-current-value':clapState.count
    }

//spread and pass the collection to child component
<ClapCount setRef={setRef} {...counterProps}/>	

//recieve the spread collection and then spread and call the collection	
const ClapCount = ({ count, setRef,...restprops }) => {
    return (
      <span data-refkey="clapCountRef" ref={setRef} className={styles.count} {...restprops} >
        + {count}
      </span>
    );
  };
```

* the problem with prop collection is that user cannot modify the collection.
* We can user prop getter function instead so that user can modify the props.

```
const getToggleProps=(props)=>({
        onClick:updateClapState,
        'aria-isClicked':clapState.isClicked,
        ...props
        
    })

<ClapContainer setRef={setRef} {...getToggleProps({onClick:()=>{console.log("overRide animation")}})}  >
//getToggleProps  will first return all the props then add the props given in params. If the name is same as existence
//then it will override the existant props.
```
## Styling

### inline
PROS:
* Encapsulated
* code sharing (styles in below code sample can be used iin multiple tags)
* isolated
* no library reqd
* explicit dependencies

CONS:
* pseudo selector
* animation key frame
* media queries
* cascade overRide
```
const styles={
padding:'100px',

}
<button style={styles}>Press</button>

```


### css-in-js libraries
Examples:
* styled-component
* emotion
* styled-jsx
* radium

PROS:
* pseudo selector
* animation key frame
* media queries
* Co-located styles and code

CONS:
* chosing library
* cascade override - because className are generally dynamically created

### CSS stylesheet

* Traditoinal stylesheet


### css modules /scoped

* almost traditional stylesheet
* after complilation eventhough all the classname is in global namespace, but they are hashed
* therefore no conflict of classname after compile.

```
SRC:					compiled:
.link{					.link---a9b6798{

}						}

```

```
***component.module.css***

.button{
}


***jsx file***

import * as css from './component.module.css
console.log(css)  --- >  //{button:button---a9b6798}
<button className={css.button}>press</button>
```
```
scoped css file for single js file.
Create css file with name same as js file with extension .module.css
import the css in below format, this will create the css attribute as object of classes
	import classes from './something.module.css'
Now u can use it as dynamic css
	<div className={classes.header}> </div>

```
## react-router-dom
* npm install react-router-dom
```js
### You are using react-router-dom version 6, which replaced Switch with the Routes component
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* Switch stop the search for path once it matches the first instance */}
	  <BrowserRouter>
      <Routes>  
        <Route path='/' exact element={AllMeetUpPage}></Route>
        <Route path='/new-meetup' element={NewMeetUpPage}></Route>
        <Route path='/favourite' element={FavouritePage}></Route>
      </Routes>
	  </BrowserRouter>
    </div>
  );

### Verion 4: 
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* Switch stop the search for path once it matches the first instance */}
	  <BrowserRouter>
      <Switch>  
        <Route path='/' exact ><AllMeetUpPage/></Route>
        <Route path='/new-meetup'  ><NewMeetUpPage/></Route>
        <Route path='/favourite'  ><FavouritePage/></Route>
      </Switch>
	  </BrowserRouter>
    </div>
  );
```
* shared Layout ("OUtlet")
```js
	
	 {/*Nested paths. All the below path are now relative to '/dash' -> /dash/stats
           // child pages will be visible in <SharedLayout/> Template wherever we have mentioned <Outlet/>
	   // in Below eg stats page will be visible twice in shared layout page in the places of Outlet   
	   // If we go to /dash no child page will render.
	      	// If we want to make a child page default load even on /dash change path='stats' to just index
	*/}
	
	
    <BrowserRouter>
      <Routes>
        <Route path="/dash" element={<SharedLayout/>}>
          <Route path="stats" element={<Stats />} />
	      // <Route index element={<Stats />} />    to make it default
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>



//Shared Layout page
const SharedLayout = () => {
  return (
    <Wrapper>
        <nav>
            <Link to='add-job' className="btn">add job</Link>
            <br/>
            <br/>
            <Outlet/>
            <br/>
            <Link to='all-jobs' className="btn">all jobs</Link>
        </nav>
        <Outlet/>
        
    </Wrapper>
  )
}

```

* react-router-dom -> match
```
const HomeScreen = ({match}) => {
  
  const keyword= match.params.keyword
  const category=match.params.category
  const pageNumber= match.params.pageNumber ||1

```


* react-router-dom -> history
```
 useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }

OR 
history.replace('/login') // if we do not want user to go back to page using browser back button


```
* react-router-dom ->location
```
import {useLocation} from 'react-router-dom'
	const location = useLocation()
	
	{location.pathname==='/' && <Home/>}
```
* Link
```import {Link } from 'react-router-dom'
	<Link to '/about' > About</Link>
	//This will not reload the page, instead just change the component
```
* NavLink
	* gives us extra functionality such as different style in case link is active
```js
import { NavLink } from 'react-router-dom';
<NavLink to={path} key={id} onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>Some link</NavLink>
```

* Elements which are not routed with react-router-dom
```
export default function App(){
return(
	<Router>
		<Header/>
		<Route path='/'  component={Welcome} exact><Route>
	<Router>
	)
}

//Here header is not routed using Route, therefore it will not have props of history,location and match
//to get those props in Header we ned to import withRouter  from react-router-dom and then export Header with HOC - export default withRouter(Header)
```
* Prorected Route
```js
function ProtectedRoute({ element }) {
  const isAuthenticated = useAuth(); // Your logic to check if the user is authenticated
  return isAuthenticated ? element : <Navigate to="/login" />;
}

<Routes>
  <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
</Routes>
```
* When navigating between pages, you might want to ensure the page scrolls to the top automatically. This behavior can be added using React hooks:
```js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>{/* your routes here */}</Routes>
    </Router>
  );
}
```

* Lazy Loading (Code Splitting)
* To optimize performance, you can load routes lazily, meaning the code for a route is only loaded when the user navigates to it. React has built-in support for lazy loading with React.lazy() and Suspense.
```js
import React, { Suspense, lazy } from 'react';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```
* Lazy loading helps split the app into smaller bundles, each containing only the code necessary for specific parts of the app. This reduces the amount of JavaScript downloaded when the user first opens the app, leading to faster load times.
* All the lazy load component will have thier own js chunk file, which will get loaded only when required.
	•	React.lazy(() => import('./Home')): Dynamically imports the Home component only when it’s needed.
	•	Suspense: While the Home (or any lazily loaded component) is being loaded, Suspense shows a fallback UI (in this case, a simple “Loading…” message) until the component is fully loaded.


* Benefits of Lazy Loading

	•	Faster Initial Load: Only the essential code (e.g., the home page or landing page) is loaded when the app starts. Other parts of the app are loaded when the user needs them.
	•	Reduced Bundle Size: Large applications can be split into smaller chunks, reducing the size of the initial bundle.
	•	Better User Experience: By loading non-essential code later, users experience faster load times and can interact with your app sooner.




## Redux
#### OLD
* npm install react-redux
* npm install redux-thunk
* npm install redux-devtools-extension --save

* Creating store
```
------------------Index.js-------------------------------
	import { Provider } from 'react-redux'
	import store from './store'

	const rootElement = document.getElementById('root')
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		rootElement
	)

	------------------store.js-----------------------------------
		import {createStore, 
			combineReducers} from 'redux'
		
		import {applyMiddleware} from 'redux'
		
		import thunk from 'redux-thunk'
		import { composeWithDevTools } from "redux-devtools-extension";
		
		
		const initialState={
		
		}
		
		const reducer = combineReducers({first:firstReducer});
		const middleware =[thunk]
		
		const store= createStore(
			reducer,
			initialState,
			composeWithDevTools(applyMiddleware(...middleware))
		)
		
		export default store

```
### NEW
```
import { configureStore } from '@reduxjs/toolkit'
const reducer = {
    todos:[],
    visibilityFilter: 'SHOW_COMPLETED',
    someOtherReducer:{}
  }

  const preloadedState = {
    todos: [
      {
        text: 'Eat food',
        completed: true,
      },
      {
        text: 'Exercise',
        completed: false,
      },
    ],
    visibilityFilter: 'SHOW_COMPLETED',
  }
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),//.concat(logger),
    //default middlewares are [thunk, immutableStateInvariant, serializableStateInvariant]
    devTools: true, //process.env.NODE_ENV !== 'production',
    preloadedState,
  
  })

  export default store
 ```
* Action
```js
export const addNoteAction=(subject,desc)=>async(dispatch)=>{
    
    dispatch({
        type: NOTES_ADD_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "http://localhost:5000/notes/addNote",
        { subject,desc },
        config
      );
      
  
      dispatch({
        type: NOTES_ADD_SUCCESS,
        payload: data,
      });

}
```

* Reducer
```js
export const addNoteReducer=(state={},data)=>{
    switch (data.type){
        case NOTES_ADD_REQUEST:
            return{loading:true}
        case NOTES_ADD_SUCCESS:
            return{
                loading:false,
                id:data.payload
            }
        default:
            return state
    }
}
```

## Points

* cannot have hooks under any condition
	* if React find that number of hooks is different in consecutive renders it will through errors.
	* This is why we need to define hooks at tops of any  function.
	
* useEffect is called only after the render or return in case of functional component.
	* But since useEffect is at top the function is hoisted in stack.
 
 
* Reducer
	* A function which takes a state and action OBJECT
	* and return new state based on the action
	
* react-codemod
	* Facebook released react-codemod with every new version of react 
	* developer can use this to migrate the code breaking changes to new version.
* Preact
	* totally different library very much similar to react
	* library size is 9k, while for react it is 35k
	
	
* Animation
	* mojs
	* react-motion
	 
* Form validation
	* react-forms

* useCallback -> to memotize a function
* useMemo -> to memotize a value

## Code-Splitting in Build Tools

React itself supports lazy loading which helps in code splitting, but when you bundle your app (e.g., with Webpack), you can optimize it even further with dynamic imports.

For example, Webpack can automatically split the code into smaller chunks:

below dynamically imports the component and splits the code into a separate chunk, which is only downloaded when needed. Webpack will create separate .js files for each of these chunks during the build process.
```js
import('./MyComponent').then(MyComponent => {
  // Do something with the dynamically imported module
});
```

## Extras
#### event.target and event.currentTarget
* event.target
Definition: event.target refers to the element that actually triggered the event. It is the deepest element in the DOM hierarchy that the event originated from.
Use Case: It is useful when you need to know exactly which element the user interacted with, especially in cases where events are delegated (i.e., multiple elements share a single event handler).
Example: If you have an event listener attached to a parent element, but the event was triggered by a child element, event.target will refer to the child element.
* event.currentTarget
Definition: event.currentTarget refers to the element to which the event handler is attached. It represents the element currently processing the event.
Use Case: It is useful when you want to refer to the element that the event handler is bound to, regardless of which child element was clicked.
Example: If the event handler is attached to a parent element, event.currentTarget will always refer to that parent element, even if a child element was clicked.
```js
import React from 'react';

function MyComponent() {
  const handleClick = (event) => {
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
    console.log('Target Value:', event.target.value);
    console.log('Current Target Value:', event.currentTarget.value);
  };

  return (
    <div onClick={handleClick}>
      <button value="Button Value">Click Me</button>
    </div>
  );
}
export default MyComponent;
//output
//Target: <button value="Button Value">Click Me</button>
//Current Target: <div>...</div>
//Target Value: "Button Value"
//Current Target Value: undefined
```

* Scenario: Clicking the Button
* event.target will be the <button> element because that’s the element the user clicked on.
* event.currentTarget will be the <div> element because that’s the element to which the handleClick event handler is attached.

* Use of ref
  * In case we are entering value in form and submitting the data.
  * In this scenario, we do need to save the data in state, and update page on every input
  * We can directly use ref to pass the data to submit action.
  * This will save a lot of re-render

## Links

* https://www.adaface.com/blog/react-interview-questions/#q116
* https://slawkolodziej.com/posts/guide-testing-redux-connected-components-with-react-testing-library-and-jest
* https://www.youtube.com/watch?v=-CwzaTKniH4  -- charts/graph in react (rechart)
* https://www.youtube.com/watch?v=ajTvmGxWQF8  -- Arrow function
* https://daveceddia.com/what-is-a-thunk/      -- Define redux-thunk
