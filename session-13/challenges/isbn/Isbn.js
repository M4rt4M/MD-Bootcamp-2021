/* ISBN10:
- made up of 9 digits plus a check digit (which may be 'X')
- spaces and hyphens may be included in a code, but are not 
significant
- the check digit is calculated by multiplying each digit by 
its position (i.e., 1 x 1st digit, 2 x 2nd digit, etc.), 
summing these products together and doing a modulo of 11 
(with 'X' being used if the result is 10). The number you 
get is the check digit

ISBN13:
- made up of 12 digits plus a check digit
- spaces and hyphens may be included in a code, but are not 
significant
- The check digit is calculated by multiplying each digit 
alternately by 1 or 3 (i.e., 1 x 1st digit, 3 x 2nd digit, 
1 x 3rd digit, 3 x 4th digit, etc.), summing these products
 together, taking modulo 10 off the result to produce a single digit.   */

export const isValidIsbn10 = (isbnNumber) => {


}

export const  isValidIsbn13 = (isbnNumber) => {


}