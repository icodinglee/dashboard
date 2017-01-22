import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Radium, { StyleRoot } from 'radium';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';
import Map from './Components/Map';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 100,
      data:[]
    };
  }
  componentWillMount(){
    let that=this ;
    axios.get('https://raw.githubusercontent.com/icodinglee/function-test/master/dashboard.json')
      .then(function (res) {
        that.setState({data:res.data})
        console.log(res.data)
        res.data.forEach(function(e,i){
          if(that.state.height<e.y+e.height){
            that.setState({height:e.y+e.height+50})
          }
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }
  getStyles(){
    const styles={
      container:{
        position:"relative",
        width:'100%',
        border:'1px solid red',
        // height:this.state.height+"px"
        height:"800px"
      },
      dashcard:{
        position:"absolute",
      },
    }
    return styles
  }
  render () {
    const styles=this.getStyles();
    let cards = this.state.data.map( (item,i)=>
      <div style={{left:item.x,top:item.y,width:item.width}} key={i} className="dashcard">
        { item.id ==1 ? <Map height={item.height} content={item.id}/> : <Map height={item.height} content={item.id}/>}
      </div>
    )
 console.log(cards);
    return(
          <StyleRoot>
              <Header />
                <div style={styles.container} >
                    { cards }
                </div>
              <Footer />
          </StyleRoot>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
