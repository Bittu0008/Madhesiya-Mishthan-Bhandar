var orderForm = document.querySelector(".order-form")
var orderBtn = document.querySelector(".nav .right span:nth-child(3)")
var orderFormCutBtn = document.querySelector(".order-form>i")
var navOrderBtn = document.querySelector(".nav .right span:nth-child(3)")


orderBtn.addEventListener("click",function(){
    orderForm.style.display = "block";
});

navOrderBtn.addEventListener("click",function(){
    orderForm.style.display = "block";
});

orderFormCutBtn.addEventListener("click",function(){
    orderForm.style.display = "none";
});
