import Head from 'next/head';
import React, { useEffect } from 'react';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';
import ScrollOut from 'scroll-out';
import { StyledMain, StyledScrollOut } from '../components/Home/StyledElements';
const Home = () => {
   useEffect(() => {
      const scroll = ScrollOut({
         offset: 0.2,
         cssProps: {
            visibleY: true,
            viewportY: true,
         },
      });
      return () => {
         scroll.teardown();
      };
   }, []);
   return (
      <>
         <Head>
            <title>Hayitmurod Eshimov</title>
         </Head>
         <StyledMain></StyledMain>
         <StyledScrollOut>
            <div className='content'>
               <h2 data-scroll>
                  <span>WEB APPLICATIONS</span>
                  <span>WEB SITES</span>
               </h2>
            </div>
         </StyledScrollOut>
         <section style={{ height: '100vh' }}>
            <h1>
               <MouseParallax shouldResetPosition={true} strength={0.2}>
                  I{`'`}m software engineer
               </MouseParallax>
            </h1>
            <h1 style={{ margin: 0 }}>I{`'`}m reacting to mouse move</h1>
         </section>
         <section style={{ height: '100vh' }}>
            <h1 style={{ margin: 0 }}>
               <ScrollParallax strength={0.2}>
                  I{`'`}m reacting to scroll
               </ScrollParallax>
            </h1>
         </section>
         <section style={{ height: '100vh' }}>Home</section>
      </>
   );
};
export default Home;
