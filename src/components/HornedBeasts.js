/* eslint-disable react/jsx-no-undef */
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

constructor(props){
  super(props);
        this.state = {
            favourite : 0
        }
}

incrementNumOfFavourite = () => {
  this.setState({
    favourite: this.state.favourite + 1
})
}


  render() {
    return (
      <div>
        {/* <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
        />
        <p>{this.props.description}</p> */}

<Card style={{ width: '18rem' }}>
  <Card.Img onClick={this.incrementNumOfFavourite} variant="top" src={this.props.url} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text> {this.props.description}</Card.Text>
    <Card.Text>
     Number of Favourite ❤️ : {this.state.favourite}
     </Card.Text>

    <Button variant="primary">Action</Button>
  </Card.Body>
</Card>    
      </div>
    );
  }
}

export default HornedBeasts;