import React, {Component, Fragment } from 'react';
import Travel from "./travel"

class App extends Component {
 render() {
   return (
     <Fragment>
       <Travel
         destination = "Paris"
         country = "France"
         distance = "959"
         photo = "https://picsum.photos/200/300/?random"
       />
       <Travel
         destination = "Lisbon"
         country = "Portugal"
         distance = "959"
         photo = "https://picsum.photos/200/300/?random"
       />
   </Fragment>
   );
 }
}
export default App;