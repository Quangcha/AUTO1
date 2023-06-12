var obj = JSON.parse($response.body);
var replacedJSON = JSON.stringify(obj).replace(/black_list_/g, "");
var newobj = JSON.parse(replacedJSON);
$done({body: JSON.stringify(newobj)});
