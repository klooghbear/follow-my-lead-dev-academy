import { connect } from 'react-redux';
import React from 'react';
import { fetchDogs } from '../api/dogs';
import { Link } from 'react-router-dom';
import { compose } from 'redux';

class DogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogList: [],
    };
  }

  componentDidMount = () => {
    this.props.dispatch(fetchDogs());
  };

  render() {
    console.log(this.props.dogs)
    return (
      <>
        <h1 className="page-title">Dogs to walk...</h1>
        <div className="dog-align">
          {this.props.dogs.map((dog, i) => {
            return (
              <div className="doglist" key={i}>
                <Link to={`/dog/${dog.id}`}>
                  <img className="dogphoto" src={dog.photo} />
                </Link>
                <p>{dog.name}</p>
                <p>{dog.special_requirements}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
  };
};

export default connect(mapStateToProps)(DogList);
