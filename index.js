async function Request(strings,values){
  let response = await fetch(values.url);
  let response_data = await response.json()
  return response_data;
};

// var datas = {
//   url:'https://reqres.in/api/users?page=2',
//   method:'POST',
//   data:2
// };

// let req = Request`${datas}`;

let req = Request`${
{
  url:'https://reqres.in/api/users?page=2',
  method:'POST',
  data:2
}
}`;

req.then(function(res){
  console.log(res);
},function(err){
  console.log(err)
});
