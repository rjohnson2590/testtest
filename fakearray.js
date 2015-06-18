module.exports = {
  length: 0,
  pop: function() {
    var returnValue = this[this.length - 1];
    this[this.length-1] = undefined;
    this.length--;
    return returnValue;
  },
  push: function(input) {
    this[this.length] = input;
    this.length++;
  },
  map: function(callback){
    var array=[];
    for(var i=0; i<this.length; i++){
      array.push(callback(this[i]))
    }return array
  },
  join: function(sep){
    var array=[]
    for(var i=0; i<this.length;i++){
      array.push(this[i]+sep)
    }
    return array.toString()
  },
  filter: function(callback){
    var array=[]
    for(var i=0;i<this.length;i++){
      if(callback(this[i])){ 
        array.push(this[i])
      }
    }
  return array
  },
  reduce: function(callback,start){
    var accum= start;
    for(var i=0; i<this.length;i++){
        accum = callback(accum, this[i]) 
        
          
      }
  return accum;}
};