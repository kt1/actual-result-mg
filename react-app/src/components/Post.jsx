import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ id, username }) => (
  <li>
    { username }
  </li>
)

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired
  })
}

export default Post