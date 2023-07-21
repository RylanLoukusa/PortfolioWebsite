import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import cLogo from '../../assets/images/c++Logo.png'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return ()=> clearTimeout(idTimeOut);
    },[])


    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={aboutArray}
                        idx={15}
                    />
                </h1>
                <p>
                I am a passionate and driven software engineering student with experience in C++, JavaScript, and problem-solving. 
                </p>
                <p>
                I'm queitly confident, naturally curious, and With a thirst for knowledge and a love for technology, 
                I am constantly expanding my skill set and staying updated with industry trends.
                </p>
                <p>
                In addition to my technical skills, I possess excellent communication and interpersonal abilities. 
               </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                         <img src={cLogo} alt="cLogo" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare } color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;

