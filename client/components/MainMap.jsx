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

  componentWillMount () {
    this.geocoder = new google.maps.Geocoder
  }

  render() {
    return (
      <div className="columns">
    <div className="column is-8 is-offset-2 box">
      <Map google={this.props.google}
        style={{width: '50%', height: '80%', position: 'relative', margin: '10px'}}
        className={'map'}
        zoom={6}
        initialCenter={{
            lat: -36.8547512,
            lng: 174.7787425
          }}
          >
          {this.props.restaurants.map((restaurant, key) => {
            console.log(this.props.restaurants)

            this.geocoder.geocode(
            {address: restaurant.address},(results, status) => {
              if (status === 'OK') {
                console.log('Geocode was successful');
               this.setState({lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()})
             }
             else {
               console.log('Geocode was not successful for the following reason: ' + status);

             }
          })
          return(
            <Marker key = {key} position={this.state} />
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
