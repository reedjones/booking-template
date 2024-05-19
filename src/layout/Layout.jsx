// eslint-disable-next-line no-unused-vars
import React from "react";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";


const Layout = (props) => {
    return (
      <div className="flex flex-col min-h-screen">
           <Header/>
          <main className="flex-1">
                {props.children}
          </main>
            <Footer/>
      </div>
    )
}


export default Layout;