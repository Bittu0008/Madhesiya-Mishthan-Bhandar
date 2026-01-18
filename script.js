var orderForm = document.querySelector(".pg-1 .top .order-form")
var orderBtn = document.querySelector(".pg-1 .top button")
var orderFormCutBtn = document.querySelector(".pg-1 .top .order-form>i")
var navOrderBtn = document.querySelector(".pg-1 .nav .right span:nth-child(3)")


orderBtn.addEventListener("click",function(){
    orderForm.style.display = "block";
});

navOrderBtn.addEventListener("click",function(){
    orderForm.style.display = "block";
});

orderFormCutBtn.addEventListener("click",function(){
    orderForm.style.display = "none";
});
