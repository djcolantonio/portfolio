// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import colantonio from '../assets/colantonio.png'
import sh from '../assets/sh.png'
import sh2 from '../assets/sh1.png'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Colantonio Contracting</h3>
                    <div className='proj'><img src={colantonio} alt="Uniswap Swap Page" /></div>
                    <p className='info'>A simple site I developed, deployed and maintain on cPanel. I used my background of HTML and CSS for this project.
                    </p>

                    <a href="https://colantoniocandm.com/" target="_blank" className="button">Site</a>
                    {/* <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a> */}
                </div>

                <div className="projects__card">
                    <h3>Safe Haven Sober Living</h3>
                    <div className='proj'><img src={sh} className='proj1' alt="sh" /></div>
                    <p className='info'>Another site made for a family business, but this was made via Google Sites. I am thinking about giving it an update soon using React.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </p>

                    <a href="https://www.safehavensoberliving.org/" target="_blank" className="button">Site</a>
                    {/* <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a> */}
                </div>

                <div className="projects__card">
                    <h3>Safe Haven Sober Living Update</h3>
                    <div className='proj'><img src={sh2} className='proj1' alt="sh2" /></div>
                    <p className='info'>I updated previous site with Next.js, HTML and CSS and deployed it to Vercel via Git command line. 
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    
                   
                  
                    </p>

                    <a href="https://safehaven-djcolantonio.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/djcolantonio/safehaven" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;