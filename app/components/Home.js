import React, {Component} from 'react';
import Entry from './Entry';
import $ from 'jquery';


class Home extends Component {
  constructor(props) {
    super(props);
    this.getEntries = this.getEntries.bind(this);
    this.state = { entries: [] }
  }
  componentDidMount(){
    this.getEntries();
  }
  getEntries(){
    $.ajax({
      url: '/pictures',
      type: 'GET',
      dataType: 'JSON'
    }).done( entries => {
      this.setState({ entries: entries });
    }).fail( msg => {
      console.log(msg)
    });
  }

  render() {
    let entries = this.state.entries.map( entry => {
      return(<Entry key={entry._id} {...entry} />);
    })
    return (
      <div className='row cards'>
        {entries}
      </div>

    );
  }
}

export default Home;
