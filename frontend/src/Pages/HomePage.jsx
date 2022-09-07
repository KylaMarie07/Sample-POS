import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'


function HomePage() {
  return (
    <MainLayout>
                <div className='bg-light p-5 mt-4 rounded-3'>
                    <h1>Welcome to simple POS for small business</h1>
                    <p>If you have an issue, call +639757664378</p>
                    <Link to='/pos' className="btn btn-primary">Click here to products</Link>
                </div>
           
    </MainLayout>
  )
}

export default HomePage