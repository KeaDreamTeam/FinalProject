import React from 'react'
import {Map, Marker} from 'google-maps-react';
import MarkerOnMap from './MarkerOnMap'

class MainMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: null,
      lng: null,
      mappedRestaurants: []
    }
  }

  componentWillMount () {
    this.geocoder = new google.maps.Geocoder


  }
  componentWillReceiveProps(props) {
    let mappedRestaurants = props.restaurants.map((restaurant, key) => {


      this.geocoder.geocode({address: restaurant.address},(results, status) => {
        if (status === 'OK') {
          console.log(results);
          restaurant.lat = results[0].geometry.location.lat()
          restaurant.lng = results[0].geometry.location.lng()
          console.log('Geocode was successful');
          //  this.setState({lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()})
        }
        else {
          console.log('Geocode was not successful for the following reason: ' + status);

        }
      })
      return restaurant

    })
    // console.log("after first map", mappedRestaurants);
    this.setState({mappedRestaurants})
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
            {console.log("inside map component", this.state.mappedRestaurants)}
            {this.state.mappedRestaurants.map((rest, key) => {

              let {lat, lng} = rest
              return <Marker key={key} position={{lat, lng}} />
            })}
          </Map>
        </div>
      </div>
    );
  }
}


export default MainMap

// https://github.com/fullstackreact/google-maps-react
