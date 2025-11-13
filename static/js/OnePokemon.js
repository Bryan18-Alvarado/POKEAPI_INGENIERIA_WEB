const listOnePokemon = document.getElementById('one-pokemon')

const getOnePokemon = async () => {
  const randomId = Math.floor(Math.random() * 1025) + 1
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error fetching pokemon:', error)
  }
}

// Renderizar el Pokémon
const renderOnePokemon = (pokemon) => {
  listOnePokemon.innerHTML = `
    <div class="card">
      <h2>${pokemon.name.toUpperCase()}</h2>
      <button onclick="openOnePokemon()">🔄 Otro Pokémon</button>
    </div>
  `
}

const openOnePokemon = async () => {
  const pokemon = await getOnePokemon()
  renderOnePokemon(pokemon)
}
openOnePokemon()
