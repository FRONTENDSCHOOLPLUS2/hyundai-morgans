'use client'

import { useEffect, useState } from "react"

export default function MainPagenation (){
    const [liLength, setLiLength] = useState(0);
    const [viewHeight, setViewHeight] = useState(0);

    useEffect(()=>{
      const liLen = document.querySelectorAll('.main_pagenation li')
      setLiLength(liLen.length);
      setViewHeight(window.innerHeight)

      const handleResize = () => setViewHeight(window.innerHeight)
      window.addEventListener('resize',handleResize)

      return() => window.removeEventListener('resize', handleResize);

    },[])

    
    
    const liPaging = (e:React.MouseEvent<HTMLAnchorElement>, i:number) :void => {
      e.preventDefault();
      window.scrollTo({
        top:viewHeight * (i-1),
        left:0,
        behavior:'smooth'
      })

    }



  

  return(
    <ul className="main_pagenation">
      <li><a href="" onClick={(e) => liPaging(e,1)}></a></li>
      <li><a href="" onClick={(e) => liPaging(e,2)}></a></li>
      <li><a href="" onClick={(e) => liPaging(e,3)}></a></li>
      <li><a href="" onClick={(e) => liPaging(e,4)}></a></li>
      <li><a href="" onClick={(e) => liPaging(e,5)}></a></li>
    </ul> 
  )
}