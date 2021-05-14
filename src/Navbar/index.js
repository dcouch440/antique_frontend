import React, { useState, useRef, useContext } from 'react';
import { Nav, Menu } from './styles';
import DropDown from './DropDown';
import Avatar from './Avatar';
import { Context } from '../Context';


export default function Navbar () {
  const [menu, setMenu] = useState('none');
  const menuButton = useRef();
  const { setScrollBehavior, currentUser } = useContext(Context);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setMenu(prev => prev === 'none' ? 'initial' : 'none');
  };

  const handleModalChange = () => {
    setScrollBehavior(prev => !prev);
    setShow(prev => !prev);
  };

  return (
    <>
        { show && <Avatar hideAvatar={handleModalChange} currentUser={currentUser} /> }
        <Nav>
          <Menu className={'menu-button'} ref={menuButton} onClick={handleClick}>
            ☰
          </Menu>
          <DropDown showAvatar={handleModalChange} currentUser={currentUser} display={menu} />
        </Nav>

    </>
  );
}