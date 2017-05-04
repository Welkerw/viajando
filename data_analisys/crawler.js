var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'VqSkPBVPQtSSSUeSd6F5Bztdu',
  consumer_secret: 'RuLNhkJRhJjcYeVIV9GrinsqNL9DsI458KaGoaCjlUIS5jnCRM',
  access_token_key: '229050848-oS40x5NbJpvRqrFk0o1iKiWb5zWxpcG2lCAy8Hk1',
  access_token_secret: 'tQVWwE0Z7GAEBv3TUEEohpzh15j6LDsanxam6HOTfC0Ml'
});

var MongoClient = require('mongodb').MongoClient
  , format = require('util').format;

  // Only run the rest of the code if we have a mongodb server with version >= 1.9.1
var track = "sextafeirasanta,sextasanta,sextafeirapaixao,sextafeiradapaixao,feriado,feriadao,recesso,feriadão,viajar,viagem,estrada,rumo,partiu,bora,viajando";

var stream = client.stream('statuses/filter', {track:track ,location:'Brazil',language:'pt'});
stream.on('data', function(event) {
  MongoClient.connect('mongodb://127.0.0.1:27017/viajando', function(err, db) {
    if(err) throw err;
     
     db.collection('pascoa').save(event,{w: 1}, function(err, records) {
        if (err) console.log("erro ao salvar tweet - " + event.text);
        console.log("record added "+ records);
        //  db.collection.update({_id : records[0]._id}, {"created_at": new Date(data[5]+"-"+data[2]+"-"+data[2] + " " + data[3]) });
        db.close();
      });
  });
 
});
 
stream.on('error', function(error) {
  throw error;
});