import React, { useEffect , useState} from 'react';

// component imports
import Blog from './blog';
import Blogs from './blogs';
import Contact from './contact';
import Navbar from "./navbar"

// router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// database import
import db from '../firebaseDB';
import { collection, onSnapshot } from 'firebase/firestore';


function App() {
    const [ state, setState] = useState([])



    useEffect(()=> onSnapshot(collection(db, "posts"), (snapshot)=>{
        setState(snapshot.docs.map((doc)=> doc.data()))
    }),[]);



    return ( <div><BrowserRouter>
        <Navbar />
            <Routes>
              <Route path="/" element={<Blogs blogs={state}/>} />
              <Route path="/:id" element={<Blog props={state}/> } />
              <Route path="contact" element={<Contact />}/>
              
            </Routes>
          </BrowserRouter></div> );
}

export default App;