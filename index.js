'use strict';
const MongoClient = require('mongodb').MongoClient;
let config = {
    url:'mongodb://localhost:27017/itcast'
}
exports.config =function(key, value){
   config[key] = value
}
//插入数据
//@p1 集合名称
//@p2 插入对象
exports.insert = function(collectionName,obj,callback) {
    MongoClient.connect(config.url, function(err, db) {
        let collecton = db.collection(collectionName);
        collecton.insert(obj, function(err, result) {
            db.close();
            callback(err,result);
        });
        
    });
}


//更新数据
exports.update = function(collectionName,oldObj,newObj,callback) {
    MongoClient.connect(config.url, function(err, db) {
        let collecton = db.collection(collectionName);
        collecton.updateMany(oldObj,{$set:newObj},function(err, result) {
            db.close();
            callback(err,result);
            
        });  
    });
}
//查找数据
exports.find = function(collectionName,obj,callback) {
    MongoClient.connect(config.url, function(err, db) {
        let collecton = db.collection(collectionName);
        collecton.find(obj).toArray(function(err, result) {
            db.close();
            callback(err,result); 
        });  
    });
}

//删除数据
exports.delete = function(collectionName,obj,callback) {
    MongoClient.connect(config.url, function(err, db) {
        let collecton = db.collection(collectionName);
        collecton.deleteMany(obj, function(err, result) {
            db.close();
            callback(err,result); 
        });  
    });
}
// exports.insert('users',{a:'def'},function(err,data){
//         if(err) throw err;
//     console.log(data);
// })

// exports.update('users',{a:'def'},{a:'aaa'},function(err,data){
//     if(err) throw err;
//     console.log(data);
// });
// exports.find('users',{a:'aaa'},function(err,data){
//     console.log(data)
// })
exports.delete('users',{a:'aaa'},function(err,data){
    console.log(data);
    
})
