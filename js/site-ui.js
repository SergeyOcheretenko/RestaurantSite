class UI {
  static load_page_content() {
    this.menu = document.getElementsByClassName('menu')[ 0 ];
    this.clear_menu();
    this.checker = false;
    this.last = null;
    this.draw_menu(api.items);
  };
  static draw_menu(bigArray) {
    this.last = bigArray;
    let array = bigArray;
    if (array.length > 21 && !this.checker) array = array.slice(0, 21);
    for ( let one of array )
    {
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
    };
    if (bigArray.length > 21 && !this.checker) 
    {
      const more = document.createElement('div');
      more.className = 'more';
      more.innerText = 'View more';
      more.onclick = UI.viewMoreLess;
      this.menu.appendChild(more);
    };
  };
  static viewMoreLess() {
    UI.checker = !this.checker;
    document.getElementsByClassName('more')[0].style.display = 'none';
    UI.draw_menu(UI.last);
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
