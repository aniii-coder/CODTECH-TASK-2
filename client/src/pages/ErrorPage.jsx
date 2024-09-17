import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='errorPage'>
      <div className="center">
        <Link to='/' className='btnPrime'>Go back home</Link>
        <h1>Page Not Found !</h1>
      </div>

    </section>
  )
}

export default ErrorPage