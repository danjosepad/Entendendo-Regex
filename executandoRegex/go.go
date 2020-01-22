package main // Definir como programa executavel

import (
	"bytes"
	"fmt"
	"regexp"
)

func main() {
	text := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

	regex9, _ := regexp.Complie("9")
	fmt.Println(regex9.MatchString(text)) // true
	fmt.Println(regex9.FindString(text)) // 9
	fmt.Println(regex9.FindStringIndex(text)) // [18 19]

	lettersRegex, _ := regexp.Compile("[a-f]")
	fmt.Println(lettersRegex.FindAllString(text, 2)) // 2 representa o numero desejado
	// [a b]

	fmt.Println(lettersRegex.ReplaceAllString(text, "found"))
	// 0,1,2,3,4,5,6,7,8,9,found,found,found,found,found,found

	result := lettersRegex.ReplaceAllFunc([]byte(text), bytes.toUpper) //Substitui todos os elementos por uma função
	fmt.Println(string(resullt))
	// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
}