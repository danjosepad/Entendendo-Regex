import java.util.regex.*;

public class java {
  public static void main(String[] args) {
    String text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    Pattern lettersPattern = Pattern.complie("[a-f]");
    Matcher matcher = lettersPattern.Matcher(text);

    while (matcher.find()) {
      System.out.printf("Positions: %s, %s\tValue: %s%n", 
      matcher.start(), matcher.end(), matcher.group());
    }
    /* 
    Positions: 20, 21    Value: a
    Positions: 22, 23    Value: b
    Positions: 24, 25    Value: c
    Positions: 26, 27    Value: d
    Positions: 28, 29    Value: e
    Positions: 30, 31    Value: f
    */
    System.out.printf(text.replaceAll("[7-9]", "found"))
    // 0,1,2,3,4,5,6,found,found,found,a,b,c,d,e,f
  }
}