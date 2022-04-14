import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import IconBar from '../bars-solid.svg';
import Close from '../times-solid.svg'
import ChartIcon from '../shopping-cart-solid.svg'

class Nav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       toggle: false
    }
  }  

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render(){
    const { toggle } = this.state;

    return (
    <div className='nav-wrapper'>

      <div className='iconBar' onClick={this.handleToggle}>
        <img src={IconBar} alt='' width='20px'/>
      </div>

      <div className='logo'>
        <h2><Link to='/'>Level Up</Link></h2> 
      </div>

      <nav className='nav'>
        <ul className={toggle ? "toggle" : ""} >
          <li><Link className='nav-items' to='/'>Home</Link></li>
          <li><Link className='nav-items' to='/shop'>Shop</Link></li>
          <li><Link className='nav-items' to='/blog'>Blog</Link></li>
          <li><Link className='nav-items' to='/about'>About</Link></li>
          <li><Link className='nav-items' to='/contact'>Contact</Link></li>
          <li><Link className='nav-items' to='/login'>Login </Link></li>
          <li><Link className='nav-items' to='/register'>Register</Link></li>

          <li className='close' onClick={this.handleToggle}>
             <img src={Close} alt='' width='20px'/>
          </li>
        </ul>
        <div className='nav-chart'>
          <span>0</span>
          <Link to='/chart'>
              <img src={ChartIcon} alt='' width='20px' />
          </Link>
          
        </div>
      </nav>
    </div> 
    )
  }
}
export default Nav;