import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 text-center flex justify-center items-center md:h-[11rem] lg:h-[16rem] bg-gradient-to-l from-white to-blue-500">
                <Container>
                    <div className="flex flex-wrap w-full">
                        <div className="p-2 w-full">
                            <h1 className="text-center w-full text-2xl font-bold cursor-pointer hover:text-gray-500 flex-row">
                               Login to read posts
                               </h1>
                                <img
  src="side2.png"
  alt="img"
  className='-mb-16'
/>
                            
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    // 
    return (
        <div className='w-full py-8 bg-gradient-to-l  from-white to-blue-500'>
            <Container>
                <div className='flex flex-col'>
                    <div className='fixed opacity-0 md:opacity-100'>
                    <img
  src="side.png"
  alt="img"
  className=" fixed bottom-0 right-0 hover:opacity-80 duration-400"
/>
                    <img
  src="size1.png"
  alt="img"
  className=" fixed bottom-0 left-0 hover:opacity-80  duration-400"
/>

                    </div>
                    {posts.map((post) => (
                        <div key={post.$id} className='mx-auto'>
                            <PostCard {...post} className={`w-[21rem] h-[30rem]`} width={`w-[21rem]`}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home