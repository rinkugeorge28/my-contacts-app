import './App.css';
import ContactsComponent from './Components/ContactsComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './css/Contacts.css';
import contactsLogo from './assets/ContactsLogo.jpg';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="./">
            <img src={contactsLogo} alt="logo" width="40" /> {'  '}
            <span>My Contacts</span>
          </a>

        </nav>
        <ContactsComponent/>
    </div>
  );
}

export default App;
