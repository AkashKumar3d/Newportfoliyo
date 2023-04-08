import React from 'react'

const Hader = () => {
  return (
   <nav>
    <Navcontent/>
   </nav>
  )
}

const Navcontent =()=>(
    <>
    <h2>Akash.</h2>
    <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        <a href="#services">Services</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contacts</a>
    </div>
    <a href="mailto:official.akashit@gmail.com">
        <button>Email</button>
    </a>
    </>
)
export default Hader
