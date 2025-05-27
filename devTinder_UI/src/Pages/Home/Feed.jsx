import React from 'react'
import { useSelector } from 'react-redux'

const Feed = () => {
  const user = useSelector(store => store.user)

  console.log("user", user);

  return (
    <div>Feed</div>
  )
}

export default Feed