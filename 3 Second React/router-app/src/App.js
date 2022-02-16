import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/Navbar';
import Error from './components/pages/Error';
import Post from './components/pages/Post';

function App(){
    return(
        <>  
            <h1>App</h1>
            {/* <Navbar/> */}
            <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>

              {/* <Route path="/post/contact" element={<Post/>}/> */}
              <Route path="/post/:contact" element={<Post/>}/>
              <Route path="/post/:contact/:id" element={<Post/>}/>

              <Route path='*' element={<Error/>}/>
            </Routes></BrowserRouter>
        </>
    );
}

export default  App;