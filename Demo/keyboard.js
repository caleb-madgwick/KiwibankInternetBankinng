window.addEventListener( "load", function( windowLoadE ) {

    var qwerty = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", 
                    "A", "S", "D", "F", "G", "H", "J", "K", "L", 
                        "Z", "X", "C", "V", "B", "N", "M" ]

    var p, letter, button, holder;
    holder = document.getElementById( "buttonsHolder" );
    for ( var i = 65; i <= 90; i++ ) {
        if ( i == 65 || i == 75 || i == 84 ) {
            p = document.createElement( "p" );
        }
        letter =  qwerty[i-65];
        button = document.createElement( "button" );
        button.innerHTML = letter;
        button.setAttribute( "data-letter", letter );
        button.onclick = function( e ) { setLetter( this.getAttribute( "data-letter" ) ); };
        p.appendChild( button );
        if ( i == 74 || i == 83 || i == 90 ) {
            holder.appendChild( p );
        }
    }
} );
function setLetter( letter ) {
    var div = document.getElementById( "name" );
    div.innerHTML = div.innerHTML + letter;
}