import React from 'react';
class Travel extends React.Component {
    render() {
      const { destination, countries, distance, photo } = this.props;
      return (
        <div>
        <p>{destination}</p>
        <p>{countries}</p>
        <p>{distance}</p>
        <figure>
           <img src={photo} alt={destination} widht="600px" height="200px"/>
           <figcaption>{destination}</figcaption>
          </figure>
      </div>
      );
    }
   }
   export default Travel;
  