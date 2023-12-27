class morseMaker():
    
    global divtxt
    divtxt = "+++++"
    
    def __init__(self):
        
        morseLetters = {
            "a" : ".-",
            "b" : "-...",
            "c" : "-.-.",
            "d" : "-..",
            "e" : ".",
            "f" : "..-.",
            "g" : "--.",
            "h" : "....",
            "i" : "..",
            "j" : ".---",
            "k" : "-.-",
            "l" : ".-..",
            "m" : "--",
            "n" : "-.",
            "o" : "---",
            "p" : ".--.",
            "q" : "--.-",
            "r" : ".-.",
            "s" : "...",
            "t" : "-",
            "u" : "..-",
            "v" : "...-",
            "w" : ".--",
            "x" : "-..-",
            "y" : "-.--",
            "z" : "--..",
        }
        
        morseNumbers = {
            0 : "-----",
            1 : ".----",
            2 : "..---",
            3 : "...--",
            4 : "....-",
            5 : ".....",
            6 : "-....",
            7 : "--...",
            8 : "---..",
            9 : "----.",
        }

    def startPrompt():
        print(divtxt)
    
    def textToMorse():
        txtIn = input("Enter your String here: ")
        
    
    