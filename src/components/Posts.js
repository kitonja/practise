import React, { useEffect } from 'react'
import { fetchPosts } from '../redux/actions'

const Posts = () => {
    useEffect(()=> {
        // eslint-disable-next-line
        fetchPosts()
    },[])
    return (
        <div>
            Posts
        </div>
    )
}

export default Posts
