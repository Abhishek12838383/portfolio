import './App.css';
import Navbar from './navbar/Navbar';
import Header from './header/Header'
import About from './about/About';
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'

function App() {
  return (
    <div className="App">
    <Navbar/>
<Header/>
<About/>
<Portfolio/>
<Contact/>
    </div>
  );
}

export default App;
