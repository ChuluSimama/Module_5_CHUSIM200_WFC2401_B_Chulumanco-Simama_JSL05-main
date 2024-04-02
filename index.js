const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "VIRGO'S GROOVE", artist: "Beyonce", genre: "R&B" },
    { title: "King Kunta", artist: "Kendrick Lamar", genre: "Rap" }, 
    { title: "Full Moon", artist: "Brandy", genre: "R&B" },
    { title: "Moment", artist: "Victoria Monet", genre: "R&B" },
    { title: "Get Ur Freak On", artist: "Missy Elliott", genre: "Rap" },
];

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "R&B",
    "Drax": "Pop",
    "Rocket": "Rock",
    "Groot": "Rap",
};

function generatePlaylist(guardians, songs) {
    const playlists = {};

    for (const [guardian, genre] of Object.entries(guardians)) {
        playlists[guardian] = songs.filter(song => song.genre === genre);
    }

    displayPlaylists(playlists);
}

function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlists');

    for (const [guardian, playlist] of Object.entries(playlists)) {
        const playlistElement = document.createElement('div');
        playlistElement.classList.add('playlist');

        const playlistTitle = document.createElement('h2');
        playlistTitle.textContent = `${guardian}'s Playlist`;
        playlistTitle.style.color = '#FFD700'; 
        playlistElement.appendChild(playlistTitle);

        const songList = document.createElement('ul');
        for (const song of playlist) {
            const songItem = document.createElement('li');
            songItem.classList.add('song');

            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title');
            songTitle.textContent = `${song.title} by ${song.artist}`;

            songItem.appendChild(songTitle);
            songList.appendChild(songItem);
        }

        playlistElement.appendChild(songList);
        playlistsContainer.appendChild(playlistElement);
    }
}

generatePlaylist(guardians, songs);




