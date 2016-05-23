class ImageLoader{
  constructor(){
    this._events = new Map(); //to store event listener
  }

  on(event, action){
    this._events.set(event, []);
    this._events.get(event).push(action);
  };

  emit(event, ...args){
    let listeners = this._events.get(event);
    if(listeners && listeners.length){
      listeners.forEach((listener) => {
        listener(args);
      })
    }
  }

  loader(images){
    return new Promise((resolve, reject)=>{
      let imageArr = Object.getOwnPropertyNames(images);
      let success = 0;
      let fail = 0;
      let totalNo = imageArr.length;

      imageArr.forEach((key) => {
        let url = images[key];
        let img = new Image();
        img.src = url;
        img.onload = () => {
          success++;
          this.emit('success', success, totalNo);
          if(success === totalNo){
            resolve();
          }
        };
        img.onerror = () => {
          fail++;
          this.emit('fail', fail);
        }
      })
    })
  }
};

export default ImageLoader;