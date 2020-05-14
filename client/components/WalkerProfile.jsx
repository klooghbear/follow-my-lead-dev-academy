import React from 'react';
import { connect } from 'react-redux';
import { getWalkers } from '../api/walker';

export class WalkerProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      walker: {},
    };
  }

  componentDidMount() {
    this.props.dispatch(getWalkers());
  }

  render() {
    return (
      <>
        <div>
          <h1>hello world</h1>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    walker: state.users,
  };
};

export default connect(mapStateToProps)(WalkerProfile);
