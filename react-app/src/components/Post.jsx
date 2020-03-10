import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ id, username }) => (
  <li className="siimple-list-item siimple--bg-white">
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