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
    const onerow = 3;
    let rows;
    if ( !this.checker ) rows = 5;
    else rows = 9;
    array = array.slice(0, rows * onerow);
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
    const more = document.createElement('div');
    more.className = 'more';
    more.onclick = UI.viewMoreLess;
    if (!this.checker) more.innerText = 'View more';
    else more.innerText = 'View less';
    if (bigArray.length > 21) this.menu.appendChild(more);
  };
  static viewMoreLess() {
    UI.checker = !UI.checker;
    UI.clear_menu();
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
  static formInfo() {
    const responce = form.getBookTableData();
    if ( !responce ) this.formSuccess();
    else this.formError(responce);
  };
  static formSuccess () {
    const formfield = document.getElementsByClassName('book-a-table-main-content')[0];
    const succesText = document.createElement('h2');
    succesText.className = 'book-a-table-title';
    succesText.innerText = 'Sent succesfully!';
    formfield.innerHTML = '';
    formfield.appendChild(succesText);
  };
  static formError (key) {
    const field = document.getElementsByClassName('book-a-table-title')[0];
    field.innerText = `Error in ${key}!`;
  };
};
