import { useState } from 'react';
import Header from './Header.jsx';
import Person from './Person.jsx';
import Footer from './Footer.jsx';
import './App.css';

const App = () => {
  
  return (
   <div>
    <Header logo='HR-App'/>
    <main>
      <Person firstNameLastName= 'Jane Dow' title='Teacher' salary='€3800' phone='007' email='unavailable' animal='MeerKat'/>
      <Person firstNameLastName= 'Jane Dow' title='Teacher' salary='€3800' phone='007' email='unavailable' animal='MeerKat'/>
      <Person firstNameLastName= 'Jane Dow' title='Teacher' salary='€3800' phone='007' email='unavailable' animal='MeerKat'/>
      <Person firstNameLastName= 'Jane Dow' title='Teacher' salary='€3800' phone='007' email='unavailable' animal='MeerKat'/>
    </main>
    <Footer copyRight={'Binyam Angamo - REACT25S'}/>
   </div>
  );
};

export default App;
