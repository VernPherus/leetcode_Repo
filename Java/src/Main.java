public class Main {
    public static void main(String[] args) {
        System.out.println("====================[CODE TEST ONGOING]====================");
        
        ValidAnagram anagraminator = new ValidAnagram();

        boolean res = anagraminator.isAnagram( "aacc", "cacc");

        System.out.println(res);

        System.out.println("====================[CODE TEST ENDED]====================");
    }
}