import { useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoL from '../../../assets/images/logo-l.png'
import './index.scss'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    const pathVariants = {
        hidden: {
          pathLength: 0
        },
        visible: {
          pathLength: 1,
          transition: {
            duration: 10,
          }
        }
      }

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
          })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
      }, [])

    return (
        <div className="logo-container-l" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo-l" src={LogoL} alt="R" />
            <svg
                width="700pt"
                height="980pt"
                version="1.0"
                viewBox="0 0 740 935"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                className="svg-container-l"
                transform="translate(0 457) scale(.1 -.1)"
                fill="none"
                >
                    <motion.path
                        d="M 95.66,1045.74
                        C 95.66,1045.74 95.66,75.56 95.66,75.56
                          95.66,75.56 243.91,75.56 243.91,75.56
                          243.91,75.56 243.33,920.67 243.33,920.67
                          243.33,920.67 669.91,917.56 669.91,917.56
                          669.88,916.51 669.91,919.50 669.91,919.50
                          669.91,919.50 670.21,1043.70 670.50,1044.50
                          670.50,1044.50 95.66,1045.74 95.66,1045.74 Z
                        M 29.06,1046.09
                        C 29.06,1046.09 29.22,75.44 29.22,75.44
                          29.22,75.44 95.98,75.44 95.98,75.44
                          95.98,75.44 96.65,1046.07 96.65,1046.07
                          96.65,1046.07 29.06,1046.09 29.06,1046.09 Z
                        M 21.00,1046.09
                        C 21.00,1046.09 31.33,1046.09 31.33,1046.09"
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </g>
            </svg>
        </div>
    )
};

export default Logo;