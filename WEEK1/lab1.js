//Exercise 1:

console.log('\nCapitalizing "the quick brown fox".\n')

sentence = "the quick brown fox"

function capitalize(sentence) {

   words = sentence.split(' ');

   capitalize = words.map(word => {
    capitalizedWords = word[0].toUpperCase() + word.slice(1).toLowerCase();

    return capitalizedWords
   });

   newScentence = capitalize.join(' ')

   return newScentence
}

console.log(capitalize(sentence))