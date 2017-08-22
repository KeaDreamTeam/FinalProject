import React from 'react'
import {Map, Marker} from 'google-maps-react';

class MainMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
          lat: null,
          lng: null
        }
  }

  render() {
    return (
      <div className="columns">
    <div className="column is-8 is-offset-2 box">
      <Map google={this.props.google}
        style={{width: '50%', height: '50%', position: 'relative', margin: '10px'}}
        className={'map'}
        zoom={6}
        initialCenter={{
            lat: -36.8547512,
            lng: 174.7787425
          }}
          >
          {this.props.restaurants.map((restaurant, key) => {

              console.log(this.props.restaurants);
          this.geocoder = new google.maps.Geocoder
            this.geocoder.geocode(
            { address: restaurant.address },(results) => {
               this.setState({lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()})
          })
          return(
            <Marker key = {key} position={{lat: this.state.lat, lng: this.state.lng}} />
          )
  })}
    </Map>
  </div>
</div>
    );
  }
}


export default MainMap

// https://github.com/fullstackreact/google-maps-react
