import React from "react"
import NavBar from "./NavBar";
import Footer from "./Footer"

class Layout extends React.Component {
  render(){
    return (
      <>
        <NavBar />
        <main>{this.props.children}</main>
        <Footer/>
      </>
    )
  }
}
export default Layout;