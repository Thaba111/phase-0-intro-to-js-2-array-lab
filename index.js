//initial cats array
// Initialize the cats array
const cats = ["Milo", "Otis", "Garfield"];
 
  //before each
  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;
  
      cats.push('Milo', 'Otis', 'Garfield');
    });
  });
  


// 1. destructivelyAppendCat
function destructivelyAppendCat(name) {
    cats.push(name);
  }




//2. destructivelyPrependCat
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
 //3. destructivelyRemoveLastCat
 function destructivelyRemoveLastCat() {
    cats.pop();
  }


  //4.destructivelyRemoveFirstCat
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  // 5. appendCat(name)
  function appendCat(name) {
    return [...cats, name];
  }

  
  //6. prependCat(name)
  function prependCat(name) {
    return [name, ...cats];
  }

  
  //7. removeLastCat()
  function removeLastCat() {
    return cats.slice(0, cats.length - 1);
  }

  
  //8. removeFirstCat()
  function removeFirstCat() {
    return cats.slice(1);
  }
  



  