import React, { Component } from 'react'
import Users from "./GithubFinder/Users"
import SearchForm from "./GithubFinder/SearchForm"
import axios from 'axios';
export class App extends Component {

  constructor() {
    super();
    this.state = {
      githubUsers: []
    }
  }


  searchUser = (userName) => {
      axios.get(`https://api.github.com/search/users?q=${userName}`)
      .then(res => {
        console.log(res.data.items)
        this.setState({githubUsers : res.data.items})
      })
  }





  render() {
    return (
      <>
        {/* <Lifecycle/> */}
        {/* <Example  /> */}

        <SearchForm  searchUser={this.searchUser}/>
        <Users githubUsers={this.state.githubUsers}/>



      </>
    )
  }
}

export default App