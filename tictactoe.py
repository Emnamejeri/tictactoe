import random
gamePiece = [0.0, 0.1, 0.2, 1.0, 1.1, 1.2, 2.0, 2.1, 2.2]

def main():
    userInput = userMove()
    machineOutput = computerMove()
    
    while userInput == machineOutput:
        machineOutput = computerMove()
    
    print("user chooses", userInput)
    print("System chooses", machineOutput)
    print(gameRules(userInput, machineOutput))
    
#function to prompt user for an input    
def userMove():
    userInput = float(input("Input piece location between 0.0 and 2.2 "))
    return userInput
        
#function to get input from computer
def computerMove():
    machineOutput = random.choice(gamePiece)
    return machineOutput
    
#function to loop through user input and computeroutput
def gameRules(userInput, machineOutput):
    while True: 
        if (userInput != machineOutput):
            print("Now add another location between 0.0 and 2.2 ")
            return ("remember you already cannot choose", userInput, machineOutput)
            
        else:
            print("Select another location")


main()
