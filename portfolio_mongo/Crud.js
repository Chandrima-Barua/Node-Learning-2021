module.exports = {
    InsertSingleData: function (MyMongoClient,myDatabase,myCollection) {
        var myData =  { name: 'Chandrima Barua', idNo:'1', designation: 'Software Engineer', country: 'Bangladesh' };

        myCollection.insertOne(myData, function (error) {
            if (error){
                console.log("Failed");
            }else{
                console.log("Successfully inserted!");
            }
        });
        },
    InsertMultipleData:function (MyMongoClient,myDatabase,myCollection) {
            var myData =  [{ name: 'Chandrima Barua', idNo:'1', designation: 'Software Engineer', country: 'Bangladesh' },
                {name: 'Nusrat Jahan',idNo:'2', designation: 'Android Developer', country: 'Bangladesh' },
                {name: 'Ifteqarul Joy', idNo:'3', designation: 'Android Developer Intern', country: 'Bangladesh' }];

            myCollection.insertMany(myData, function (error) {
                if (error){
                    console.log("Failed");

                }else{
                    console.log("Successfully inserted!");
                }
            });
    },
    DeleteSingleData: function (MyMongoClient,myDatabase,myCollection) {
        var myData = {idNo :'1'};

        myCollection.deleteOne(myData, function (error) {
            if (error){
                console.log("Failed");

            }else{
                console.log("Successfully deleted!");

            }
        })
    },
    FindData:function (MyMongoClient,myDatabase,myCollection) {
        myCollection.find().toArray(function (error, resultObject) {
            if(error){
                console.log(error);

            }else{
                console.log(resultObject);
            }
        })
    },
    FindDatabyProjection:function (MyMongoClient,myDatabase,myCollection) {
        var ItemObject = {};
        var ItemProjection = {projection: {idNo: ""}};

        myCollection.find(ItemObject, ItemProjection).toArray(function (error, resultObject) {
            if(error){
                console.log(error);

            }else{
                console.log(resultObject);
            }
        })
    },
    UpdateData:function (MyMongoClient,myDatabase,myCollection) {
        var key = {idNo: '2'};
        var upData = {$set: {name:"Nusrat Zahan"}};
        myCollection.updateOne(key, upData,function (error) {
            if(error){
                console.log(error);
            }else{
                console.log("Successfully Updated");
            }
        })
    }
};

