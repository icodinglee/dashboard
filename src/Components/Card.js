import React, { PropTypes } from 'react'

class Card extends React.Component {
  getStyles() {
   const styles = {
     root: {
       position: 'relative',
       width: '100%',
       height: this.props.height,
       boxSizing:" border-box",
       maxWidth: '600px',
       margin: '0px auto',
       backgroundColor: '#fff',
       borderRadius: '5px',
       padding: '0px',
       boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
     },
     header:{
       boxSizing:" border-box",
       lineHeight:"50px",
       fontSize:"22px",
       color:"#fff",
       textAlign:"center",
       backgroundColor:"rgb(0, 188, 212)",
       borderRadius: '5px'
     },
     content:{
       height:"200px"
     }
   };
   return styles;
 }
  render () {
    const styles = this.getStyles();
    return (
      <div style={styles.root}>
        <div style={styles.header}>Card</div>
        <div style={styles.content}>{this.props.content}</div>
      </div>
    )

  }
}

export default Card;
