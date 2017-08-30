import React from 'react'
import {Map, Marker} from 'google-maps-react';
import {GoogleApiWrapper} from 'google-maps-react';

class MapSingle extends React.Component {
  constructor (props) {
    super(props)

  }
  render() {
    return (
        <div className="mapSinglecol box">
          <Map google={window.google}
            style={{height: '95%', position: 'relative', margin: '10px'}}
            className={'mapSingle'}
            zoom={14}
            center={{
              lat: this.props.restaurant.lat,
              lng: this.props.restaurant.lng
            }}
            centerAroundCurrentLocation={false}
            >
            <Marker
              title={this.props.restaurant.restaurant_name}
              name={this.props.restaurant.restaurant_name}
              position={{lat: this.props.restaurant.lat, lng: this.props.restaurant.lng}} />
          </Map>
        </div>
    );
  }
}

export default MapSingle
