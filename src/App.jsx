import Layout from "./components/Layout"
import  Content from "./components/Content"
import Missing from "./components/Missing"
import Contact from "./components/Contact"

import { Routes, Route } from "react-router-dom"


function App() {

  return (
    
     <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Content />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Missing />}/>

      </Route>

     </Routes>
      
    
  )
}

export default App
