import React from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Avatar from 'react-avatar';


const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) =>  a.name.localeCompare(b.name)
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.name.localeCompare(a.name)
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
}
export default class ContactsTable extends React.Component {
    state = {
		currentSort: 'default'
	}
    onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;
		
		if(currentSort === 'down') nextSort = 'up';
		else if(currentSort === 'up') nextSort = 'default';
		else if(currentSort === 'default') nextSort = 'down';
		
		this.setState({
			currentSort: nextSort
		})
	}
    
	  
  render() { 
    const {currentSort} = this.state;  
    return (
        <Table>
          <Thead>
            <Tr align="justify">
              <Th><FaUser/>Name{' '}
                    <button onClick={this.onSortChange}>
                        <i className={`fa fa-${sortTypes[currentSort].class}`}></i>
                    </button>
              </Th>
              <Th><FaPhoneAlt/>Phone</Th>
              <Th><FaEnvelope/>Email</Th>
              <Th><FaMapMarkerAlt/>Address</Th>
            </Tr>
          </Thead>
          <Tbody>
          { (this.props.contacts.length > 0) ? this.props.contacts.sort(sortTypes[currentSort].fn)
            .map( (contact, index) => {
                
                if (contact.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
                    return;
                }
               return (  
                <Tr align="justify" key={ index }>
                  <Td>
                     <span>
                         <Avatar color={Avatar.getRandomColor('sitebase', ['green'])} round={true}
                            value="86%" size="40" name={ contact.name } />
                     </span>
                     {'  '}
                     <span>{ contact.name }</span>
                  </Td>
                  <Td>{ contact.phone}</Td>
                  <Td>{ contact.email }</Td>
                  <Td>{ contact.address.street+", "+contact.address.suite+", "+
                        contact.address.city+", "+contact.address.zipcode }</Td>
                </Tr>
              )
             }) : <Tr><Td colSpan="5">Loading...</Td></Tr> }
          </Tbody>
        </Table>
      );
    
    }
}