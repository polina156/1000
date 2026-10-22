let a;
let b;
let c;

while (true) {
    const userPrompt = +prompt('Введите первое число ');
    
    if (isNaN(userPrompt) || userPrompt < -1000 || userPrompt > 1000) {
        console.log("Некорректный ввод!");
    } else {
       a = userPrompt
       break
    }
}

while (true){
  b = prompt ('Введите знак');
     if (b === '+' || b ==='-'){
     break
   } else {
    console.log ("Некорректный ввод!")
   }
}

while (true) {
    const userPrompt = +prompt('Введите второе число ');
    
    if (isNaN(userPrompt) || userPrompt < -1000 || userPrompt > 1000) {
        console.log("Некорректный ввод!");
    } else {
        c = userPrompt;
        break;
    }
}
let result;

if (b === '+') {
    result = a + c;
} else if (b === '-') {
    result = a - c;
}

console.log("Результат: " + result);