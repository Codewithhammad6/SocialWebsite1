import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8 mx-auto'>
        <Container>
            <div className='flex flex-wrap '>
                {posts.map((post) => (
                    <div key={post.$id} className='px-2 '>
                        <PostCard {...post} className={`h-[16rem] w-[19rem]`} width={`w-[10rem]`}/>
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts