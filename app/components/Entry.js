import React from 'react';

class Entry extends React.Component {
  render() {
    return(
        <div className='col m3 s12'>
          <div className='card'>
            <div className='card-image waves-effect waves-block waves-light'>
              <img className='activator' src={`./uploads/${this.props.filename}`} />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>{this.props.title}<i className='material-icons right'>more_vert</i></span>
            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>{this.props.title}<i className='material-icons right'>close</i></span>
              <p>{this.props.text}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Entry;