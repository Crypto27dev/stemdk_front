import React from "react"
import AppNavbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <AppNavbar />

      <main>{children}</main>

      <div className="mt-4">
        <Footer />
      </div>
    </>
  )
}

export default Layout
