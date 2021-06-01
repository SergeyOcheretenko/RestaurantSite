class UI {
  static load_page_content() {
    this.menu = document.getElementsByClassName('menu')[ 0 ];
    this.clear_menu();
    this.draw_menu(api.items);
  };
  static draw_menu(bigArray) {
    let array = bigArray;
    if (array.length > 21) array = array.slice(0, 21);
    array.forEach(one => {
      const element = document.createElement('div');
      element.className = 'menu-item';
      const container = document.createElement('div');
      const name = document.createElement('h3');
      name.className = 'dish-name';
      name.innerText = one.name;
      container.appendChild(name);
      element.appendChild(container);
      const desc = document.createElement('p');
      desc.className = 'dish-describe';
      if (one.type != 'pizza') desc.innerText = 'Integer ullamcorper neque eu purus';
      else desc.innerText = 'Diameter ' + one.dm + ' dm.';
      container.appendChild(desc);
      const weight = document.createElement('h3');
      weight.className = 'price-item';
      weight.innerText = one.weight + 'g.';
      element.appendChild(weight);
      this.menu.appendChild(element);
    });
  };
  static clear_menu() {
    this.menu.innerHTML = '';
  };
  static switch_type(type) {
    const arr = api.getByType(type);
    this.clear_menu();
    this.draw_menu(arr);
  };
  static sort() {
    this.clear_menu();
    this.draw_menu(api.sortByWeigth());
  };
};
