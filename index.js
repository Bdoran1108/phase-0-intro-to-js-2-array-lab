// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveLastCat(){

  cats.pop();  
}

function removeLastCat (cat)  {
    const copy = [...cats]
    copy.pop(cat)
  return copy
}

removeLastCat(cat);



function destructivelyPrependCat(){
    cats.unshift('Bob');
}
destructivelyPrependCat();


function prependCat (cat)  {
    const copy = [...cats]
    copy.unshift(cat)
  return copy
}

prependCat(cat);

function  destructivelyRemoveFirstCat(){
    cats.shift();
}

destructivelyRemoveFirstCat();

function removeFirstCat (cat)  {
    const copy = [...cats]
    copy.shift(cat)
  return copy
}

removeFirstCat(cat);



function appendCat (cat)  {
    const copy = [...cats]
    copy.push(cat)
  return copy
}

appendCat(cat);

function destructivelyAppendCat(cat){
    cats.push(cat)
}

destructivelyAppendCat();





