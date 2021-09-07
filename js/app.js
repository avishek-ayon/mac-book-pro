//total calculation
function calculation() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryPrice = parseInt(document.getElementById('extra-memory-cost').innerText);
    const ssdPrice = parseInt(document.getElementById('extra-storage-cost').innerText);
    const deliverCharge = parseInt(document.getElementById('delivery-charge').innerText);
    // check total balance 

    document.getElementById('total-price').innerText = bestPrice + memoryPrice + ssdPrice + deliverCharge;
    // check balance with coupon
    document.getElementById("discount-price").innerText = bestPrice + memoryPrice + ssdPrice + deliverCharge;;

}
//Memory
function getMemory(isIncreasing) {
    const extraCostText = document.getElementById("extra-memory-cost");
    let extraCost = parseInt(extraCostText.innerText);
    if (isIncreasing == true) {
        extraCost = 180;
    }
    else if (isIncreasing == false) {
        extraCost = 0;
    }
    extraCostText.innerText = extraCost;
    return extraCost;
}

//SSD
function reply_click(clicked_id) {
    if (clicked_id == 'storage-25Gb-btn') {
        const extraStorageText = document.getElementById("extra-storage-cost");
        const extraStorage = extraStorageText.innerText = 0;
        calculation();
    }
    else if (clicked_id == 'storage-512Gb-btn') {
        const extraStorageText = document.getElementById("extra-storage-cost");
        const extraStorage = extraStorageText.innerText = 100;
        console.log(extraStorageText);
        calculation();

    }
    else if (clicked_id == 'storage-1TB-btn') {
        const extraStorageText = document.getElementById("extra-storage-cost");
        const extraStorage = extraStorageText.innerText = 180;
        calculation();

    }
}
//delivery
function deliveryCharge(delivery, isAdd) {
    const deliveryChargeText = document.getElementById(delivery);
    let deliveryCharge = parseInt(deliveryChargeText.innerText);
    if (isAdd == false) {
        deliveryCharge = 0;
    }
    else {
        deliveryCharge = 20;
    }
    deliveryChargeText.innerText = deliveryCharge;
    return deliveryCharge;
}

document.getElementById("memory-8gb-btn").addEventListener('click', function () {

    const memoryCountValue = getMemory(false);
    calculation();

})

document.getElementById("memory-16gb-btn").addEventListener('click', function () {
    // debugger;
    const memoryCountValue = getMemory(true);
    calculation();

})


//delivery
document.getElementById("delivery-ontime-btn").addEventListener('click', function () {
    const isADDED = deliveryCharge("delivery-charge", false);
    calculation();
})
document.getElementById("delivery-early-btn").addEventListener('click', function () {
    const isADDED = deliveryCharge("delivery-charge", true);
    calculation();
})

//coupon code

document.getElementById("coupon-btn").addEventListener('click', function () {

    const couponInput = document.getElementById("coupon-code");
    const couponValue = couponInput.value;
    console.log(discount);

    if (couponValue.toLowerCase() == "stevekaku") {
        let discountInput = document.getElementById("discount-price").innerText;
        document.getElementById("discount-price").innerText = discountInput - (discountInput * 0.2);
    }
    else {
        alert("coupon is invalid");
    }
    couponInput.value = "";

})
