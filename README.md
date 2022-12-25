## About Guuuuuuugle
![Guuuuuuugle](https://images2.imgbox.com/de/c2/AYc6oZ07_o.png)

Guuuuuuugle is a google search clone
It makes use of APIs that webscrape the internet to provide the search results

The main business logic happens in the `ResultContextProvider.js`

![ResutContext.js](https://images2.imgbox.com/0b/3b/TMds0vJM_o.png)
  
This  code  defines  a  custom  context  called  `ResultContext`  using  the  `createContext`  function  from  the  react  package.

The  context  is  used  to  share  state  and  functions  related  to  search  results  between  components  in  a  React  application.

The  `ResultContextProvider`  component  is  a  function  component  that  provides  the  `ResultContext`  to  its  children.

It  uses  the  `useState`  hook  to  define  three  pieces  of  state: `results`, `isLoading`, and  `searchTerm`.


The  results  state  is  an  array  that  stores  the  search  results  returned  from  the  API. The  `isLoading`  state  is  a  boolean  that

indicates  whether  the  search  is  currently  in  progress. The  `searchTerm`  state  is  a  string  that  stores  the  current  search  term.

 
The  `ResultContextProvider`  component  also  defines  a  function  called  `getResults`, which  is  used  to  perform  a  search  and  fetch

the  results  from  the  API. This  function  uses  the  fetch  function  to  make  a  GET  request  to  the  API, and  it  stores  the  returned  data  in  the  results  state  using  the  `setResults`  function. The  `isLoading`  state  is  also  updated  to  reflect  the  current  status  of  the  search.

Finally, the  `ResultContextProvider`  component  returns  a  `ResultContext.Provider`  element, which  is  used  to  provide  the  `ResultContext`

to  its  children. The  value  prop  of  the  Provider  element  is  an  object  that  contains  the  `getResults`, `results`, `searchTerm`, `setSearchTerm`, and  isLoading  values, which  can  be  accessed  by  the  children  using  the  `useContext`  hook.

The  `useResultContext`  function  is  a  custom  hook  that  makes  it  easier  to  access  the  `ResultContext`  from  any  component.

It  simply  calls  the  `useContext`  hook  with  the  ResultContext  object  as  an  argument. This  allows  components  to  access  the  `getResults`, `results`, `searchTerm`,

`setSearchTerm`, and  `isLoading`  values  simply  by  calling  `useResultContext()`.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
