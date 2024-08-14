// let cancion = {
//     _id: "musica",
//     title: "Goodbyes",
//     album: "Hollywood's Bleeding",
//     author: "Post Malone",

// }

// console.log(cancion.title);

// let MiFuncion = (numero) => {

//     cancion.album += numero
// }

// MiFuncion ()

// console.log(cancion);

console.log(axios)

axios.get('https://leonardoapi.onrender.com/songs')
    .then(function (response) {
        // handle success
        response.data.songs.map((song) => {
            let div = document.createElement('div')

            div.setAttribute('class', "flex hover:bg-slate-100 transition-all cursor-pointer py-3 px-1 gap-5 items-center font-bold text-white hover:text-black ")

            div.innerHTML = `
                <img src="${song.path.front}" alt="" class="h-28" style="border-radius: 20px">
                <div>
                    <p class="font-bold">${song.title}</p>
                    <p class="opacity-60" >${song.author}</p>
                </div>
            `
            div.addEventListener('click', () => {
                document.getElementById('audio-player-image').setAttribute('src', song.path.front)
                document.getElementById('audio-player-song').innerHTML = `${song.title}`
                document.getElementById('audio-player-author').innerHTML = song.author
                document.getElementById('current-song-audio').setAttribute('src', song.path.audio)

            })
            document.getElementById('container').appendChild(div)


        })
    })
