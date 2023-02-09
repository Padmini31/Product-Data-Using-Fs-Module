let fs = require("fs");
let prod = { pid: 3, pname: "tv", price:3200, qty:32};
let data = fs.readFileSync(__dirname + "\\myfile.json");//data in buffer format;
let array = JSON.parse(data);
let id = array.find(l=>l.pid==prod.pid);
if (prod.qty >= 10 && prod.price>=500 && id==undefined)
{
    if(array.length>=0)
    array.push(prod);
    fs.writeFileSync("myfile.json", JSON.stringify(array));
    console.log("Data stored");
}
else {
    if(prod.qty<10)
    console.log("product not stored.maximum qty of product should be minimum 10");
    else if(prod.price<500)
    console.log("product not stored.price of product should be 500 or more");
    else
    console.log("product not stored.id must be unique")
}