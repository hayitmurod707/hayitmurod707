import Link from 'next/link';
import { bool, func } from 'prop-types';
import React from 'react';
import { push as ReactBurgerMenu } from 'react-burger-menu';
import sal from 'sal.js';
import styled from 'styled-components';
const reactBurgerMenuOptions = {
   customBurgerIcon: false,
   customCrossIcon: false,
   disableCloseOnEsc: false,
   onStateChange: () => {
      sal({
         animateClassName: 'sal-animate',
         disabled: false,
         once: false,
         root: null,
         rootMargin: '0% 0%',
         selector: '[data-sal]',
         threshold: 0.3,
      }).reset();
   },
   outerContainerId: 'outer-container',
   pageWrapId: 'page-wrap',
   width: '100vw',
   styles: {
      bmMenuWrap: {
         zIndex: 997,
      },
      bmMenu: {
         backgroundColor: '#f5f5f3',
         height: '100%',
      },
      bmItemList: {
         height: '100%',
      },
      bmOverlay: {
         display: 'none',
      },
   },
};
const StyledElement = styled.div`
   display: flex !important;
   flex-direction: column;
   flex-wrap: nowrap;
   height: 100vh;
   justify-content: center;
   overflow-y: auto;
   padding: 40px 0;
   width: 100%;
   & .pages {
      display: flex;
      justify-content: center;
      list-style-type: none;
      margin: 0;
      padding: 0;
      & li {
         cursor: pointer;
         font-size: 44px;
         letter-spacing: 3px;
         font-weight: 600;
         &:nth-child(2) {
            margin: 0 30px;
         }
         @media (max-width: 768px) {
            font-size: 70px;
            &:nth-child(2) {
               margin: 0 15px;
            }
         }
         & a {
            color: var(--black);
            text-decoration: none;
         }
      }
   }
   & .contacts {
      align-items: center;
      display: flex;
      flex-direction: column;
      list-style-type: none;
      margin: 0;
      padding: 30px 0 0 0;
      & li {
         font-size: 24px;
         font-weight: 500;
         margin: 10px 0;
         @media screen and (max-width: 768px) {
            font-size: 22px;
         }
         @media screen and (max-width: 576px) {
            font-size: 20px;
         }
         & a {
            color: var(--black);
            padding: 0 40px 0 0;
            text-decoration: none;
         }
      }
   }
`;
const Sidebar = ({ open, setOpen }) => (
   <ReactBurgerMenu {...reactBurgerMenuOptions} isOpen={open}>
      <StyledElement>
         <ul className='pages'>
            <li
               data-sal-delay='100'
               data-sal-duration='100'
               data-sal-easing='ease'
               data-sal='slide-down'
               onClick={() => setOpen(!open)}
            >
               <Link href='/'>
                  <a>Home</a>
               </Link>
            </li>
            <li
               data-sal-delay='200'
               data-sal-duration='200'
               data-sal-easing='ease'
               data-sal='slide-down'
               onClick={() => setOpen(!open)}
            >
               <Link href='/works'>
                  <a>Works</a>
               </Link>
            </li>
            <li
               data-sal-delay='300'
               data-sal-duration='300'
               data-sal-easing='ease'
               data-sal='slide-down'
               onClick={() => setOpen(!open)}
            >
               <Link href='/about'>
                  <a>About</a>
               </Link>
            </li>
         </ul>
         <ul className='contacts'>
            <li
               data-sal-delay='50'
               data-sal-duration='50'
               data-sal-easing='ease'
               data-sal='zoom-out'
            >
               <a onClick={() => setOpen(!open)} href='tel:+998933030207'>
                  +99 893 303 02 07
               </a>
            </li>
            <li
               data-sal-delay='100'
               data-sal-duration='100'
               data-sal-easing='ease'
               data-sal='zoom-out'
            >
               <a
                  href='https://mail.google.com/mail/u/0/#inbox?compose=new'
                  onClick={() => setOpen(!open)}
                  target='_blank'
                  rel='noreferrer'
               >
                  hayitmurod707@gmail.com
               </a>
            </li>
         </ul>
         <ul className='contacts'>
            <li
               data-sal-delay='150'
               data-sal-duration='150'
               data-sal-easing='ease'
               data-sal='zoom-out'
            >
               <a
                  href='https://github.com/hayitmurod707'
                  onClick={() => setOpen(!open)}
                  target='_blank'
                  rel='noreferrer'
               >
                  Github
               </a>
            </li>
            <li
               data-sal-delay='200'
               data-sal-duration='200'
               data-sal-easing='ease'
               data-sal='zoom-out'
            >
               <a
                  href='https://gitlab.com/hayitmurod707'
                  onClick={() => setOpen(!open)}
                  target='_blank'
                  rel='noreferrer'
               >
                  Gitlab
               </a>
            </li>
            <li
               data-sal-delay='250'
               data-sal-duration='250'
               data-sal-easing='ease'
               data-sal='zoom-out'
            >
               <a
                  href='https://www.facebook.com/hayitmurod.eshimov'
                  onClick={() => setOpen(!open)}
                  target='_blank'
                  rel='noreferrer'
               >
                  Facebook
               </a>
            </li>
            <li
               data-sal-delay='300'
               data-sal-duration='300'
               data-sal-easing='ease'
               data-sal='zoom-out'
            >
               <a
                  href='https://www.instagram.com/hayitmurod707/'
                  onClick={() => setOpen(!open)}
                  target='_blank'
                  rel='noreferrer'
               >
                  Instagram
               </a>
            </li>
            <li
               data-sal-delay='350'
               data-sal-duration='350'
               data-sal-easing='ease'
               data-sal='zoom-out'
            >
               <a
                  href='https://www.linkedin.com/in/hayitmurod-eshimov-29b0b1207/'
                  onClick={() => setOpen(!open)}
                  target='_blank'
                  rel='noreferrer'
               >
                  Linkedin
               </a>
            </li>
         </ul>
      </StyledElement>
   </ReactBurgerMenu>
);
Sidebar.defaultProps = {
   open: false,
};
Sidebar.propTypes = {
   open: bool,
   setOpen: func.isRequired,
};
export default Sidebar;
