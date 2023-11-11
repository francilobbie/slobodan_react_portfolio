import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()


  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0ow6h65',
        'template_8ehl8ee',
        refForm.current,
        'uep--4yS6cfULj7mG'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again.')
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name="name" placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='text' name="email" placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name="subject" placeholder='Subject' required />
                </li>
                <li>
                  <textarea name='message' placeholder='Message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Franci-lobbie LALANE
          <br />
          France,
          <br />
          1 Avenue des Champs-Elyséés <br />
          Paris 75000 <br />
          <span>francilobbie.lalane+slobodan@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <Map center={[48.8694849, 2.3094449]} zoom={17} scrollWheelZoom={false}>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[48.8694849, 2.3094449]}>
              <Popup>
                Franci-lobbie will be glad to share a coffee with you! 🙂
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
