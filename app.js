const charizardContainer = document.getElementById('charizard-container');
const loadButton = document.getElementById('load-pokemon');
const pokemonNameInput = document.getElementById('pokemon-name');

// Function to fetch data from the PokéAPI
async function fetchPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        
        const pokemonData = await response.json();
        
        // Call display function to show data
        displayPokemonData(pokemonData);
    } catch (error) {
        charizardContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

// Function to display Pokémon data in HTML
function displayPokemonData(data) {
    charizardContainer.innerHTML = `
        <h2 class="text-xl font-semibold text-[#47daff]">${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}" class="mx-auto my-4 rounded-full w-32 h-32">
        <strong class="text-gray-600 mt-2">Type:</strong>
        <p>${data.types.map(type => type.type.name).join(', ')}</p>
        <strong class="text-gray-600 mt-2">Abilities:</strong>
        <ul class="list-none text-sm text-gray-700">
            ${data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>
        <strong class="text-gray-600 mt-2">Base Stats:</strong>
        <ul class="list-none text-sm text-gray-700">
            ${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
        </ul>
        <strong class="text-gray-600 mt-2">Height:</strong> <p>${data.height / 10} m</p>
        <strong class="text-gray-600 mt-2">Weight:</strong> <p>${data.weight / 10} kg</p>
    `;
}


// Event listener to load Pokémon when button is clicked
loadButton.addEventListener('click', () => {
    const pokemonName = pokemonNameInput.value;
    if (pokemonName) {
        fetchPokemonData(pokemonName);
    } else {
        charizardContainer.innerHTML = '<p>Please enter a Pokémon name or ID.</p>';
    }
});

async function fetchPokemonData(pokemonName) {
    document.getElementById('loading').style.display = 'block';
    charizardContainer.innerHTML = '';  // Clear previous data
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        
        const pokemonData = await response.json();
        
        displayPokemonData(pokemonData);
    } catch (error) {
        charizardContainer.innerHTML = `<p>${error.message}</p>`;
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

async function fetchPokemonData(pokemonName) {
    document.getElementById('loading').style.display = 'block';
    charizardContainer.innerHTML = '';
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        
        const pokemonData = await response.json();
        displayPokemonData(pokemonData);
    } catch (error) {
        charizardContainer.innerHTML = `<p>${error.message}</p>`;
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}
