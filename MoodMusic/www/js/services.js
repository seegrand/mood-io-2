angular.module('MoodMusic.services', [])

.factory("Songs", function(){

  var recentSongs = [{
    title: "Never Be Like You",
    artist: "Flume",
    img: "http://placehold.it/100x100"
  }, {
    title: "Shape Of You",
    artist: "Ed Sheeran",
    img: "http://placehold.it/100x100"
  }, {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    img: "http://placehold.it/100x100"
  }, {
    title: "Wonderwall",
    artist: "Oasis",
    img: "http://placehold.it/100x100"
  }, {
    title: "Sweet Home Alabama",
    artist: "Lynyrd Skynyrd",
    img: "http://placehold.it/100x100"
  }]

  return {
    all: function(){
      return recentSongs;
    }
  };
})

.factory("Moods", function(){

  var recentMoods = [{
    mood: "Angry",
    img: "http://placehold.it/100x100"
  }, {
    mood: "Happy",
    img: "http://placehold.it/100x100"
  }, {
    mood: "Sad",
    img: "http://placehold.it/100x100"
  }, {
    mood: "Anxious",
    img: "http://placehold.it/100x100"
  }, {
    mood: "Nervous",
    img: "http://placehold.it/100x100"
  }];

  return {
    all: function(){
      return recentMoods;
    }
  };

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
