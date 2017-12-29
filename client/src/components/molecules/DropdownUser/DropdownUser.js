import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownUser extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render () {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color='info'>
          {this.props.name}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.props.logout}>Logout</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

DropdownUser.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

export default DropdownUser;
