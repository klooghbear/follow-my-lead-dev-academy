import React from 'react';
import { connect } from 'react-redux';

export class WalkerProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1 className="page-title">{this.state.walker.first_name}'s Profile</h1>
        <div className="profile-container">
          <img className="profile-picture" src={this.state.walker.photo} />
          <p>
            <strong>Location:</strong>
            {this.state.walker.location}
          </p>
          <br />

          <div className="profile-info">
            {this.state.walker && (
              <>
                <p>
                  <strong>Name: </strong>
                  {this.state.walker.first_name} {this.state.walker.last_name}{' '}
                </p>

                <p>
                  <strong>About: </strong>
                  {this.state.walker.blurb}
                </p>
              </>
            )}

            <p>
              <strong>Email: </strong>
              {this.state.walker.email}
            </p>
          </div>
          <Link className="button" to={`/walker/${this.state.walker.id}/edit`}>
            Edit Profile
          </Link>

          <Link className="button" to="/doglist">
            See the Dogs!
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    walker: state.walker,
  };
};

export default connect(mapStateToProps)(WalkerProfile);
