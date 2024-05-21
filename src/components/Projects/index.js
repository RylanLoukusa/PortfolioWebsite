import './index.scss'
import  EtchPic from '../../assets/images/EtchPic.png'
import  CalcPic from '../../assets/images/CalcPic.png'
import  RpsPic from '../../assets/images/RpsPic.png'
import  GamePic from '../../assets/images/GamePic.png'

const Projects = () => {

    return (
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                  My Projects
                </h1>
                <h3>
                    Click on a project to open it! (Most not mobile friendly)
                </h3>
                <ul>
                    <li>
                     <a href ="https://star-squad.itch.io/undergraduate-project" target="_blank"> <img src={GamePic} alt="GamePic" /></a>
                    </li>
                    <li>
                     <a href ="https://rylanloukusa.github.io/etch-a-sketch/" target="_blank"> <img src={EtchPic} alt="EtchPic" /></a>
                    </li>
                    <li>
                     <a href ="https://rylanloukusa.github.io/calculator/" target="_blank"> <img src={CalcPic} alt="CalculatorPic" /></a>
                    </li>
                    <li>
                        <a href ="https://rylanloukusa.github.io/rpsgame/" target="_blank"> <img src={RpsPic} alt="RpsPic" /></a>
                    </li>
                </ul>
                
                
               
                

            </div>
        </div>
    )
}

export default Projects;