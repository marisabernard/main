import React from 'react'
import Header from './Header'

const Page = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
)

export default Page
