class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (typeof item === 'number') this.items.push(item);
    this.items.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    this.length++
  }

  get(pos) {
    if (pos < this.length) { return this.items[pos]; }
    else { throw new Error('OutOfBounds'); }
  }

  max() {
    if (this.length === 0) { throw new Error('EmptySortedList'); }
    else{ return this.items[this.length - 1]; }
  }

  min() {
    if(this.length === 0){throw new Error('EmptySortedList');}
    else{ return this.items[0];}
  }

  sum() {
    let sum = 0;
    if(this.length === 0){return 0;}
    else { this.items.forEach(x => { sum += x;}); }
    //this.items.forEach( () => Element += sum );
    return sum;
  }

  avg() {}
}

module.exports = SortedList;
