//Counting the frequency

//Checking if arr2 is contains the square of arr1
// function same(arr1, arr2){
// 	if(arr1.length !== arr2.length){
// 		return false;
// 	}
// 	let frequencyCounter1 = {}
// 	let frequencyCounter2 = {}
// 	for(let val of arr1){
// 		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
// 	}
// 	for(let val of arr2){
// 		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
// 	}
// 	for (let key in frequencyCounter1){
// 		if(!(key ** 2 in frequencyCounter2)){
// 			return false
// 		}
// 		if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
// 			return false
// 		}
// 	}
// 	return true
// }
//
// console.log(same([1,2,3,4], [1,4,9,16]))

//Anagrams
// function same(arr1, arr2){
// 	if(arr1.length !== arr2.length){
// 		return false;
// 	}
// 	let frequencyCounter1 = {}
// 	let frequencyCounter2 = {}
// 	for(let val of arr1){
// 		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
// 	}
// 	for(let val of arr2){
// 		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
// 	}
// 	for (let key in frequencyCounter1){
// 		if(!(key in frequencyCounter2)){
// 			return false
// 		}
// 		if(frequencyCounter2[key] !== frequencyCounter1[key]){
// 			return false
// 		}
// 	}
// 	return true
// }
//
// console.log(same('alex', 'lexa'))

function validAnagram(first, second){
	if (first.length !== second.length){
		return false;
	}
	
	const lookup = {}
	
	for (let i = 0; i < first.length; i++){
		let letter = first[i]
		lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
	}
	
	for (let i = 0; i < second.length; i++){
		let letter = second[i];
		if(!lookup[letter]){
			return false
		} else {
			lookup[letter] -= 1;
		}
	}
	return true;
}

console.log(validAnagram('stressed', 'desserts'))