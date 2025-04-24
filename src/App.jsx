import PersonList from './PersonList.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './App.css';

const App = () => {
  
  return (
   <div className='app'>
    <Header logo='HR-App'/>
    <main>
      <PersonList />
    </main>
    <Footer copyRight={'© Binyam Angamo - REACT25S'}/>
   </div>
  );
};

export default App;
