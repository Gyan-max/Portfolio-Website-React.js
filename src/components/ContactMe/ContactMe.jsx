import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
    return (
        <section className='contact-container'>
            <h5>Contact Me</h5>

            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl={"./assets/images/email.png"}
                        text=<a href='mailto:gyanranjan4427gmail.com'>gyanranjan4427gmail.com</a>
                    />

                    <ContactInfoCard
                        iconUrl={"./assets/images/github.png"}
                        text=<a href='https://github.com/Gyan-max'>Gyan-max</a>
                    />

                    <ContactInfoCard
                        iconUrl={"./assets/images/linkedin.png"}
                        text=<a href='https://www.linkedin.com/in/gyan-ranjan-6b2a88202/'>Gyan-ranjan</a>
                    />

                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>

            </div>

        </section>
    )
}

export default ContactMe