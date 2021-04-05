import React from 'react'

const Header = () => {
    return (
        <div>
            <h1>Github Search App</h1>
            <h2>Search users in Github using this simple React application.</h2>
            <p>Click on the card to see more detail about individual user. The search default is PluemJIR</p>
        </div>
    )
}

const API = 'https://api.github.com/';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: 'PluemJir',
            data: ''
        }
    }
}

fetchSearch = username => {
    let url = `${API}search/users?q=${username}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        this.setState({
            data: data
        })
    })
    .catch((error) => console.log('There is a problem' + error))
}

class SearchForm extends React.Component {
    render() {
      return (
          <div className="search-bar">
            <form
              className="input-group"
              onSubmit={this.handleForm}>
              <input
                type="search"
                ref="username"
                placeholder="Type Username here"
                className="form-control"/>
              <span className="input-group-btn">
                <button type="submit" 
                  className="btn btn-warning">Submit</button>
              </span>
            </form>
          </div>
      )
    }
}

handleForm = event => {
    event.preventDefault();
    let username = this.refs.username.value
    this.props.fetchSearch(username);
  }

  Profiles = props => {
    if(props.data){
      let data = props.data;
    }}

    