function generateRandomOperand() {
  return Math.floor(Math.random() * 20) + 1; // Adjust the range as per your requirement
}

function generateRandomOperator() {
  const operators = ["+", "-", "*", "/"];
  return operators[Math.floor(Math.random() * operators.length)];
}

function generateRandomEquation(numTerms , bracketProb) {
  if (numTerms === 2) {
    const a = generateRandomOperand();
    const b = generateRandomOperand();
    const operator = generateRandomOperator();
    return `${a} ${operator} ${b}`;
  }

  // Generating an equation with brackets
  let equation = "";
  let startedBrackets = 0;
  for (let i = 0; i < numTerms; i++) {
    if (i === numTerms - 1) {
      equation += generateRandomOperand();
    } else {
      if (Math.random() < bracketProb) {
        equation += `(${generateRandomOperand()} ${generateRandomOperator()} `;
        startedBrackets++;
      } else {
        equation += `${generateRandomOperand()} ${generateRandomOperator()} `;
      }
    }
  }

  // Closing brackets
  //const numBrackets =Math.floor(Math.random() * Math.floor(numTerms / 2)) + 1;
  equation += ")".repeat(startedBrackets);

  return equation;
}

function isValidEquation(equation) {
  try {
    return Number.isInteger(eval(equation));
  } catch {
    return false;
  }
}

function generateValidEquation(numTerms , bracketProb) {
  while (true) {
    const equation = generateRandomEquation(numTerms , bracketProb);
    if (isValidEquation(equation)) {
      return equation;
    }
  }
}

function solveEquation(equation) {
  return eval(equation);
}

export function getMathEquation(nums, bracketProb) {
  const numTerms = Math.floor(Math.random()) + nums; // Number of terms in the equation (2 or 3)
  const equation = generateValidEquation(numTerms , bracketProb);
  const solution = solveEquation(equation);

  console.log(`Equation: ${equation}`);
  console.log(`Solution: ${solution}`);
  console.log(isValidEquation(equation));

  return {equation , solution}
}
