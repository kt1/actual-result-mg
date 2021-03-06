import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = ({ posts }) => (
  <ul className="siimple-list">
    { posts.map((post, index) => 
        <Post key={index} {...post}/>
      )
    }
  </ul>
)

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.nubmer.isRequired,
      username: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default PostList