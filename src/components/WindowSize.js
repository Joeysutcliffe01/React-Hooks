// import {useEffect, useState} from 'react';

// export default function WindowSize({setWindowSize}) {
//   const [windowSize, setWindowSize] = useState(getWindowSize());


//   console.log(windowSize);
//   useEffect(() => {
//     function handleWindowResize() {
//       setWindowSize(getWindowSize());
//     }

//     window.addEventListener('resize', handleWindowResize);

//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Width: {windowSize.innerWidth}</h2>

//       <h2>Height: {windowSize.innerHeight}</h2>
//     </div>
//   );
// }

// function getWindowSize() {
//   const {innerWidth, innerHeight} = window;
//   return {innerWidth, innerHeight};
// }