import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const lat = parseFloat(localStorage.getItem('lat'));
const lng = parseFloat(localStorage.getItem('lng'));
const MyMapComponent = compose(
  
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCx0wq_NY0cy99XoWDBtiSR-VAUm3dUmWI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: lat, lng: lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyFancyComponent;