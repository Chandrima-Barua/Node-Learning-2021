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
};

