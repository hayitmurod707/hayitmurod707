import { Squash } from 'hamburger-react';
import { bool, func } from 'prop-types';
import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
const Style = createGlobalStyle`
   html,
	body {
      overflow: hidden !important;
   }
`;
const animation = keyframes`
	100% {
		transform: rotate(1turn);
	}
`;
const StyledElement = styled.div`
   background-color: transparent;
   height: 48px;
   left: 25px;
   position: fixed;
   top: 25px;
   width: 48px;
   z-index: 998;
   &:before {
      animation-delay: 0;
      animation-duration: 12s;
      animation-iteration-count: infinite;
      animation-name: ${animation};
      animation-timing-function: linear;
      border-radius: 50%;
      border: 2px dashed #000000;
      content: '';
      height: calc(100% + 10px);
      left: -6px;
      position: absolute;
      top: -6px;
      width: calc(100% + 10px);
      z-index: -1;
   }
`;
const ToggleButton = ({ open, setOpen }) => (
   <StyledElement>
      <Squash
         distance='sm'
         easing='ease'
         onToggle={() => setOpen(!open)}
         size={20}
         toggled={open}
      />
      {open && <Style />}
   </StyledElement>
);
ToggleButton.defaultProps = {
   open: false,
};
ToggleButton.propTypes = {
   open: bool,
   setOpen: func.isRequired,
};
export default ToggleButton;
