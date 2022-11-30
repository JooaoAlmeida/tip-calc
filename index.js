function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value
}

function formatSplit(value){
    if (value == 1) return value + ' person'
   return value + ' people'
}

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tip = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = Number((bill * tip /100).toFixed(2))
    let billTotal = (bill + tipValue).toFixed(2)
    let billEach = (billTotal / split).toFixed(2)

    document.getElementById('tipPercent').innerHTML = tip + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)    
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
}