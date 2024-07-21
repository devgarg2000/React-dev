import React from 'react';
import Food from './Basics/Food.jsx'
import Card from './Basics/Card.jsx'
import Header from './Basics/Header.jsx'
import Footer from './Basics/Footer.jsx'
import Student from './Basics/Student.jsx'
import Button from './Button/Button.jsx' 
import UserGreeting from './Basics/UserGreetings.jsx'
import Test from './Basics/testing.jsx';
// function App() {

//   return (
//     <>
//       <Header/>
//       <Food/>
//       <Footer/>
//     </>
//   );
// }

// function App() {

//   return (
//     <>
//       <Student name="Spongebob" age={30} isStudent={true}/>
//       <Student name="Patrick" age={42} isStudent={false}/>
//       <Student name="Dev" age={30} isStudent={false}/>
//       <Student name="Roman" age={40} isStudent={true}/>
//       <Student name="Hedrick" age={32} isStudent={false}/>
//       <Student name="Josy" age={47} isStudent={true}/>
//       <Student/>
//       <Student name="Dev"/>
//     </>
//   );
// }

// function App() {

//   return (
//     <>
//       <UserGreeting isLoggedIn={false} username="Dev Garg"/>
//       <UserGreeting isLoggedIn={false} username="Dev Garg"/>
//     </>

    
//   );
// }

// Arrow Functions
// const greet = (name) => `Hello, ${name}!`;
// const add = (a, b) => a + b;
// const square = num => num * num;

// // Template Literals
// const name = 'John';
// const message = `Hello, ${name}!`;
// const age = 30;
// const details = `Name: ${name}, Age: ${age}`;
// const item = 'apple';
// const price = 1.5;
// const costMessage = `The price of an ${item} is $${price}.`;

// // Destructuring Assignment
// const person = { name: 'John', age: 30 };
// const { name: personName, age: personAge } = person;
// const numbers = [1, 2, 3];
// const [first, second] = numbers;
// const coordinates = { x: 10, y: 20 };
// const { x: posX, y: posY } = coordinates;

// // Spread and Rest Operators
// const moreNumbers = [...numbers, 4, 5];
// const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
// const user = { name: 'John', age: 30 };
// const updatedUser = { ...user, age: 31 };

// // Classes and Inheritance
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     return `${this.name} makes a noise.`;
//   }
// }

// class Dog extends Animal {
//   speak() {
//     return `${this.name} barks.`;
//   }
// }

// const myDog = new Dog('Rex');

// // Promises and Async/Await
// const fetchData = async () => {
//   try {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// const displayData = async () => {
//   const data = await fetchData();
//   console.log(data);
// };

// // Default Parameters
// const multiply = (a, b = 1) => a * b;
// const greetWithDefault = (name = 'Guest') => `Hello, ${name}!`;
// const logMessage = (message = 'No message provided') => console.log(message);

// function App() {
//   return (
//     <div>
      {/* <h1>{message}</h1>
      <p>{details}</p>
      <p>Cost Message: {costMessage}</p>
      <p>More Numbers: {moreNumbers.join(', ')}</p>
      <p>Sum: {sum(1, 2, 3, 4, 5)}</p>
      <p>Dog Says: {myDog.speak()}</p>
      <button onClick={displayData}>Fetch Data</button>
      <p>Product: {multiply(5, 3)}</p> */}
//       <Test/>
//     </div>
//   );
// }





// export default App
