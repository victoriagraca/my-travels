import React, {Component, Fragment } from 'react';
import Travel from "./travel";

const travel = [
  {
    destination: "Johannesburg",
    countries: "South Africa",
    distance: "11,920.6km",
    photo:
      "https://picsum.photos/200/300/?random"
  },
  {
    destination: "Paris",
    countries: "France",
    distance: "1,605.2km",
    photo:
      "https://picsum.photos/200/300/?random"
  },
  {
    destination: "London",
    countries: "United Kingdom",
    distance: "1,275.4km",
    photo:
      "https://picsum.photos/200/300/?random"
  },
  {
    destination:"Madrid",
    countries:"Spain",
    distance: "474.0km",
    photo:
      "https://picsum.photos/200/300/?random"
  }
]

const Travels = () => (
  <Fragment>
    {travel.map((travel) => (
     <Travel key={travel.destination} destination={travel.destination} countries={travel.countries} photo={travel.photo} distance={travel.distance} />
  ))} 
  </Fragment>
);

export default Travels;