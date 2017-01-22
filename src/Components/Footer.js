import React, { PropTypes } from 'react'

class Footer extends React.Component {
  getStyles() {
   const styles = {
     root: {
      textAlign:"center",
      lineHeight:"140px",
      fontSize:'24px',
      color:"#fff",
      backgroundColor:"rgb(0, 188, 212)"
     }
   };
   return styles;
 }
  render () {
    const styles = this.getStyles();
    return <div style={styles.root}>
              welcome here !
            </div>
  }
}

export default Footer;
