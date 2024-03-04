//구구단 출력 함수
function gugudanstart(n){
    for(let i = 1; i <= 9 ; i ++){
        document.write(`${n} x ${i} = ${n*i} <br>`);
    };
};


function gugudan (){
    const num = prompt("구구단 몇 단을 출력하시겠습니까?");
    alert(gugudanstart(num));
};

gugudan();