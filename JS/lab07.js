//var today = new Date();

function writeOrder () {
    var customer = prompt ('What is your name?');
    var orderNumber = prompt ('How Many Meals you want?');
    
    if (orderNumber > 0 && orderNumber <= 1) { 
        order ='single meal!';
    } else if (orderNumber > 1 && orderNumber <= 2) { order ='double meal!';}
    else if (orderNumber > 2 && orderNumber <= 3) {
         order ='triple meal!';
     } else if (orderNumber>3 && orderNumber<50 ) { 
         order ='family meal!';
        } else {
             order ='are you serious!!! no meal enough for you';
            }
           document .write('<h2>' + customer + '</h2>');
            document .write('<h2>' + order + '</h2>');
        }
        writeOrder (); 
    
    
     