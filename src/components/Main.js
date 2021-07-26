/* eslint-disable react/require-render-return */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import HornedBeasts from './HornedBeasts';
import data from './assets/data.json';
class Main extends React.Component{

  constructor (){
    super();
    this.state = {data: data}
  }

  mapThroughArr(index) {
    let newArray = index.map(NewArray => <HornedBeasts
    url={NewArray.image_url}
    title={NewArray.title}
    description={NewArray.description}
    />);
    return newArray;

  }

    render() {

      // console.log(data);
      return(
        <div>
          {this.mapThroughArr(this.state.data)}
        </div>
      )

   
  }
}
export default Main;



