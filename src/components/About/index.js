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
                    Software engineering student at St. Cloud State University, expected to graduate in May 2025, with experience in quality assurance, front-end development.
                </p>
                <p>
                    Interned at Immersion Data Solutions, where I worked on comprehensive testing and implemented front-end stories using React.
                </p>
                <p>
                    My technical skills include C++, JavaScript, Python, and experience with various development tools and methodologies, demonstrated through projects like an event planner application and an interactive learning experience using Unity.
                </p>
               <button className='resume'>
                    <a href="https://www.resume.lol/share/w003sib" target="_blank">Resume</a>
               </button>
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

