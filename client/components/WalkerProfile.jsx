import React from 'react';
import { connect } from 'react-redux';
import { fetchWalkers } from '../api/walker';

export class WalkerProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      walker: {},
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchWalkers())
  }

  render() {
    console.log(this.props.walkers)
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
    walkers: state.walkers,
  };
};

export default connect(mapStateToProps)(WalkerProfile);
