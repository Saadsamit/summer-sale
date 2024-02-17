let totalPrice = dommaker("total");
let discount = dommaker("discount");
let totalDiscount = dommaker("total-discount");
let shopingCard = dommaker("shoping-card");
let purchaseBtn = dommaker("purchase");
let couponInput = dommaker("couponInput");
let couponBtn = dommaker("couponBtn");
let myCouponBtn = dommaker("myCouponBtn");
let total = 0;
function copyButton(event) {
  navigator.clipboard.writeText(event.innerText);
  event.innerText = "copyed";
}
function dommaker(id) {
  return document.getElementById(id);
}
function shopingItem(even) {
  let h2 = even.childNodes[3].childNodes[3].innerText;
  let price = parseInt(
    even.childNodes[3].childNodes[5].innerText.split(" ")[0]
  );
  let = createP = document.createElement("p");
  let count = shopingCard.childElementCount;
  createP.innerText = `${count + 1}.  ${h2}`;
  shopingCard.appendChild(createP);
  total += price;
  totalPrice.innerText = total.toFixed(2);
  totalDiscount.innerText = total.toFixed(2);
  if (total <= 0) {
    purchaseBtn.setAttribute("disabled", true);
  } else {
    purchaseBtn.removeAttribute("disabled");
    if (total < 200) {
      couponBtn.setAttribute("disabled", true);
    } else {
      couponBtn.removeAttribute("disabled");
    }
  }
}
function applyCoupon() {
  let couponCode = couponInput.value;
  if (couponCode == "SELL200") {
    let myDiscount = total * 0.2;
    let myTotalDiscount = total - myDiscount;
    discount.innerText = myDiscount.toFixed(2);
    totalDiscount.innerText = myTotalDiscount.toFixed(2);
  } else {
    alert("Please enter a valid coupon code");
  }
  couponInput.value = "";
}
function resetBtn() {
  total = 0;
  totalPrice.innerText = "0.00";
  discount.innerText = "0.00";
  totalDiscount.innerText = "0.00";
  couponInput.value = "";
  purchaseBtn.setAttribute("disabled", true);
  myCouponBtn.innerText = "SELL200";
  couponBtn.setAttribute("disabled", true);
  while (0 < shopingCard.childNodes.length) {
    shopingCard.removeChild(shopingCard.childNodes[0]);
  }
}
