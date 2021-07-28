import React from 'react';
import './App.css';
import Lottie from './lottie-web-master/build/player/lottie_light.js'
import animation from './mask.json'; 

function App() {
  return (
    <div className="App">
     <LottieLoader json={animation} />
    </div>
  );
}

type LottieProps = {
  json: Object,
}

export const LottieLoader = React.memo(({json}: LottieProps ) => {
  const element = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if(element.current)
     Lottie.loadAnimation({
         animationData: json,
         container: element.current,
         renderer: 'svg', 
         loop: true
       });
  }, [element, json]); 

   
  return  (
    <div>
        <div className="animation" ref={element}></div>
    </div>
  );
});

export default App;
