import React from 'react';

import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    //  instead of writing this logic here, we can extract it to either:
    //    - the parent component that will use this component and pass in the specific user
    //    - extract it to mapStateToProps function (look below)
    // BELOW LOGIC IS MOVED TO MAP STATE TO PROPS
    // const { userId } = this.props;
    // const user = this.props.users.find((user) => user.id === userId);

    const { user } = this.props; // comping from mapStateToProps now instead of local

    return (
      <div
        style={{
          marginTop: '10px',
          fontWeight: '600',
          color: 'cornflowerblue'
        }}
      >
        {user ? user.name : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // "ownProps" recieves the props that is ABOUT TO BE SENT to this very component,
  // allowing access to this component's props

  // we can extract LOGIC to this function instead of the component itself
  return {
    user: state.users.find((user) => user.id === ownProps.userId)
  };
};

export default connect(
  mapStateToProps,
  { fetchUser: fetchUser }
)(UserHeader);
