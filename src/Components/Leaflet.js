import React, { PropTypes } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class Leaflet extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 39.9,
      lng: 116.4,
      zoom: 8,
      draggable:false,
      kewdown:false,
      keyup:false,
      Latlng_Arr:[],
      postx:0,
      posty:0
    };
  }
  getStyles() {
   const styles = {
     root: {
        cursor:"crosshair"
     },
     temp:{
       border:"1px dashed blue",
       background:"#5a72f8",
       position:"absolute",
       filter:"alpha(opacity:10)",
       opacity:"0.15",
       top:"0",
       left:"0",
       width:"0",
       height:"0",
       zIndex: "2000"
     }
   };
   return styles;
 }
 componentDidMount(){
 }
 maponMouseDown(e){
   this.setState({keydown:true})
   this.setState({postx:e.originalEvent.layerX,posty:e.originalEvent.layerY})
   this.refs.brush.style.left = this.state.postx+"px";
   this.refs.brush.style.top = this.state.posty+"px";
   this.state.Latlng_Arr[0]=e.latlng
 }
 maponMouseMove(ev){
   if(!this.state.keydown){return false}
   this.refs.brush.style.left = Math.min(ev.containerPoint.x, this.state.postx) + "px";
   this.refs.brush.style.top = Math.min(ev.containerPoint.y, this.state.posty) + "px";
   this.refs.brush.style.width = Math.abs(this.state.postx - ev.containerPoint.x)+"px";
   this.refs.brush.style.height = Math.abs(this.state.posty - ev.containerPoint.y)+"px";
 }
 maponMouseUp(e){
   this.setState({keydown:false})
   this.refs.brush.style.left = 0;
   this.refs.brush.style.top =0;
   this.refs.brush.style.width =0;
   this.refs.brush.style.height = 0;
   this.state.Latlng_Arr[1]=e.latlng
   console.log(this.state.Latlng_Arr)
 }
  render() {
    const styles = this.getStyles();
    const position = [this.state.lat, this.state.lng];
    return (
      <div id="map-container" style={styles.root}>
        <Map
          center={position}
          zoom={this.state.zoom}
          onMouseDown={this.maponMouseDown.bind(this)}
          onMouseMove={this.maponMouseMove.bind(this)}
          onMouseUp={this.maponMouseUp.bind(this)}
          dragging={this.state.draggable}
          >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            draggable={this.state.draggable}
          />
          <div style={styles.temp}  ref="brush"></div>
        </Map>
      </div>
    );
  }
}

export default Leaflet;
