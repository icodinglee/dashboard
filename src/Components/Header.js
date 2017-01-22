import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
  render () {
      return (
        <div>
          <AppBar
          title="数据可视化交互平台"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </div>
      )
  }
}

export default Header;
