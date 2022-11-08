import './App.css';
import _Navbar from './components/_Navbar'
import TextForm from './components/TextForm'
import Footer from './components/Footer'

function App() {
  return (
   <>
    <_Navbar title="TextUtilis" aboutText = "About"/>
    <TextForm heading = "Enter the text to analyze" 
     placeholder = "Happy Typing" 
     btntxt1 = "UPPERCASE" 
     btntxt2 = "LOWERCASE" 
     btntxt3 = "CLEAR TEXT" 
     btntxt4 = "FONT 1"
     btntxt5 = "FONT 2"
     btntxt6 = "CAPITALIZE"
     btntxt7 = "COPY TEXT"/>
  <Footer/>
   </>

  );
}

export default App;
