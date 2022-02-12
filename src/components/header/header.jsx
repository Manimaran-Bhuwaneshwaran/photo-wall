import React , {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component{
  render() {
    return (
      <div>
        <header className="header container p-4">
          <h1>{this.props.title}</h1>
        </header>
      </div>
    )
  }
}

Header.propTypes = {
  title : PropTypes.string.isRequired
}
Header.defaultProps = {
  title : "This is Header"
}

export default Header;