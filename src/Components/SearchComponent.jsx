import React from 'react';

export default class SearchComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }
    
    handleFilterTextInputChange(e) {
      this.props.onFilterTextInput(e.target.value);
    }
    render() {
      return (
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Search By Name..."
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
          />
        </form>
      );
    }
  }