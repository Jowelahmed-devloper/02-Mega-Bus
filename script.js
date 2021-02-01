document.getElementById("ticket-increase-btn").addEventListener("click",function(){
    ticketPriceHandler(true);
    // const firstClassInput = document.getElementById("firstClass-input");
    // const firstClassInputNumber = parseInt(firstClassInput.value);
    // const firstClassNew = firstClassInputNumber+1;
    // firstClassInput.value = firstClassNew;
    // const totalPrice = firstClassNew * 150;
    // document.getElementById("firstClass-price").innerText = totalPrice;
})

document.getElementById("ticket-decrease-btn").addEventListener("click",function(){
    ticketPriceHandler(false);
    // const firstClassInput = document.getElementById("firstClass-input");
    // const firstClassInputNumber = parseInt(firstClassInput.value);
    // const firstClassNew = firstClassInputNumber -1;
    // firstClassInput.value = firstClassNew;
    // const totalPrice = firstClassNew * 150;
    // document.getElementById("firstClass-price").innerText = totalPrice;

})

function ticketPriceHandler(isIncrease){
    const firstClassInput = document.getElementById("firstClass-input");
    const firstClassInputNumber = parseInt(firstClassInput.value);
    // const firstClassNew = firstClassInputNumber -1;
    let firstClassNew = firstClassInputNumber
    if(isIncrease == true){
        firstClassNew = firstClassInputNumber+1
    }
    if(isIncrease == false && firstClassNew >0){
        firstClassNew = firstClassInputNumber -1
    }
    firstClassInput.value = firstClassNew;
    const totalPrice = firstClassNew * 150;
    document.getElementById("firstClass-price").innerText = totalPrice;
    totalCalculation();
}

document.getElementById("ticket-increase").addEventListener("click",function(){
    EconomyTicketHandler(true);
    // const EconomyClassInput = document.getElementById("EconomyInput");
    // const EconomyClassInputNumber = parseInt(EconomyClassInput.value);
    // const EconomyClassNewInput = EconomyClassInputNumber +1;
    // EconomyClassInput.value = EconomyClassNewInput;
    // const totalPrice = EconomyClassNewInput * 100;
    // document.getElementById("Economy-price").innerText = totalPrice;
})
document.getElementById("ticket-decrease").addEventListener("click",function(){
    EconomyTicketHandler(false);
    // const EconomyClassInput = document.getElementById("EconomyInput");
    // const EconomyClassInputNumber = parseInt(EconomyClassInput.value);
    // const EconomyClassNewInput = EconomyClassInputNumber -1;
    // EconomyClassInput.value = EconomyClassNewInput;
    // const totalPrice = EconomyClassNewInput * 100;
    // document.getElementById("Economy-price").innerText = totalPrice;
})
function EconomyTicketHandler (isIncrease){
    const EconomyClassInput = document.getElementById("EconomyInput");
    const EconomyClassInputNumber = parseInt(EconomyClassInput.value);
    // const EconomyClassNewInput = EconomyClassInputNumber -1;
    let EconomyClassNewInput = EconomyClassInputNumber

    if(isIncrease == true){
        EconomyClassNewInput = EconomyClassInputNumber +1;
    }
    if (isIncrease == false && EconomyClassNewInput >0){
        EconomyClassNewInput = EconomyClassInputNumber -1;
    }

    EconomyClassInput.value = EconomyClassNewInput;
    const totalPrice = EconomyClassNewInput * 100;
    document.getElementById("Economy-price").innerText = totalPrice;
    totalCalculation();
}



function totalCalculation (){
    const firstClassInput = document.getElementById("firstClass-input");
    const firstClassInputNumber = parseInt (firstClassInput. value);

    const EconomyClassInput = document.getElementById("EconomyInput");
    const EconomyClassInputNumber = parseInt(EconomyClassInput.value);

    const total = "firstClass-input" *150 +"EconomyClassInput" * 100;

    document.getElementById("total-price").innerText = total;
}
