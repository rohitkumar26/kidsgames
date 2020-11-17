import React from "react"
import { Link } from "gatsby"

import '../styles/globalstyle.css'
export default function Home() {
  return (
    <div className="wrapper">
      <div className="mainpage">
        <h1 className="heading1">Kids games</h1>
        <Link to="/alphabets" className="links">Alphabets</Link> <br />
        <Link to="/numbers" className="links">Numbers</Link>

      </div>
    </div>
  )
}
