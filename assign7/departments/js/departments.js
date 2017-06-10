/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: departments.js
Chapter: 13
Assignment #: 7
Date: 5/9/17 
*/
$(document).ready(function(){
  //data for department
  var data = { depts: [
    { name:"Accounting",
      employees: [
        {photo: "./images/Angela_Martin.jpg", firstName: "Angela", lastName: "Martin", title: "Senior Accountant"},
        {photo: "./images/Kevin_Malone.jpg", firstName: "Kevin", lastName: "Malone", title: "Accountant"},
        {photo: "./images/Oscar_Martinez.jpg", firstName: "Oscar", lastName: "Martinez", title: "Accountant"}]
    },
    { name: "Customer Service",
      employees: [
        {photo: "./images/Kelly_Kapoor.jpg", firstName: "Kelly", lastName: "Kapoor", title: "Customer Service Rep."}]
    },
    { name: "Human Resources",
      employees: [
        {photo: "./images/Toby_Flenderson.jpg", firstName: "Toby", lastName: "Flenderson", title: "Human Resources Manager"}]
    },
    { name: "Management",
      employees: [
        {photo: "./images/Ryan_Howard.jpg", firstName: "Ryan", lastName: "Howard", title: "Vice President, North East"},
        {photo: "./images/Michael_Scott.jpg", firstName: "Michael", lastName: "Scott", title: "Regional Manager"},
        {photo: "./images/Dwight_Schrute.jpg", firstName: "Dwight", lastName: "Schrute", title: "Assistant Regional Manager"},
        {photo: "./images/Jim_Halpert.jpg", firstName: "Jim", lastName: "Halpert", title: "Assistant Regional Manager"}]
    },
    { name: "Sales",
      employees: [
        {photo: "./images/Andy_Bernard.jpg", firstName: "Andy", lastName: "Bernard", title: "Sales Director"},
        {photo: "./images/Phyllis_Lapin.jpg", firstName: "Phyllis", lastName: "Lapin", title: "Sales Representative"},
        {photo: "./images/Stanley_Hudson.jpg", firstName: "Stanley", lastName: "Hudson", title: "Sales Representative"}]
    },
    { name: "Support",
      employees: [
        {photo: "./images/Pamela_Beesly.jpg", firstName: "Pamela", lastName: "Beesly", title: "Receptionist"},
        {photo: "./images/Creed_Bratton.jpg", firstName: "Creed", lastName: "Bratton", title: "Quality Assurance"},
        {photo: "./images/Meredith_Palmer.jpg", firstName: "Meredith", lastName: "Palmer", title: "Supplier Relations"}] 
    }]
  };

  //title of department
  var title = "{{#depts}}<h1>{{name}}</h1>" +
            "<ul>{{#employees}}{{>employee}}{{/employees}}</ul>{{/depts}}";
  
  //info for each employee
  var partials = {employee: "<li><img src='{{photo}}'/>" +
                  "<span>{{firstName}} {{lastName}}, {{title}}</span></li>"};
  
  //add info to mustache template 
  var html = Mustache.to_html(title, data, partials);

  //add it to the html
  $("#deptArea").html(html);
});