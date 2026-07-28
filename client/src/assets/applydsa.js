import { blog_details_data } from "./assest";

export const getRandomMcq = () => {
    const all = blog_details_data.flatMap(b => b.preliminary_exam_prep?.mcqs || []);
    const randomIndex = Math.floor(Math.random() * all.length);
    return all[randomIndex];
};

console.log("Random Question of the Day:", getRandomMcq());


function manualArrayItemSearch(arr, targetItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetItem) {
      return i;
    }
  }
  return -1
}
const array = ["helal", "belal", "tuni", "ommi", "ria"];
const find = "ommi";
console.log(manualArrayItemSearch(array, find));
    
