import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Dash from "./dash";
import AnimationComponent from "./AnimationComponent";



export default function App() {
  const ref = useRef(null)
  const [buttondisabled,setButtondisabled] = useState(false)

  const run = async(e) => {
    setButtondisabled(true)
    const box = ref.current;
    await gsap.to('.box', {
      duration: 2,
      x: 200,
      rotation: 360,
      scale:2,
      ease: 'power1.inOut',
    })
    await gsap.to('.box',{
      duration:2,
      y:200
    })
    await gsap.to('.box', {
      duration: 2,
      x: 0,
      scale:1,
      rotation: -360,
      ease: 'power1.inOut'
    })
    await gsap.to('.box',{
      duration:2,
      y:0
    })
    setButtondisabled(false)
  }


  return (
    <div className="text-3xl font-bold flex items-center justify-around min-h-screen flex-col bg-gray-900">
      <div
        ref={ref}
        className="box w-24 h-24 bg-blue-500 rounded-md"
      ></div>
      <button onClick={run} className="selection:bg-orange-600 bg-gray-900 p-2 text-white text-2xl font-bold rounded-lg" disabled={buttondisabled}>click me</button>

      <Dash/>

      <AnimationComponent/>
    </div>
  )
}