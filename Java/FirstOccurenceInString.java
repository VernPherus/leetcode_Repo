/*
 * 28. Find the Index of the First Occurrence in a String
 * Given two strings needle and haystack, return the index of the first occurrence of needle in
 * haystack, or -1 if needle is not part of haystack.

  * Possible solution:
  take first letter of needle, take length of needle
  test first letter of needle on haystack and finst first instance of that letter
  if instance detected, take current index, then test the next letters if they are the same word, use needle length for this
  if true, return index
  else continue
*/

import java.util.Arrays;

public class FirstOccurenceInString {
    public int strStr(String haystack, String needle) {

        char[] needleChars = needle.toCharArray();
        char[] haystackChars = haystack.toCharArray();
        int currentIndex = 0;
        boolean isEqual = false;

        while(currentIndex < haystackChars.length){
            if(needleChars[0] == haystackChars[currentIndex]){
                //create a sub array copying only the required elements
                char[] tester = Arrays.copyOfRange(haystackChars, currentIndex, currentIndex+needleChars.length);
                for(int i = 0; i < needle.length(); i++){
                    if(Arrays.equals(needleChars, tester)){
                        isEqual = true;
                    }else break;
                }
            }
            if(isEqual){
                return currentIndex;
            }
            currentIndex++;
        }
        return -1;
    }
}
/*
 # This is my first ever leetcode problem that I solved without looking for the answer
 ---
 ### Date: 11/11/2023
 More solving to come <3.
 */

/*
 #Solution from leetcode(shortest solution)
 ***
 class Solution {
    public int strStr(String haystack, String needle) {
        int hLen = haystack.length();
        int nLen = needle.length();
        int nIndex = 0;
        for(int i=0; i<hLen; i++){
            // as long as the characters are equal, increment needleIndex
            if(haystack.charAt(i)==needle.charAt(nIndex)){
                nIndex++;
            }
            else{
                // start from the next index of previous start index
                i=i-nIndex;
                // needle should start from index 0
                nIndex=0;
            }
            // check if needleIndex reached needle length
            if(nIndex==nLen){
                // return the first index
                return i-nLen+1;
            }
        }
        return -1;
    }
 }
 ***
 */


