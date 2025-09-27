function* generator(musicas) {
  for (const musica of musicas) {
    yield musica;
  }
}

class Playlist {
  constructor(musicas = []) {
    this.musicas = musicas;
  }

  adicionarMusica(nome) {
    this.musicas.push(nome);
  }

  [Symbol.iterator]() {
    return generator(this.musicas);
  }
}

const playlist = new Playlist([]);

playlist.adicionarMusica('Musica 1');
playlist.adicionarMusica('Musica 2');
playlist.adicionarMusica('Musica 3');

for (const musica of playlist) {
  console.log(musica);
}