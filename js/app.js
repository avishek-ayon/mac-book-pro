
function calculation() {
    const bestP = parseInt(document.getElementById('best-price').innerText);
    const memory = parseInt(document.getElementById('extra-memory-cost').innerText);
    const ssd = parseInt(document.getElementById('extra-storage-cost').innerText);
    const deliverCharge = parseInt(document.getElementById('delivery-charge').innerText);
    document.getElementById('total-price').innerText = bestP + memory + ssd + deliverCharge;

    document.getElementById("discount-price").innerText = bestP + memory + ssd + deliverCharge;;

}

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

// function memory(ssdText) {
//     const extraStorageText = document.getElementById(ssdText);
//     const extraStorage = extraStorageText.innerText;
// }

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

    const value = getMemory(false);


    const bestPriceText = document.getElementById("best-price");
    const bestPrice = parseInt(bestPriceText.innerText);

    const totalPriceText = document.getElementById("total-price");
    const totalPrice = parseInt(totalPriceText.innerText);
    calculation();

    // totalPriceText.innerText = value + bestPrice;
    // console.log(totalPriceText);
})

document.getElementById("memory-16gb-btn").addEventListener('click', function () {
    // debugger;
    const value1 = getMemory(true);
    const totalPriceText = document.getElementById("total-price");
    let totalPrice = parseInt(totalPriceText.innerText);


    const bestPriceText = document.getElementById("best-price");
    const bestPrice = parseInt(bestPriceText.innerText);
    calculation();


    // totalPriceText.innerText = value1 + bestPrice;
    // console.log(totalPriceText);
})

//ssd

// document.getElementById("storage-25Gb-btn").addEventListener('click', function () {
//     const extraStorageText = document.getElementById('extra-storage-cost');
//     const extraStorage = extraStorageText.innerText = 12;


//     const bestPriceText = document.getElementById("best-price");
//     const bestPrice = parseInt(bestPriceText.innerText);

//     const totalPriceText = document.getElementById("total-price");
//     const totalPrice = parseInt(totalPriceText.innerText);

//     totalPriceText.innerText = extraStorage + bestPrice + getMemory();
//     console.log(totalPriceText);

// })

//delivery
document.getElementById("delivery-ontime").addEventListener('click', function () {
    const isADDED = deliveryCharge("delivery-charge", false);
    calculation();
})
document.getElementById("delivery-early").addEventListener('click', function () {
    const isADDED = deliveryCharge("delivery-charge", true);
    calculation();
})

//coupon code

document.getElementById("apply-coupon").addEventListener('click', function () {

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
