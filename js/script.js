const filter = async () => {
    let response
    const filter = document.querySelector("#filtro").value
    if (filter === 'todos') {
        response = await fetch(`https://hp-api.onrender.com/api/characters/`)
    }
    else if (filter === 'alunos') {
        response = await fetch(`https://hp-api.onrender.com/api/characters/students`)
    }
    else if (filter === 'staff') {
        response = await fetch(`https://hp-api.onrender.com/api/characters/staff`)
    }
    else if (filter === 'grifinoria') {
        response = await fetch(`https://hp-api.onrender.com/api/characters/house/gryffindor`)
    }
    else if (filter === 'corvinal') {
        response = await fetch(`https://hp-api.onrender.com/api/characters/house/ravenclaw`)
    }
    else if (filter === 'lufalufa') {
        response = await fetch(`https://hp-api.onrender.com/api/characters/house/hufflepuff`)
    }
    else if (filter === 'sonserina') {
        response = await fetch(`https://hp-api.onrender.com/api/characters/house/slytherin`)
    }

    return response
}

const getAllCharacters = async () => {
    const cards = document.querySelector('#charCards')
    cards.innerHTML = '<img src="img/loading.gif" alt="loading" style="height: 230px;">'
    const response = await filter()
    const data = await response.json()
    cards.innerHTML = ''
    data.map((char) => {
        if (char.image) {
            cards.innerHTML += `
            <div class="card">
                <img src="${char.image}" alt="${char.name}" style="height: 227px; width: 160px; object-fit: cover;">
                <div class="info">
                    <h3 class="name">${char.name}</h3>
                    <h3 class="house">${char.house}</h3>
                </div>
            </div>`
        }
        else {
            cards.innerHTML += `
            <div class="card">
                <img src="img/missing_character.svg" alt="${char.name}" style="height: 227px; width: 160px; object-fit: cover;">
                <div class="info">
                    <h3 class="name">${char.name}</h3>
                    <h3 class="house">${char.house}</h3>
                </div>
            </div>`
        }
    })

}


const searchCharacter = async () => {
    const cards = document.querySelector('#charCards')
    cards.innerHTML = '<img src="img/loading.gif" alt="loading" style="height: 230px;">'
    const response = await filter()
    const data = await response.json()
    const searchInput = document.querySelector('#searchChar').value
    cards.innerHTML = ''
    data.map((char) => {
        if (char.name.toLowerCase().includes(searchInput.toLowerCase()) && searchInput != '') {
            if (char.image) {
                cards.innerHTML += `
                <div class="card">
                    <img src="${char.image}" alt="${char.name}" style="height: 227px; width: 160px; object-fit: cover;">
                    <div class="info">
                        <h3 class="name">${char.name}</h3>
                        <h3 class="house">${char.house}</h3>
                    </div>
                </div>`
            }
            else {
                cards.innerHTML += `
                <div class="card">
                    <img src="img/missing_character.svg" alt="${char.name}" style="height: 227px; width: 160px; object-fit: cover;">
                    <div class="info">
                        <h3 class="name">${char.name}</h3>
                        <h3 class="house">${char.house}</h3>
                    </div>
                </div>`
            }
        }
    })
}

const getAllSpell = async () => {
    const cards = document.querySelector('#spellCards')
    cards.innerHTML = '<img src="img/loading.gif" alt="loading" style="height: 230px;">'
    const response = await fetch(`https://hp-api.onrender.com/api/spells`)
    const data = await response.json()
    const filter = document.querySelector('#filtroSpell').value
    cards.innerHTML = ''
    data.map((spell) => {
        if(filter==='curse'){
            if(spell.name.toLowerCase().includes('curse') || spell.description.toLowerCase().includes('curse') && !(spell.name.toLowerCase().includes('protego'))){
                cards.innerHTML += `
                <div class="card" style="width: 160px;">
                    <div class="info">
                        <h3 class="name">${spell.name}</h3>
                        <p class="description">${spell.description}</p>
                    </div>
                </div>`
            }
        }
        else {
            cards.innerHTML += `
                <div class="card" style="width: 160px;">
                    <div class="info">
                        <h3 class="name">${spell.name}</h3>
                        <p class="description">${spell.description}</p>
                    </div>
                </div>`
        }
    })
}
const searchSpell = async () => {
    const cards = document.querySelector('#spellCards')
    cards.innerHTML = '<img src="img/loading.gif" alt="loading" style="height: 230px;">'
    const response = await fetch(`https://hp-api.onrender.com/api/spells`)
    const data = await response.json()
    const searchInput = document.querySelector('#searchChar').value
    cards.innerHTML = ''
    data.map((spell) => {
        if (spell.name.toLowerCase().includes(searchInput.toLowerCase()) && searchInput != '') {
            cards.innerHTML += `
            <div class="card" style="width: 160px;">
                <div class="info">
                    <h3 class="name">${spell.name}</h3>
                    <p class="description">${spell.description}</p>
                </div>
            </div>`
        }
    })
}