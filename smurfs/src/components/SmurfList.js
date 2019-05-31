import React from 'react';

import { connect } from 'react-redux';
import { getSmurf } from '../actions';

class SmurfList extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getSmurf();
  }
  render() {
    return (
      <div>
        {this.props.SmurfList.map(smurf =>
          <div>
            <h1>{smurf.name}</h1>
            <h2>{smurf.age}</h2>
            <h2>{smurf.height}</h2>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    smurflist: state.smurflist,
    getSmurf: state.getSmurf
  }
}

export default connect(mapStateToProps, { getSmurf }(SmurfList));
