const translation = {
    "anglais": "english",
    "toi": "you",
    "moi": "me",
    "salut": "hello",

    "english": "anglais",
    "you": "toi",
    "me": "moi",
    "hello": "salut"
    
  };


  function translateWord(word) {
  
 /*    const translation = {
      "anglais": "english",
      "toi": "you",
      "moi": "me",
      "salut": "hello",

      "english": "anglais",
      "you": "toi",
      "me": "moi",
      "hello": "salut"
    }; */

    return translation[word] || null;
  }
  module.exports = {translation, translateWord};

  