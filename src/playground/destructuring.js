//
// object de-structuring
//

console.log('destructuring');

const books = {
    title : 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher:{
        name: 'penguin'
    }
}

const {title, author} = books;

console.log(title);
console.log(author);

const {name: publisherName = "self-published"} = books.publisher;

console.log(publisherName);



//
// Array de-structuring
//


const address = ['203, Jawahar','Chanda Nagar','Hyderabad','TG'];

const address1 = [];


const [street, village, city, state] = address;

const [, , city1="Unkown"] = address1;

console.log(`You are in ${city}, in ${state}`)

console.log(`You are in ${city1} city.`)