import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage,className,width}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className={` ${width} mt-3 bg-gray-100 rounded-xl`}>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFileDownload(featuredImage)} alt={title}
               className={`rounded-xl  ${className}`}
               />   
            </div>
            <h2
            className='text-xl font-bold px-2 py-1'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard