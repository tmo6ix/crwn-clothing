import React, { Fragment, useContext} from "react";
import { Outlet, Link } from "react-router-dom"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as Crwnlogo} from '../../assests/crown.svg'
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.style'

function Navigation () {
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  

 

  return (
    <Fragment>
      <NavigationContainer>

        <LogoContainer to='/'>
            <Crwnlogo className="logo"/>
        </LogoContainer>
      
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {
            currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              {' '}
              SIGN OUT {' '}
            </NavLink> ) : (<NavLink to='/auth'>SIGN IN</NavLink>)
          }
          
          <CartIcon/>

        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />

    </Fragment>
  )
}

export default Navigation;