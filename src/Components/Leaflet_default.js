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
       opacity:"0.2",
       top:"10px",
       left:"10px",
       width:"100px",
       height:"100px",
       zIndex: "2000"
     }
   };
   return styles;
 }
 componentDidMount(){
   let leaflet=document.querySelectorAll("div.leaflet-bottom")
   leaflet[1].parentNode.removeChild(leaflet[1]);
   leaflet[0].parentNode.removeChild(leaflet[0]);
   let leafzoom = document.querySelectorAll("div.leaflet-control-zoom")
   leafzoom[0].parentNode.removeChild(leafzoom[0])
 }
 maponMouseDown(e){
   console.log(e.originalEvent)
   this.setState({keydown:true})
   let div = document.createElement("div")
   div.className = "tempDiv";
   this.setState({postx:e.originalEvent.layerX,posty:e.originalEvent.layerY})
   div.style.left = this.state.postx+"px";
   div.style.top = this.state.posty+"px";
  //  div.style.width=100+"px";
  //  div.style.height=100+"px";
   document.querySelectorAll("div.leaflet-control-container")[0].appendChild(div)
   console.log(div)
   this.state.Latlng_Arr[0]=e.latlng
 }
 maponMouseMove(ev){
   if(!this.state.keydown){return}
   let tempDiv=document.querySelectorAll("div.tempDiv")[0]
   tempDiv.style.left = Math.min(ev.originalEvent.layerX, this.state.postx) + "px";
   tempDiv.style.top = Math.min(ev.originalEvent.layerY, this.state.posty) + "px";
   tempDiv.style.width = Math.abs(this.state.postx - ev.originalEvent.layerX)+"px";
   tempDiv.style.height = Math.abs(this.state.posty - ev.originalEvent.layerY)+"px";
 }
 maponMouseUp(e){
   this.setState({keydown:false})
   let tempDiv=document.querySelectorAll("div.tempDiv")[0]
   tempDiv.parentNode.removeChild(tempDiv)
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
          <div style={styles.temp}> hello world</div>
        </Map>
      </div>
    );
  }
}

export default Leaflet;
