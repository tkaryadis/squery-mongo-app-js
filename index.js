var queries=require("./queries/cmql-app-cljs.core");

var q1cb = function (r){console.log(r);}

queries.q1js(q1cb);

