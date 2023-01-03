'use client'
import { useState } from "react"

export function LikeButton(){

 const [likeState, setLike] = useState(false)
 
 return (
    <button onClick={ () => setLike(!likeState)} >
        
       {likeState ?  '😍' : '😀' } 
    </button>
 )
}