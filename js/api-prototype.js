class API_prot 
{
    constructor ( )
    {
        this.items = JSON.parse ( data );
        this.byType = null;
    };

    static getByType ( type )
    {
        this.byType = this.items.filter ( item => item.type == type );
        return this.byType;
    };

    static sortByWeigth ( )
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