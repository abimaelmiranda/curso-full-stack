 let varA = `A`
 let varB = `B`
 let varC = `C`
 let varTemp;

 varTemp = varC
 varC = varA
 varA = varB
 varB = varTemp 


 console.log(varA, varB, varC)