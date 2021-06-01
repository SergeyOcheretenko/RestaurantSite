const http = require('http');
class API
{
    constructor ()
    {
        this.byType = null;
        this.localMenu = null;
        this.sorted = false;
        this.serverpath = 'localhost/';
    };
    static get (request)
    {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', this.serverpath + request, true);
        xmlHttp.send(null);
        return xmlHttp.responseText;
    };
    static getMenu ()
    {
        if (!localMenu) this.localMenu = JSON.parse(this.get('menu'));
        return this.localMenu;
    };
    static getByType (type)
    {
        this.byType = this.getMenu().filter(item => item.type == type);
        return this.byType;
    };
    static sortByWeight ()
    {
        let res;
        const sorter = (f, s) => {
            if ((f.weight > s.weight && !this.sorted) || (f.weight < s.weight && this.sorted)) return 1;
            if ((f.weight < s.weight && !this.sorted) || (f.weight > s.weight && this.sorted)) return -1;
            return 0;
        };
        if (this.byType) res = this.byType;
        else res = this.getMenu ();
        this.sorted = !this.sorted;
        return res.sort(sorter);
    };
};

export default API;