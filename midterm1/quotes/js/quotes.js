/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
quotes.js  
Chapter 7
Midterm 1
3/6/17
*/
// todo.js #3
// This script manages a quote list.

// This function does all the work.
// It is immediately-invoked.
(function(){
    
	// Variable that stores the tasks:
    var quotes = ['One of the most beautiful qualities of true friendship is to understand and to be understood. - Lucius Annaeus Seneca',
                  'There is only one happiness in this life, to love and be loved. - George Sand',
                  'Do not let your hearts be troubled. Trust in God; trust also in me. - Jesus Christ']; 

	// Function called when the form is submitted.
	// Function adds a quote to the global array.
    function addQuote() {
        'use strict';
        var quote = document.getElementById('quote');

        if (quote.value) {
            quotes.push(quote.value);
            quote.value = '';
            showQuotes();        
        } // End of quote.value IF.

	    // Return false to prevent submission:
        return false;

    } // End of addQuote() function.

    //asks for what quote number to delete, deletes the quote, and updates the list
    function deleteQuote() {
        'use strict';

        //prompt the quote number to delete
        var deleteQuote = prompt('What quote number do you want to delete?');

        if(deleteQuote != null) {
            //converts the quote number to the index of the array it is at
            deleteQuote = parseInt(deleteQuote) - 1;

            //delete the quote
            if((deleteQuote >= 0) && (deleteQuote < quotes.length)){
                quotes.splice(deleteQuote, 1);
            }

            //make list
            showQuotes();
        }
    }

    function modifyQuote(){
        'use strict';

        //prompt the quote number to modify
        var quoteNum = prompt('What quote number would you like to modify?');

        if(quoteNum != null){
            //converts the quote number to the index of the array it is at
            quoteNum = parseInt(quoteNum) - 1;

            //modify quote
            if((quoteNum >= 0) && (quoteNum < quotes.length)){
                var modifyQuote = prompt('Please modify the text:', quotes[quoteNum]);
                quotes[quoteNum] = modifyQuote;
            }
            //make list
            showQuotes(); 
        }

    }

    //goes through the array and displays the quotes
    function showQuotes(){
        'use strict';
        var output = document.getElementById('output');
        var message = '';
        message = '<h2>Quotes</h2><ol>';
        for (var i = 0, count = quotes.length; i < count; i++) {
            message += '<li>' + quotes[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message; 
    }

    // Initial setup:
    function init() {
        'use strict';
        document.getElementById('add').onclick = addQuote;
        document.getElementById('delete').onclick = deleteQuote;
        document.getElementById('modify').onclick = modifyQuote;

        showQuotes();
    } // End of init() function.
    window.onload = init;

})();