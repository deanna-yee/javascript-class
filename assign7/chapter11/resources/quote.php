<?php # Script 13.3 - quote.php
/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: quote.php
Chapter: 11
Assignment #: 7
Date: 5/6/17 
*/

// Set the content type:
header('Content-Type: application/json');

// Setup cURL:
$curl = curl_init('http://www.google.com/finance/info?infotype=infoquoteall&q=AAPL');

// Want to assign the results to a variable:
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);

// Close it:
curl_close($curl);

// Cut off the first three characters:
print substr($result,3);
?>