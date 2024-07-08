import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav>
        <div className='left'> Profolio</div>
        <div className='right'>
        <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/project"><li>Projects</li></Link>
                    <Link to="/contact"><li>Contact Me</li></Link>
        </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar
