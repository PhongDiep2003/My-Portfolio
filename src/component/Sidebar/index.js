import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faG} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return  (
  
  <div className='nav-bar'>
    <Link className='logo' to={'/'}>
        <img src={LogoS} alt="logo"/>
        <img src={LogoSubtitle} alt="slobodan" className='sub-logo'/>
    </Link>
    {/* add nav that link to every single page */}
    <nav>
      <NavLink exact="true" activeclassname="active" to='/'>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
      </NavLink>

      <NavLink exact="true" activeclassname="active" className={'about-link'} to='/about'>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
      </NavLink>

      <NavLink exact="true" activeclassname="active" className={'contact-link'} to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
      </NavLink>
    </nav>

    <ul>
        <li>
            {/* Link that directs to linkend account */}
            <a target={"_blank"} rel='noreferrer' href='https://www.linkedin.com/feed/?trk=404_page'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>

        <li>
            {/* Link that directs to github account */}
            <a target={"_blank"} rel='noreferrer' href='https://github.com/PhongDiep2003'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
    </ul>
  
  
  
  
  
  </div>
  
  )
}
export default Sidebar