import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import '../css/styles2.css'
import Navigation2 from "../components/Navigation2";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in";

export default function Layout({ children }) {
  return (
    <div>
      <FadeIn>
        <Navigation2
          text="background-blue"
          button="become-a-member-b"
        />
        <div>
          {children}
        </div>
        <Footer/>
      </FadeIn>
    </div>
  )
}