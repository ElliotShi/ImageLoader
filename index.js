import ImageLoader from './imageLoader.js';

let imageLoader = new ImageLoader();

let images = {
  "one": "http://orig14.deviantart.net/08db/f/2012/145/2/f/one_piece_marble_play_by_iviarker-d511vb0.jpg",
  "two": "http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/styles/large/public/2015/04/28/one-piece-universal-studios.jpg",
  "three": "https://s-media-cache-ak0.pinimg.com/736x/f4/9e/63/f49e63303cd0647ef286c4a0ef7ba0ec.jpg"
}

imageLoader.loader(images).then(() => alert("all images load completed without error!"));
imageLoader.on('success', function(data){
  let Li = document.createElement('li');
  let content = document.createTextNode(data[0] + ' of total ' + data[1] + ' loading completed.');
  Li.appendChild(content);
  let Ul = document.getElementById('progress');
  Ul.appendChild(Li);
});
imageLoader.on('fail', function(data){
  document.getElementById('failed').innerHTML = data + ' loading failed.';
})