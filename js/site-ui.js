class UI 
{
    load_page_content ( ) 
    {
        this.menu = null;
    };
    draw_menu ( array )
    {
        array.forEach ( one => {
            let element = document.createElement ( 'div' );
                element.className = 'some';
        } );
    };
    clear_menu ( )
    {

    };
    switch_type ( type )
    {
        const arr = api.getByType ( type );
        this.clear_menu ( );
        this.draw_menu ( arr );
    };
}