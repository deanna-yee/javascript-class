/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
cookies.js
Chapter 9
Assignment 4
3/19/17
*/
// This script defines an object that has some cookie functions.

// Create one global object:
var COOKIE = {
    
    // Function for setting a cookie:
    //Chapter 9 Pursue 15
    setCookie: function(name, value, expire, path, domain) {
        'use strict';

        // Add validation!

        // Begin creating the value string:
        //Chapter 9 Pursue 14
        var str = '';
        if(typeof name == 'string'){
            if(name != ''){
                str =  encodeURIComponent(name) + '=' + encodeURIComponent(value);

                // Add the expiration:
                //Chapter 9 Pursue 14
                if((expire instanceof Date) && (expire.getTime())){
                    str += ';expires=' + expire.toGMTString();
                } else {
                    alert('expiration must be a valid Date.');
                }

                //Chapter 9 Pursue 15
                //add path
                if(path){
                    if((typeof path == 'string') && (path != '')){
                        str += ';path=' + path;
                    } else {
                        alert('path must be a string.');
                    }
                }

                //Chapter 9 Pursue 15
                //add domain
                if(domain){ 
                    if((typeof domain == 'string') && (domain != '')){
                        str += ';domain=' + domain;
                    } else {
                        alert('domain must be a string');
                    }
                }
            }else {
                alert('name must be a nonempty string');
            }
        } else {
            alert('name must be strings.');
        }
    
        // Create the cookie:
        //Chapter 9 Pursue 14
        document.cookie = str;
        

    }, // End of setCookie() function.
    
    // Function for retrieving a cookie value:
    getCookie: function(name) {
        'use strict';

        // Useful to know how long the cookie name is:
        var len = name.length;
        
        // Split the cookie value:
        var cookies = document.cookie.split(';');

        // Loop through the values:
        for (var i = 0, count = cookies.length; i < count; i++) {

            // Lop off an initial space:
            var value = (cookies[i].slice(0,1) == ' ') ? cookies[i].slice(1) : cookies[i];

			// Decode the value:
			value = decodeURIComponent(value);

            // Check if this iteration matches the name:
            if (value.slice(0,len) == name) {

                // Return the part after the equals sign:
                return value.split('=')[1];

            } // End of IF.
            
        } // End of FOR loop.
            
        // Return false if nothing's been returned yet:
        return false;

    }, // End of getCookie() function.
    
    // Function for deleting cookies:
    //Chapter 9 Pursue 15
    deleteCookie: function(name, path, domain) {
        'use strict';
        var str = encodeURIComponent(name) + '=;expires=Thu, 01-Jan-1970 00:00:01 GMT'
        //Chapter 9 Pursue 15
        if((path) && (domain)){
            str += ';path=' + path + ';domain=' + domain;
        }else if((path) && (!domain)){
           str += ';path=' + path;
        }else if((!path) && (domain)){
            str += ';domain=' + domain;   
        }
        document.cookie = str;
    } // End of deleteCookie() function.

}; // End of COOKIE declaration.