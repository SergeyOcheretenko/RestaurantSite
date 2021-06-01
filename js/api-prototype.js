class ProtAPI {
  constructor() {
    this.items = JSON.parse(data);
    this.byType = null;
    this.sorted = false;
  };

  getByType(type) {
    this.byType = this.items.filter(item => item.type == type);
    return this.byType;
  };

  sortByWeigth() {
    let res;
    const sorter = (f, s) => {
      if ((f.weight > s.weight && !this.sorted) || (f.weight < s.weight && this.sorted)) return 1;
      if ((f.weight < s.weight && !this.sorted) || (f.weight > s.weight && this.sorted)) return -1;
      return 0;
    };
    if (this.byType) res = this.byType;
    else res = this.items;
    this.sorted = !this.sorted;
    return res.sort(sorter);
  };
};
