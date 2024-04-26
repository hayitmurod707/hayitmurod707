import styled from 'styled-components';
export const StyledMain = styled.section`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 800px;
   justify-content: center;
   width: 100%;
   @media screen and (max-width: 1200px) {
      height: 100vh;
   }
`;
export const StyledScrollOut = styled.section`
   display: flex;
   /* justify-content: center; */
   /* align-items: center; */
   align-self: stretch;
   flex-direction: column;
   height: 300vh;
   overflow: hidden;
   width: 100%;
   & .content {
      background-color: red;
      display: flex;
      height: 100vh;
      position: sticky;
      top: 0;
      width: 100%;
      & h2 {
         font-size: 60px;
         height: 100%;
         margin: 0;
         transform: translateX(calc(var(--viewport-y) * 100%));
         width: 100%;
         & span {
            margin: 0 20px 0 0;
         }
      }
   }
`;
