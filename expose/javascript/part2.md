1. 3 will be present in console. var i can be accessed outside block, and by the end of the incrementation in for loop, i will be incremented to 3, so console would log 3.
2. 150 will be present in console. var discountedPrice can be accessed outside block, and after the for loop execute, discountedPrice would be last changed to prices[2] * (1-discount), which is 300*0.5=150, so console would log 150.
3. 150 will be present in console. After the for loop execute, finalprice would be last changed to Math.round(discountedPrice*100)/100, which is 150, so console would log 150. var finalprice is declared in the same block as in the console log statement, whether it's declared by var or other, it will still be able to log into console.
4. [50, 100, 150] would be returned. In the function, each element of the prices would be applied with some transformation through the for loop, more specifically, they would be round up value of 0.5 times original value, and each new value would be pushed into the list discounted, which is the return variable, so based on original prices [100,200,300] discounted would be [50,100,150].
5. error of undifined i. This is because let i can only be accesed within block, in this case only inside the for loop, line 12 is outside the for loop so we can no longer access i.
6. error of undifined discountedPrice. This is because let discountedPrice is declared in for loop, and it can only be accesed within the for loop, line 13 is outside the for loop so we can no longer access discountedPrice.
7. 150 will be present in console. let finalprice is declared in the same block as in the console log statement, so even though we can only access finalprice within the same block it is declared, we are still able to access it through line 14.
8. [50, 100, 150] would be returned. The function worked just as mentioned in question 4, as the for loop proceed, list discounted will push the round value of 0.5 times each price in prices, making discounted [50, 100, 150], and because the return statement is in the same block (function block) as the declared statement of discounted, it will return discounted as the updated list with new values, in this case return [50, 100, 150].
9. error of undifined i. This is because let i can only be accesed within block, in this case only inside the for loop, line 11 is outside the for loop so we can no longer access i.
10. 3 will be present in console. const length is declared in the same block as the log statement, so it can be accessed by the console.log, and because the length of prices is 3, length will be set to 3 through declaration.
11. [50, 100, 150] would be returned. By declaring const discounted, we make sure discounted cannot be reassigned, but pushing to a list is not reassigned, it's just adjusting.
12. A. student.name;
    B. student['grad year'];
    C. student.greeting();
    D. student['favourite teacher'].name;
    E. student.courseLoad[0];
13. A. '3'+2
    output: '32'
    explanation: 2 is mapped to its string representation and concat with '3', returning '32'.
    B. '3'-2
    output: 1
    explanation: '3' is mapped to its int representation and perform calculation of 3 - 2 returning 1.
    C. 3+null
    output: 3
    explanation: null is mapped to its numerical representation which is 0, 3+0 is 3.
    D. '3'+null
    output: '3null'
    explanation: null is mapped to string prepresentation and concat with '3', returning '3null'/
    E. true+3
    output: 4
    explanation: true is mapped to numerical representation which is 1, 1+3 is 4.
    F. false+null
    output: 0
    explanation: false and null are both mapped to numerical representation, which are both 0, so 0+0 is 0.
    G. '3'+undefined
    output: '3undefined'
    explanation: undefined is mapped to string representation and concat with '3', returning '3undefined'.
    H. '3'-undefined
    output: NaN
    explanation: cannot perform string subtraction so return NaN.
14. A. '2'>1
    output: true
    explanation: string '2' is mapped as number 2, 2>1, so evaluates to true
    B. '2'<'12'
    output: false
    explanation: both are string so perform string comparison, compare first digit of both strings first and see that '2' is bigger than '12' in string comparison, so evaluates to false.
    C. 2=='2'
    output: true
    explanation: == compares value of the variables, string '2' is mapped to 2, so evaluates to true.
    D. 2==='2'
    output: false
    explanation: === is check strickly equal, even though numerical value are the same, the datatypes are not the same, number and string, so evaluate to false.
    E. true==2
    output: false
    explanation: true is mapped to number 1, and comparison between value 1 and 2 is not equal, so evaluates to false.
    F. true===Boolean(2)
    output: true
    explanation: Boolean(2) is true as 2 is nonzero, this becomes comparison between true and true, which values and datatypes are both the same so evaluates to true.
15. '==' compares the value with type conversion, so it compares values after changing them to the same datatypes. '===' is strictly equals, comparison without performing type conversion, check both the value of variables and the datatypes, only if both are equal, returns true.
17. returns [2,4,6].
    calling modifiedArray([1,2,3],doSomething) would let parameter array be [1,2,3], callback be doSomething. In the function modifiedArray, first create a new array, then iterate through the parameter array, which is [1,2,3], and apply callback, which is doSomething, to each element, and add the new element to the new created array. More specifically, doSomething works by returning the number passed in times 2, so this would mean through the for loop iteration, we take each element and apply doSomething, which is multiply it by 2, and add it to a new array. Thus the new array would be [2,4,6].
19. The output is 1432. Because the line to log 1 is the first one, and does not have a set time out function, so it is executed first. Because the log statement for 2 has a wait time of 1 second, and 3 is also timeout after line to log 2 is executed, so line 4 (log 3) is right after line 3 (log 2), and because line 3 has a wait time of 1 seconds, execute line 4, log 4 before that because line 5 does not have a settimeout function, so it goes before line 3 and 4. After line 5 is executed, then line 3 and 4 are executed. So the order logged from console is 1 4 3 2.