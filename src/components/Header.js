    // Import Assets
    import profile from '../assets/profile.jpg';

    const Header = () => {
        return (
            <section className='header'>
                <img src={profile} alt="Daniel Colantonio" />

                <div className='header__content'>
                    <h1>Daniel Colantonio</h1>
                    <br></br>
                    <h2>Partner Integration Analyst</h2>
                    <br></br>
                    {/* <h3>*Aspiring Blockchain Developer*</h3> */}

                </div>
            </section>
        );
    }

    export default Header;