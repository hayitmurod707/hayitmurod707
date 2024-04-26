import Router from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
const StyledElement = styled.div`
   background-color: rgb(226, 228, 234);
   border-radius: 1px;
   height: 200px;
   position: fixed;
   right: calc(50% - 603px);
   top: calc(50% - 100px);
   width: 3px;
   border-radius: 2px;
   @media screen and (max-width: 1440px) {
      right: calc(7% - 3px);
   }
   & div {
      background-color: var(--black);
      height: var(--height);
      width: 3px;
      border-radius: 2px;
   }
`;
const ScrollProgress = () => {
   const [percent, setPercent] = useState(0);
   const scroll = useCallback(() => {
      const percent = Math.round(
         ((window.pageYOffset + window.innerHeight) /
            document.body.scrollHeight) *
            100
      );
      setPercent(percent);
   }, []);
   useEffect(() => {
      scroll();
      Router.onRouteChangeComplete = () => scroll();
      window.addEventListener('scroll', scroll);
      return () => {
         window.removeEventListener('scroll', scroll);
      };
   }, [scroll]);
   return (
      <StyledElement>
         <div style={{ '--height': percent + '%' }}></div>
      </StyledElement>
   );
};
export default ScrollProgress;
