import Card from '@component/components/card'
import Contact from '@component/components/form'
import Footer from '@component/components/footer'
import Header from '@component/components/header'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Contact />
      <Card title={"Contact Us"} description={"From 9:00am - 7:00pm"} />
      <Footer />
    </div>
  )
}

export default ContactPage