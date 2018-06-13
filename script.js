//While loops
var x = prompt('Are we there yet?');

while (x !== 'yes' && x !== 'yeah') {
    prompt('Are we there yet?');    
} alert('YAY, WE MADE IT!');
//Check .indexOf
var input = prompt('Are we there yet?');

while (input.indexOf('yes') === -1 && input.indexOf('yeah') === -1) {
    var input = prompt('Are we there yet?'); 
}
alert('YAY, WE MADE IT!');
