import { Toaster } from "react-hot-toast";
import Hader from "./components/Hader";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
   <>
   <Hader/>
   <Home/>
   <Work/>
   <Timeline/>
   <Services/>
   <Testimonial/>
   <Contact/>
   <Toaster/>
   <Footer/>
   </>
  );
}

export default App;
