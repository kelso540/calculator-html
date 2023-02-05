const values = {
    numbers: '',
    count: 0, 
};
const selector = {
    input: document.querySelector('.current'), 
    result: document.querySelector('.result'),
    one: document.querySelector('.one'), 
    two: document.querySelector('.two'),
    three: document.querySelector('.three'),
    four: document.querySelector('.four'),
    five: document.querySelector('.five'),
    six: document.querySelector('.six'),
    seven: document.querySelector('.seven'),
    eight: document.querySelector('.eight'),
    nine: document.querySelector('.nine'),
    zero: document.querySelector('.zero'),
    dot: document.querySelector('.dot'),
    multiply: document.querySelector('.multiply'), 
    divide: document.querySelector('.divide'),
    add: document.querySelector('.add'),
    subtract: document.querySelector('.subtract'),
    calculate: document.querySelector('.calculate'),
    clear: document.querySelector('.clear'),
    del: document.querySelector('.del'),
};
const addOne = ()=>{
    values.numbers += '1';
    selector.input.value = values.numbers; 
};
const addTwo = ()=>{
    values.numbers += '2';
    selector.input.value = values.numbers; 
};
const addThree = ()=>{
    values.numbers += '3';
    selector.input.value = values.numbers; 
};
const addFour = ()=>{
    values.numbers += '4';
    selector.input.value = values.numbers;
};
const addFive = ()=>{
    values.numbers += '5';
    selector.input.value = values.numbers;
};
const addSix = ()=>{
    values.numbers += '6';
    selector.input.value = values.numbers;
};
const addSeven = ()=>{
    values.numbers += '7';
    selector.input.value = values.numbers; 
};
const addEight = ()=>{
    values.numbers += '8';
    selector.input.value = values.numbers; 
};
const addNine = ()=>{
    values.numbers += '9';
    selector.input.value = values.numbers;
};
const addZero = ()=>{
    values.numbers += '0';
    selector.input.value = values.numbers; 
};
const addDot = ()=>{
    values.numbers += '.';
    selector.input.value = values.numbers; 
};

const multiply = ()=>{
    values.count++; 
    if (values.count > 1){
        calculate(); 
    };
    selector.result.value = selector.input.value + ' *'; 
    selector.input.value = ''; 
    values.numbers = ''; 
};
const divide = ()=>{
    values.count++; 
    if (values.count > 1){
        calculate(); 
    };
    selector.result.value = selector.input.value + ' /'; 
    selector.input.value = ''; 
    values.numbers = ''; 
};
const add = ()=>{
    values.count++; 
    if (values.count > 1){
        calculate(); 
    };
    selector.result.value = selector.input.value + ' +'; 
    selector.input.value = ''; 
    values.numbers = ''; 
};
const subtract = ()=>{
    values.count++; 
    if (values.count > 1){
        calculate(); 
    };
    selector.result.value = selector.input.value + ' -'; 
    selector.input.value = ''; 
    values.numbers = ''; 
};

const calculate = ()=>{
    const isMultiply = selector.result.value.includes('*'); 
    const isDivide = selector.result.value.includes('/');
    const isAdd = selector.result.value.includes('+');
    const isSubtract = selector.result.value.includes('-');
    if (isMultiply){
        const findNum = selector.result.value.split(' '); 
        const answer = findNum[0] * Number(selector.input.value); 
        selector.input.value = answer; 
        selector.result.value = '';
        values.numbers = answer;  
    };
    if (isDivide){
        const findNum = selector.result.value.split(' '); 
        const answer = findNum[0] / Number(selector.input.value); 
        selector.input.value = answer; 
        selector.result.value = '';
        values.numbers = answer;  
    }; 
    if (isAdd){
        const findNum = selector.result.value.split(' '); 
        const answer = Number(findNum[0]) + Number(selector.input.value); 
        selector.input.value = answer; 
        selector.result.value = '';
        values.numbers = answer;  
    }; 
    if (isSubtract){
        const findNum = selector.result.value.split(' '); 
        const answer = findNum[0] - Number(selector.input.value); 
        selector.input.value = answer; 
        selector.result.value = '';
        values.numbers = answer;  
    };
};

const clear = ()=>{
    selector.input.value = ''; 
    selector.result.value = ''; 
    values.numbers = ''; 
    values.count = 0; 
};

const del = ()=>{
    const splitInput = selector.input.value.split(''); 
    splitInput.pop(); 
    newValue = splitInput.join('');
    selector.input.value = newValue; 
    values.numbers = newValue;  
};

selector.one.addEventListener('click', addOne); 
selector.two.addEventListener('click', addTwo);
selector.three.addEventListener('click', addThree);
selector.four.addEventListener('click', addFour);
selector.five.addEventListener('click', addFive);
selector.six.addEventListener('click', addSix);
selector.seven.addEventListener('click', addSeven);
selector.eight.addEventListener('click', addEight);
selector.nine.addEventListener('click', addNine);
selector.zero.addEventListener('click', addZero);
selector.dot.addEventListener('click', addDot);

selector.multiply.addEventListener('click', multiply); 
selector.divide.addEventListener('click', divide);
selector.add.addEventListener('click', add);
selector.subtract.addEventListener('click', subtract);
selector.calculate.addEventListener('click', calculate);
selector.clear.addEventListener('click', clear);
selector.del.addEventListener('click', del);