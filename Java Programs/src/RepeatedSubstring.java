public class RepeatedSubstring {
    public boolean repeatedSubstringPattern(String s){
        StringBuilder testString = new StringBuilder();
        String pattern = null;

        for(int i = 0; i < s.length(); i++){
            testString.append(s.charAt(i));
            pattern = sampleString(String.valueOf(testString), s.length());
            if(pattern == s){
                return true;
            }
        }

        return false;
    }

    private String sampleString(String t, int StringLength){
        StringBuilder sample = new StringBuilder();
        int j = 0;
        while(j <= StringLength){
            sample.append(t);
            j += sample.length();
        }

        return String.valueOf(sample);
    }
}
