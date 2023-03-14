'use strict';

//1. 
var a = 78;
var b = 34;
//delete a;
//delete window.b;
var myObject = { property1: 1, property2: 2, property1: 1 };


//2.
const users = [
    { name: 'Fabio', surname: 'Biondi' },
    { name: 'Marco', surname: 'Polo' },
];
const user = { name: 'Lorenzo', surname: 'Verdi' };

var newUsers = [...users, user];
//console.log(newUsers[2]);

//ispisivanje svih imena

//1.način ispisivanja svih usera
for (let i = 0; i < newUsers.length; i++){
    console.log(newUsers[i].name);
}

//2.način ispisivanja svih usera
newUsers.forEach(function (item){
    console.log(item.name);
});

//3.način ispisivanja svih usera
for (let c in newUsers){
    console.log(newUsers[c].name);
}




//3. 
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log('The number is ' + i);
    }, 5000);
}
//console.log(i);