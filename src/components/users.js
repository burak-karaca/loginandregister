import Img from './logo.png';
import React from 'react';
import axios from 'axios';
class Users extends React.Component {
  state = {
    persons: [],
  
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({persons});
  
 
    });
  }

  render() {
    return (
      <div className="card">
        <nav className="navbar">
          <img src={Img} alt='logo'></img>
          <div className="buttonDiv">
          <form>
          <button>About</button>
          <button>Contact</button>
          </form>
          </div>
        
        </nav>

        <div className="cards">
          {this.state.persons.map((person) => (
           
            <div key={person.id} className="card-body"> 
            <li><span>Number ID: </span>{person.id}</li>
            <ul>
              <li><span>Name: </span>{person.name}</li>
              <li><span>Username: </span>{person.username}</li>
              <li><span>Street: </span>{person.address['street']}</li>
              <li><span>Suite: </span>{person.address['suite']}</li>
              <li><span>City living: </span>{person.address['city']}</li>
              <li><span>Zipcode: </span>{person.address['zipcode']}</li>
              <li><span>Geo lat: </span>{person.address.['geo']['lat']}</li>
              <li><span>Geo lng: </span>{person.address.['geo']['lng']}</li>
              <li><span>Phone number: </span>{person.phone}</li>
              <li><span>Website: </span>{person.website}</li>
              <li><span>Company name:</span> {person.company['name']}</li>
              <li><span>Company catchPhrase: </span>{person.company['catchPhrase']}</li>
              <li><span>Compny bs: </span>{person.company['bs']}</li>
            </ul>
            </div>
           
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
