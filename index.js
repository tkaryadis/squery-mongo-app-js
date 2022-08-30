//queries are in squery-mongo-app-cljs.core, that i compile as library with shadow-cljs
//and i can use those queries from here
var queries=require("./queries/squery-mongo-app-cljs.core");

var q1cb = function (r){console.log(r);}

queries.q1js(q1cb);

