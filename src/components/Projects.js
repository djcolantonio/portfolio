// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import colantonio from '../assets/colantonio.png'
import sh from '../assets/sh.png'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Colantonio Contracting</h3>
                    <img src={colantonio} alt="Uniswap Swap Page" />
                    <p>A simple site I developed, deployed and maintain on cPanel. I used my background of HTML and CSS for this project.
                    </p>

                    <a href="https://colantoniocandm.com/" target="_blank" className="button">Site</a>
                    {/* <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a> */}
                </div>

                <div className="projects__card">
                    <h3>Safe Haven Sober Living</h3>
                    <img src={sh} alt="sh" />
                    <p>Another site made for a family business, but this was made via Google Sites. I am thinking about giving it an update soon using React.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </p>

                    <a href="https://www.safehavensoberliving.org/" target="_blank" className="button">Site</a>
                    {/* <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a> */}
                </div>

                {/* <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div> */}
            </div>
        </section>
    );
}

export default Projects;