/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const st1 = str1.toLowerCase();
  const st2 = str2.toLowerCase();
  if(st1.length!=st2.length)return false;

  const letterCount={};
  for(let i=0;i<st1.length;i++){
    let ch=st1[i];
    if(!letterCount[ch]){
      letterCount[ch]=1;
    }
    else{
      letterCount[ch]+=1;
    }
  }

  for(let i=0;i<st2.length;i++){
    let ch=st2[i];
    if(!letterCount[ch]){
      return false;
    }
    
      letterCount[ch]--;
    
  }
  return true;
}

module.exports = isAnagram;
