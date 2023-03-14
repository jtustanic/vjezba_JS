var sc = require('./stepcounter.js');

sc.walk(); //1
//console.log(sc.getTotalSteps()); //1

sc.walk();
sc.walk();
sc.walk();
console.log(sc.getTotalSteps());