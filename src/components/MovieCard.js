import React from 'react';

const MovieCard = (props) => {
  const { name, imageUrl } = props;
  return (
    <div>
      <a href={`schedule/${name}`}>{name}</a>
      {/*TODO: add image*/}
    </div>
  )
}

export default MovieCard;