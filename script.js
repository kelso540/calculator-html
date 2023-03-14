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

const addNum = (num)=>{
    values.numbers += `${num}`;
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

selector.one.addEventListener('click', ()=>addNum('1')); 
selector.two.addEventListener('click', ()=>addNum('2'));
selector.three.addEventListener('click', ()=>addNum('3'));
selector.four.addEventListener('click', ()=>addNum('4'));
selector.five.addEventListener('click', ()=>addNum('5'));
selector.six.addEventListener('click', ()=>addNum('6'));
selector.seven.addEventListener('click', ()=>addNum('7'));
selector.eight.addEventListener('click', ()=>addNum('8'));
selector.nine.addEventListener('click', ()=>addNum('9'));
selector.zero.addEventListener('click', ()=>addNum('0'));
selector.dot.addEventListener('click', ()=>addNum('.'));

selector.multiply.addEventListener('click', multiply); 
selector.divide.addEventListener('click', divide);
selector.add.addEventListener('click', add);
selector.subtract.addEventListener('click', subtract);
selector.calculate.addEventListener('click', calculate);
selector.clear.addEventListener('click', clear);
selector.del.addEventListener('click', del);