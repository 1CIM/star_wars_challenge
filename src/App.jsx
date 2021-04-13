import React, { Component } from "react"
import CharacterList from "./components/CharacterList"

class App extends Component {
  render() {
    return (
      <div>
        <h1 data-cy="header" >Star Wars UwU</h1>
        <CharacterList />
      </div>
    )
  }
}

export default App;
