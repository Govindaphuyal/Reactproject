import React,{useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Typed from 'typed.js';
 function Section() {
  const el = useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer.', 'Backend Developer.','Python.'],
      typeSpeed: 40,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  useGSAP(() => {
        gsap.from('.right-img', { x: -100,duration:1});
    },
    
);


  return (
    <div className='main'>
      <div className="left">
        <h1>I am Govinda</h1>
        <h1>Phuyal</h1>
        <h1>as</h1>
        <span ref={el} />
      </div>
      <div className="btn">
        
      </div>
      <div className="right">
        <img className="right-img"src="https://static.vecteezy.com/system/resources/previews/011/153/366/non_2x/3d-web-developer-working-on-project-illustration-png.png" />
      </div>
    </div>
  )
}
export default Section;

