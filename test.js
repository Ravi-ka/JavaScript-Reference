

function calculateTotal(){
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);
    //console.log(cost)

    if(cost < 40){
        cost = (cost+10);
        //console.log(cost)
    }

    const totalCost = document.querySelector('.total-cost')
    totalCost.innerHTML=`$${cost}`
}

function handleCostKeydown(event){
    if(event.key === 'Enter'){
        calculateTotal();
    }
}

function subscribeButton(){
    const subBtn = document.querySelector('.sub-button')
    if(subBtn.innerText === 'Subscribe'){
        subBtn.innerHTML = 'Subscribed'
        subBtn.classList.add('btn-selected')
    }
    else{
        subBtn.innerHTML = 'Subscribe'
        subBtn.classList.remove('btn-selected')
    }
}