class CacheEntry {
  constructor(size) {
    this.data = [];
    this.size = size;
  }

  GetCacheEntry(key) {
   for (var i = 0; i < this.data.length; i++) {
    if (Object.keys(this.data[i])[0] === key) {
      var val = this.data[i][key];
      this.data.splice(i, 1);
      var obj = {};
      obj[key] = val;
      this.data.push(obj);
      return val;
    }
   }
   return null;
  }

  PutCacheEntry(key, value) {
    if (this.size > 0) {
      if (this.GetCacheEntry(key) === null) {
        var obj = {};
        obj[key] = value;
        this.data.push(obj);
        this.size--;
      } else {
        for (var i = 0; i < this.data.length; i++) {
          if (Object.keys(this.data[i])[0] === key) {
            this.data.splice(i, 1);
            var obj = {};
            obj[key] = value;
            this.data.push(obj);
          }
         }
      }
    } else {
      this.data.shift();
      this.size++;
      this.PutCacheEntry(key, value);
    }
  }

  log() {
    var result = ``;
    for (var i = 0; i < this.data.length; i++) {
      if(i != this.data.length - 1) {
        result += Object.keys(this.data[i]) + `\n`;
      } else {
        result += Object.keys(this.data[i]);
      }
     }
     return result;
  }
}