import java.util.Arrays;

/**
 * ValidAnagram
 * 
 * Given two strings s and t, return true if t is an rearranging the letters of s, and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Things to take into account: 
 * "string", "striing" Can't just use contains
 * "unicode"
 * 
 */
public class ValidAnagram {

    public boolean isAnagram(String s, String t){

        boolean res = false;
        char[] s_char = s.toCharArray();
        char[] t_char = t.toCharArray();
        
        if(s.length() != t.length()) return res;

        Arrays.sort(s_char);
        Arrays.sort(t_char);

        if(Arrays.equals(s_char, t_char)) res = true;

        return res;
    }
}

/*
import java.util.Arrays;

class Solution {
    public boolean isAnagram(String s, String t) {
        char[] sChars = s.toCharArray();
        char[] tChars = t.toCharArray();
        
        Arrays.sort(sChars);
        Arrays.sort(tChars);
        
        return Arrays.equals(sChars, tChars);
    }
}
 */