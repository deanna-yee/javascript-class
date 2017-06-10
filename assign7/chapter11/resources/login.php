<?php # Script 13.3 - login.php

/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: contact.php
Chapter: 11
Assignment #: 7
Date: 5/6/17 
*/

if ( isset($_POST['email'], $_POST['password']) 
    && ($_POST['email'] == 'test@example.com') 
    && ($_POST['password'] == 'securepass') ) {
		echo 'VALID';
} else {
	echo 'INVALID';
}
?>