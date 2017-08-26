import React from 'react'
import {Map, Marker} from 'google-maps-react';
class MainMap extends React.Component {
  constructor (props) {
    super(props)
  }


  render() {
    return (
      <div className="columns">
        <div className="mapcol column is-8 is-offset-2 box">
          <Map className="mainmap" google={this.props.google}
            style={{ height: '95%', position: 'relative', margin: '10px'}}
            className={'map'}
            zoom={12}
            initialCenter={{
              lat: -41.30270005,
              lng: 174.77488518
            }}
            >
            {this.props.restaurants.map((restaurant, key) => {
              return <Marker key={key} position={{lat:restaurant.lat, lng:restaurant.lng}} />
            })}
          </Map>
        </div>
      </div>
    );
  }
}


export default MainMap





// https://github.com/fullstackreact/google-maps-react
