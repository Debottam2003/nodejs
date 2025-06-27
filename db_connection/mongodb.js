import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/dbapi");

let apiSchema = new mongoose.Schema({
    country: String,
    capital: String
});

let apis = mongoose.model("apis", apiSchema);

// let country = "new country";
// let capital = "my capital";

let data = await apis.findById({_id: '66ffc8ef6cfb6afeb1337c4d'});

let newData = await apis.create({ country: "new country", capital: "my capital" });

console.log(data);

console.log(newData);