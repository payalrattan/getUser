import React from 'react'
import PropTypes from 'prop-types'

const GetJoke = ({ joke }) => {
  return (
    <div className="joke-card">
      <h3 className="joke-category">{joke.category}</h3>

      {joke.type === 'single' ? (
        <p className="joke-text">{joke.joke}</p>
      ) : (
        <div className="joke-setup-delivery">
          <p className="joke-setup">{joke.setup}</p>
          <p className="joke-delivery">{joke.delivery}</p>
        </div>
      )}

      <div className="joke-flags">
        {Object.entries(joke.flags).map(([flag, value]) => (
          <button
            key={flag}
            className={value ? 'flag-btn active' : 'flag-btn'}
          >
            {flag}:{value.toString()}
          </button>
        ))}
      </div>
      <div>safe:{joke.safe.toString()}</div>
    </div>
  )
}

GetJoke.propTypes = {
  joke: PropTypes.object.isRequired
}

export default GetJoke
