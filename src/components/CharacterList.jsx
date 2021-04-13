import axios from 'axios'
import React, { Component } from 'react'

class CharacterList extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    this.getCharacters()
  }

  getCharacters = async () => {
    let characterData = await axios.get("https://swapi.dev/api/people/")
      this.setState({ characters: characterData.data.results})
  }

  render() {
    let characterList = this.state.characters.slice(0, 6).map(character => {
      return (
        <li key={character.name} data-cy="character-item">
          <p data-cy="name">{character.name}</p>
        </li>
      )
    })
    return (
      <div data-cy="character-list">
        {characterList}
      </div>
    )
  }
}

export default CharacterList
