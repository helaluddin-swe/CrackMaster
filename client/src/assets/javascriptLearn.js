import Result1 from "./images/lesson-3.png"
import Result2 from "./images/lesson-04.png"
import Result3 from "./images/image.png"
export const lessonsData = [
  {
    id: 1,
    title: "JavaScript Learning: Numbers and Math",
    slug: "numbers-and-math",
    description: "Master basic arithmetic, operator precedence, and the Math object.",
    topics: [
      "Numbers and Math Basics",
      "Order of Operations and Brackets ()",
      "Calculating Totals in Projects",
      "Floating Point Inaccuracy (0.1 + 0.2)",
      "Rounding with Math.round()",
    ],
    exercises: [
      {
        ref: "2a",
        description: "Calculate order cost: 1 soup ($10), 3 burgers ($8 each), and 1 ice cream ($5).",
        solution: "10 + (3 * 8) + 5"
      },
      {
        ref: "2b",
        description: "Split the total from 2a equally among 3 people.",
        solution: "(10 + (3 * 8) + 5) / 3"
      }
    ]
  },
  
  {
    id: 2,
    title: "JavaScript Learning: Strings",
    slug: "strings-and-text",
    description: "Learn how to create text, use escape characters, and master template literals with interpolation.",
    images:[Result1,Result2],
    topics: [
      "String = text",
      "Using strings and numbers together",
      "Three ways to create strings: '...', \"...\", `...`",
      "Escape characters: \\' and \\n",
      "Interpolation and multi-line strings"
    ],
    exercises: [
      {
        ref: "3a",
        description: "Create the text 'My name is: ' as a string.",
        solution: "'My name is: '"
      },
      {
        ref: "3b",
        description: "Create your name as a string.",
        solution: "'Your Name'"
      },
      {
        ref: "3c",
        description: "Combine 3a and 3b using concatenation.",
        solution: "'My name is: ' + 'Your Name'"
      },
      {
        ref: "3d",
        description: "Restaurant order: 1 coffee ($5) and 1 bagel ($3). Calculate total and concatenate: 'Total cost: $___'",
        solution: "'Total cost: $' + (5 + 3)"
      },
      {
        ref: "3e",
        description: "Do the same as 3d using a template string and interpolation.",
        solution: "`Total cost: $${5 + 3}`"
      },
      {
        ref: "3f",
        description: "Display the text from 3e in a popup alert.",
        solution: "alert(`Total cost: $${5 + 3}`);"
      },
      {
        ref: "3g",
        description: "Order 1 coffee ($5.99) and 1 bagel ($2.95). Calculate in cents to avoid inaccuracy and concatenate.",
        solution: "'Total cost: $' + (599 + 295) / 100"
      },
      {
        ref: "3h",
        description: "Do the same as 3g using a template string.",
        solution: "`Total cost: $${(599 + 295) / 100}`"
      },
      {
        ref: "3i",
        description: "Display the text from 3h in a popup alert.",
        solution: "alert(`Total cost: $${(599 + 295) / 100}`);"
      },
      {
        ref: "3j",
        description: "Create a multi-line alert with the total and 'Thank you, come again!'",
        solution: "alert(`Total cost: $${(599 + 295) / 100}\\nThank you, come again!`);"
      },
      // CHALLENGE EXERCISES
      {
        ref: "3k",
        description: "Challenge: Calculate total for 2 basketballs ($20.95 each) and 2 t-shirts ($7.99 each). Create the first line: 'Items (4): $57.88'",
        solution: "`Items (${2 + 2}): $${(2 * 2095 + 2 * 799) / 100}`"
      },
      {
        ref: "3l",
        description: "Challenge: Create second line: 'Shipping & handling: $9.98' (use math for 4.99 + 4.99).",
        solution: "`Shipping & handling: $${(499 + 499) / 100}`"
      },
      {
        ref: "3m",
        description: "Challenge: Create third line: 'Total before tax: $67.86' (add items and shipping).",
        solution: "`Total before tax: $${(2 * 2095 + 2 * 799 + 499 + 499) / 100}`"
      },
      {
        ref: "3n",
        description: "Challenge: Calculate 10% tax ($6.79) using Math.round().",
        solution: "`Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100}`"
      }
    ]
  },
  { 
    id: 3,
    title: "Lesson 4: HTML CSS Review and Console.log",
    slug: "html-css-review",
    description: "Build visual elements and interact with them using the console.",
    images:[Result3],
    topics: [
      "Creating Buttons and Paragraphs",
      "Introduction to console.log",
      "onclick event attributes",
      "Designing UI components with HTML/CSS"
    ],
    exercises: [
      {
        ref: "4a",
        description: "Create a button with the text 'Click' inside.",
        solution: "<button>Click</button>"
      },
      {
        ref: "4b",
        description: "Create 2 buttons. 1 with your name and 1 with your favorite food.",
        solution: "<button>Simon</button> <button>Chocolate</button>"
      },
      {
        ref: "4c",
        description: "Create a paragraph with the text 'Hello, world!' inside.",
        solution: "<p>Hello, world!</p>"
      },
      {
        ref: "4d",
        description: "Continuing from exercise 4c, create a paragraph below the previous paragraph and write something you did today.",
        solution: "<p>Hello, world!</p> <p>Today I learned JavaScript.</p>"
      },
      {
        ref: "4i",
        description: "Using HTML and CSS, try to copy the design on the right (Adults Plain Cotton T-shirt, Price: $7.99, Add to cart, Buy now).",
        solution: "<p>Adults Plain Cotton T-shirt</p> <p>Price: $7.99</p> <button>Add to cart</button> <button>Buy now</button>"
      },
      {
        ref: "4j",
        description: "Add onclick attributes: 'Add to cart' creates a popup 'Added'; 'Buy now' logs 'Loading...' in the Console and popups 'Purchased'.",
        solution: "<button onclick=\"alert('Added');\">Add to cart</button> <button onclick=\"console.log('Loading...'); alert('Purchased');\">Buy now</button>"
      }
    ]
  },
  {
    id: 4,
    title: "Lesson 5: Variables",
    slug: "variables",
    description: "Store and update data using variables to create dynamic applications.",
    topics: [
      "Creating variables with const and let",
      "Template strings and variable interpolation",
      "Reassigning values using +=, -=, ++, and --",
      "Using eval() to process string-based math",
      "Building a calculator logic"
    ],
    exercises: [
      {
        ref: "5a",
        description: "Create a variable called 'name' and save your name in it.",
        solution: "const name = 'Simon';"
      },
      {
        ref: "5b",
        description: "Display 'My name is: ${name}' in the console using the variable.",
        solution: "console.log(`My name is: ${name}`);"
      },
      {
        ref: "5c",
        description: "Calculate cost of 1 coffee ($5), 2 bagels ($3 each), and 1 soup ($9). Save in 'cost'.",
        solution: "const cost = 5 + (2 * 3) + 9;"
      },
      {
        ref: "5d",
        description: "Display 'Cost of food: $${cost}' in the console.",
        solution: "console.log(`Cost of food: $${cost}`);"
      },
      {
        ref: "5e",
        description: "Calculate 10% tax of the cost and save it in a variable called 'tax'.",
        solution: "const tax = cost * 0.1;"
      },
      {
        ref: "5f",
        description: "Display 'Tax (10%): $${tax}' in the console.",
        solution: "console.log(`Tax (10%): $${tax}`);"
      },
      {
        ref: "5g",
        description: "Calculate 'totalCost' (cost + tax) and display 'Total cost: $${totalCost}'.",
        solution: "const totalCost = cost + tax;\nconsole.log(`Total cost: $${totalCost}`);"
      },
      {
        ref: "5h",
        description: "Cart Project: Add buttons '+4' and '+5' that increase quantity using +=.",
        solution: "<button onclick=\"cartQuantity += 4;\">+4</button>\n<button onclick=\"cartQuantity += 5;\">+5</button>"
      },
      {
        ref: "5i",
        description: "Cart Project: Add 'Remove from cart' button that decreases quantity by 1.",
        solution: "<button onclick=\"cartQuantity--;\">Remove from cart</button>"
      },
      {
        ref: "5j",
        description: "Cart Project: Add '-2' and '-3' buttons that decrease quantity.",
        solution: "<button onclick=\"cartQuantity -= 2;\">-2</button>\n<button onclick=\"cartQuantity -= 3;\">-3</button>"
      },
      {
        ref: "5k",
        description: "Cart Project: Use shortcuts -- and -= for the removal buttons.",
        solution: "// Ensure 5i uses -- and 5j uses -="
      },
      {
        ref: "5o",
        description: "Calculator: Add '1' to calculation string and log it when clicked.",
        solution: "<button onclick=\"calculation += '1'; console.log(calculation);\">1</button>"
      },
      {
        ref: "5p",
        description: "Calculator: Create '2', '3', and '+' buttons (add ' + ' for spaces).",
        solution: "<button onclick=\"calculation += '2';\">2</button>\n<button onclick=\"calculation += ' + ';\">+</button>"
      },
      {
        ref: "5q",
        description: "Calculator: When clicking '=', use eval() to update calculation and log result.",
        solution: "<button onclick=\"calculation = eval(calculation); console.log(calculation);\">=</button>"
      },
      {
        ref: "5r",
        description: "Calculator: Complete the calculator by grouping buttons inside <p> tags for rows.",
        solution: "<p><button>1</button><button>2</button></p>\n<p><button>4</button><button>5</button></p>"
      }
    ]
  },
  {
    id: 5,
    title: "Lesson 6: Booleans and If-Statements",
    slug: "booleans-and-if-statements",
    description: "Use logical operators and conditional statements to control the flow of your code.",
    topics: [
      "Comparison Operators (>, <, >=, <=, ===)",
      "If, Else If, and Else statements",
      "Logical Operators (&&, ||, !)",
      "Ternary Operator (condition ? A : B)",
      "Guard clauses for project limits"
    ],
    exercises: [
      {
        ref: "6a",
        description: "Create 'hour' (0-23). If 6-12 log 'Good morning!', if 13-17 log 'Good afternoon!', otherwise log 'Good night!'.",
        solution: "if (hour >= 6 && hour <= 12) { console.log('Good morning!'); } else if (hour >= 13 && hour <= 17) { console.log('Good afternoon!'); } else { console.log('Good night!'); }"
      },
      {
        ref: "6d",
        description: "Amusement park discount: age <= 6 OR age >= 65. Display 'Discount' or 'No discount' using the || operator.",
        solution: "if (age <= 6 || age >= 65) { console.log('Discount'); } else { console.log('No discount'); }"
      },
      {
        ref: "6e",
        description: "Update 6d: Discount only if it is NOT a holiday. Use &&, ||, and brackets ().",
        solution: "const isHoliday = true;\nif ((age <= 6 || age >= 65) && !isHoliday) { console.log('Discount'); } else { console.log('No discount'); }"
      },
      {
        ref: "6g",
        description: "Coin Flip: If Math.random() < 0.5 log 'heads', else log 'tails'.",
        solution: "const randomNumber = Math.random();\nif (randomNumber < 0.5) { console.log('heads'); } else { console.log('tails'); }"
      },
      {
        ref: "6j",
        description: "Challenge: Rewrite the coin flip logic using a ternary operator.",
        solution: "const result = Math.random() < 0.5 ? 'heads' : 'tails';\nconsole.log(result);"
      },
      {
        ref: "6k",
        description: "Cart Guard: If updating quantity makes it > 10, alert 'The cart is full' and don't update.",
        solution: "if (quantity + 1 > 10) { alert('The cart is full'); } else { quantity++; console.log(quantity); }"
      },
      {
        ref: "6l",
        description: "Cart Guard: If updating quantity makes it < 0, alert 'Not enough items in the cart' and don't update.",
        solution: "if (quantity - 1 < 0) { alert('Not enough items in the cart'); } else { quantity--; console.log(quantity); }"
      }
    ]
  },
  

];