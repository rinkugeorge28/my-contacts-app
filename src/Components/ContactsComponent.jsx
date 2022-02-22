import React from 'react';
import ContactsTable from './ContactsTable';
import SearchComponent from './SearchComponent';

export default class ContactsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
         filterText: '',
         contacts: []
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }
  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(contacts => {
        this.setState({ 'contacts': contacts })
     })
  }
  
  handleFilterTextInput(filterText) {
    //Call to setState to update the UI
    this.setState({
      filterText: filterText
    });
}
  render() {
    return (
      <div className="ContactsComponent">
        <SearchComponent
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput} />
        <ContactsTable contacts={ this.state.contacts } filterText= {this.state.filterText} />
      </div>
    );
  }
}
