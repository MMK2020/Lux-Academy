def checkLeap(year):
    
    if(year<1):
        #Checks so that only a positive value is entered.
        print("That year is invalid")
    else:
        #Leap year Algorithm
        if(year % 4 == 0 and year % 100 != 0 or year % 400 == 0):
            print(year," is a leap year." ) # It is a leap year
        else:
            print(year," is not a leap year." )# not a leap year


year = int(input("Enter year to check if it is leap year: "))


checkLeap(year)            