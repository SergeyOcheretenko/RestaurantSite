class UI {
  static clear(element) {
    element.innerHTML = '';
  };
  static clear_menu() {
    UI.clear(UI.menu);
  }
  static load_page_content() {
    this.menu = document.getElementsByClassName('menu')[ 0 ];
    this.clear_menu();
    this.checker = false;
    this.last = null;
    this.more = document.createElement('div');
    this.more.className = 'more';
    this.more.onclick = UI.viewMoreLess;
    this.draw_menu(api.items);
  };
  static new_menu_element(info) {
    const element = document.createElement('div');
    element.className = 'menu-item';
    const container = document.createElement('div');
    const name = document.createElement('h3');
    name.className = 'dish-name';
    name.innerText = info.name;
    container.appendChild(name);
    element.appendChild(container);
    const desc = document.createElement('p');
    desc.className = 'dish-describe';
    if (info.type != 'pizza') desc.innerText = 'Integer ullamcorper neque eu purus';
    else desc.innerText = 'Diameter ' + info.dm + ' dm.';
    container.appendChild(desc);
    const weight = document.createElement('h3');
    weight.className = 'price-item';
    weight.innerText = info.weight + 'g.';
    element.appendChild(weight);
    return element;
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
      const element = UI.new_menu_element(one);
      UI.menu.appendChild(element);
    };
    if (!this.checker) UI.more.innerText = 'View more';
    else UI.more.innerText = 'View less';
    if (bigArray.length > 21) UI.menu.appendChild(UI.more);
  };
  static viewMoreLess() {
    UI.checker = !UI.checker;
    UI.clear_menu();
    UI.draw_menu(UI.last);
  };
  static switch_type(type) {
    const arr = api.getByType(type);
    UI.clear_menu();
    UI.draw_menu(arr);
  };
  static sort() {
    UI.clear_menu();
    UI.draw_menu(api.sortByWeigth());
  };
  static formInfo( numb ) {
    let responce;
    if ( !numb ) responce = form.getBookTableData();
    else responce = form.getMessage();
    if ( !responce ) UI.formSuccess(numb);
    else UI.formError(responce, numb);
  };
  static formSuccess (numb) {
    const formfield = document.getElementsByClassName('formfield')[numb];
    const succesText = document.createElement('h2');
    succesText.className = 'book-a-table-title';
    succesText.innerText = 'Sent succesfully!';
    formfield.innerHTML = '';
    formfield.appendChild(succesText);
  };
  static formError (key, numb) {
    const field = document.getElementsByClassName('errors')[numb];
    field.innerText = `Error in ${key}!`;
  };
};
