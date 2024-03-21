
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Expertise from './Components/Expertise';
import Services from './Components/Services';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Expertise/>
      <Services/>
      
      <Footer/>
    </div>
  );
}

export default App;
