function findMostFreqWord() {
  const elm = document.getElementById("text");
  let sentence = elm.textContent;
  const arr = sentence.replaceAll(".", "").split(" ");

  const occ = arr.reduce((apparence, word) => {
    apparence[word] = (apparence[word] || 0) + 1;
    return apparence;
  }, {});
    
  const mostRepeated = Object.keys(occ).reduce((a, b) =>
    occ[a] > occ[b] ? a : b
  );

  console.log(mostRepeated);
  console.log(occ[mostRepeated]);
}

findMostFreqWord();

function zebraColor() {
  const list = document.querySelectorAll("ul#cars li");
  [...list].forEach((li) => {
    if ([...list].indexOf(li) % 2 === 0) {
      li.style.backgroundColor = "white";
      li.style.color = "black";
    } else {
      li.style.backgroundColor = "black";
      li.style.color = "white";
    }
  });
}

zebraColor();

/*
Developers use specialized methods on the document object to target specific nodes in the tree. 
Method 	Description	Return Type
getElementById	Finds the single element with a specific, unique id. return	Single Element (or null)
getElementsByClassName	Finds all elements with a specific class name. return	HTMLCollection (Live)
getElementsByTagName	Finds all elements of a certain type (e.g., all <div> tags). return	HTMLCollection (Live)
querySelector	Uses CSS selector syntax to return the first matching element. return	Single Element
querySelectorAll	Uses CSS selector syntax to return all matching elements. return	NodeList (Static)
*/

function replaceText(myText) {
  const p = document.querySelector(".myText");
  const text = p.textContent;
  p.textContent = text.replaceAll("apple", "mengos");
}

replaceText();

function countUniqueLinks() {
  const links = document.querySelectorAll("a");
  console.log(links.length);
}

countUniqueLinks();
