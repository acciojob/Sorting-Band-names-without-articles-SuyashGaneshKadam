//your code here
let ul = document.getElementById("band");
let arr = ["The Virupaksha Temple", "Victoria Memorial", "Tajmahal"];
// console.log(arr);

function getArticleLessString(input) {
  let words = input.split(" ");
  let nonArticleWords = words.filter((word) => {
    let smallCaseWord = word.toLowerCase();
    if (
      smallCaseWord === "the" ||
      smallCaseWord === "an" ||
      smallCaseWord === "a"
    ) {
      return false;
    }
    return true;
  });
  return nonArticleWords.join(" ");
}

let hashMap = {};
let arr1 = [];

for (let i = 0; i < arr.length; i++) {
  let articleLessString = getArticleLessString(arr[i]);
  hashMap[articleLessString] = arr[i];
  arr1.push(articleLessString);
}
arr1.sort();
let outputList = [];
arr1.forEach((newString) => {
  outputList.push(hashMap[newString]); //
});
// console.log(outputList);

for (let i = 0; i < outputList.length; i++) {
  let li = document.createElement("li");
  li.innerText = outputList[i];
  ul.append(li);
}
