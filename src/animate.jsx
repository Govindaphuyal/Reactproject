
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Animate() {
    
    useGSAP(() => {
        gsap.from('h1', { x: 100,duration:2,rotation: 180,stagger: 0.25, });
        gsap.to('.left', { x: -100,duration:4,rotation: 360,opacity: 0,stagger: 0.25
        });

    },
    
);
  return (
     <>
     <div className="animate">
        <h1 className="left">It </h1>
        <h1>Govinda Protfolio</h1>
        <a href="/home"><button>Click me</button></a>
     </div>
     </> 
  )
}


export default Animate;
