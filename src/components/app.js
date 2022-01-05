import React, { useEffect, useState } from "react";

// component imports
import Blog from "./blog";
import Blogs from "./blogs";
import Contact from "./contact";
import Navbar from "./navbar";
import Loader from "./loader";

// router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// database import
import db from "../firebaseDB";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(
        collection(db, "posts"),
        (snapshot) => {
          setState(snapshot.docs.map((doc) => doc.data()));
        },
        setLoading(false)
      ),
    []
  );

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={loading ? <Loader /> : <Blogs blogs={state} />}
          />
          <Route path="/:id" element={<Blog props={state} />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
