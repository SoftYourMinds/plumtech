let faucets = document.querySelector("#faucets");
let washer = document.querySelector("#washer");
let shover = document.querySelector("#shover");
let furniture = document.querySelector("#furniture");
let toilet = document.querySelector("#toilet");
let all23 = document.querySelector("#all");
let faucetsLi = document.querySelector("#faucets-li");
let washerLi = document.querySelector("#washer-li");
let shoverLi = document.querySelector("#shover-li");
let furnitureLi = document.querySelector("#furniture-li");
let toiletLi = document.querySelector("#toilet-li")
let allLi = document.querySelector("#all-li");
let i = 0;

const products = [
    [faucets, faucetsLi],
    [washer, washerLi],
    [shover, shoverLi],
    [furniture, furnitureLi],
    [toilet, toiletLi],
    [all23, allLi]
]

for (i = 0; i < products.length; i++) {
    let searchProduct = "?" + products[i][0].id;
    if (document.location.search == searchProduct) {
        products[i][0].style.display = "block";
        products[i][1].style.color = "#ffc000";
    }
    else products[i][0].style.display = "none";

}