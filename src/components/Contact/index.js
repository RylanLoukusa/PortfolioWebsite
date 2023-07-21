import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return ()=> clearTimeout(idTimeOut);
    },[])
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
                'service_v81p0qh',
                'template_vccg84h',
                refForm.current,
                'H9MSTS_NHTTadTGLE'
            )
            .then(
                () => {
                    alert('Message succesfully send!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                    />
                </h1>
                <p className="description">
                    I am interested in software engineering internships. 
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="lower">
                <div className="info-map">
                    Rylan Loukusa,
                    <br />
                    United States,
                    <br />
                    Monticello, Minnesota <br />
                </div>
                <div className="wrap-map">
                <MapContainer center={[45.3055, -93.7941]} zoom={8} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[45.3055, -93.7941]}>
                            <Popup>
                            I am located here!
                            </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default Contact