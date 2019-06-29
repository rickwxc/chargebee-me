const chargebee = require("../src/chargebee-obj");
const pullEvents = require('../src/pull-via-events-api');

;(async()=>{
  let x = pullEvents(chargebee, {
    limit : 2,
    "sort_by[asc]" : "occurred_at",
    "occurred_at[after]" : 0
  });

  let data;
  do{
    data = await x.next();
    console.log(data)
  }while(!data.done)
})()
