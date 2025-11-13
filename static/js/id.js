const listPokemons = document.getElementById('list-pokemon')

const getPokemons = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1328`
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log('Error fetching pokemons:', error))
}

const renderPokemons = (pokemons) => {
  listPokemons.innerHTML = ''
  let html = ''
  pokemons.results.forEach((pokemon) => {
    const id = pokemon.url.split('/')[6]
    html += `<div class="card">
                <div class="margin-10">
                    <span onclick="openPokemon(${id})">
                    <h3>${id}</h3>
                  </span>
                </div>
              </div>`
  })
  listPokemons.innerHTML = html
}

const openPokemons = async () => {
  const pokemons = await getPokemons()
  renderPokemons(pokemons)
}
openPokemons()
