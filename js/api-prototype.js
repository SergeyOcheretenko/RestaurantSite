
class API_prot 
{
    constructor ( path )
    {
        this.file = require ( path );
        this.items = JSON.parse ( this.file );
        this.byType = null;
    };

    getByType ( type )
    {
        this.byType = this.items.filter ( item => item.type == type );
        return this.byType;
    };

    sortByWeigth ( )
    {
        let res;
        const sorter = ( f, s ) =>
        {
            if ( f.weight > s.weight ) return 1;
            if ( f.weight < s.weight ) return -1;
            return 0;
        };
        if ( this.byType ) res = this.byType.sort ( sorter );
        else res = this.items.sort ( sorter );
        return res;
    };
};