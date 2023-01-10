import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../assets/profile-photo.png'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="minha foto"/>
      <p className="title">Front End Developer</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className="btn">Baixe meu CV</a>
    </aside>
  )
}

export default Sidebar;
