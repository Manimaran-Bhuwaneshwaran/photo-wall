import React , {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component{
  render() {
    return (
      <div>
        <footer className="footer container p-4">
          <p>{this.props.description}</p>
        </footer>
      </div>
    )
  }
}

Footer.propTypes = {
  description : PropTypes.string.isRequired
}

Footer.defaultProps = {
  description : "This is footer"
}

export default Footer;