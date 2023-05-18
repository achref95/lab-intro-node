class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort()
    this.length = this.items.length
  }

  get(pos) {
    if (pos < 0 || pos > this.length) {
      throw new Error('OutOfBounds')
    }
    return this.items[pos]
  }

  max() {
    if (!this.items) {
      throw new Error('OutOfBounds')
    }
    return Math.max(...this.items)
  }

  min() {
    if (!this.items) {
      throw new Error('OutOfBounds')
    }
    return Math.min(...this.items)
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
