var containsersQuantityInput=document.querySelector(".input-quantity--js"),containerPriceInput=document.querySelector(".input-price--js"),resultParagraph=document.querySelector(".result--js"),calculateCostOfGarbageRemoval=function(t,a){return 12*(t*a-t*a/5)},updateValueInDOMElement=function(t,a){t.innerHTML=a},quantityAndPriceValidate=function(){var t=parseFloat(containerPriceInput.value),a=parseFloat(containsersQuantityInput.value);return!(t.length<1||a.length<1||isNaN(t)||t<1||isNaN(a)||a<1)};containsersQuantityInput&&containerPriceInput&&[containsersQuantityInput,containerPriceInput].forEach((function(t){return t.addEventListener("keyup",(function(){var a=containerPriceInput.value,e=containsersQuantityInput.value;!t.classList.contains("calculator__input--active")&&t.value.length>0?t.classList.add("calculator__input--active"):t.classList.contains("calculator__input--active")&&0===t.value.length&&t.classList.remove("calculator__input--active"),quantityAndPriceValidate()?(resultParagraph.classList.contains("calculator__result-box--active")||resultParagraph.classList.add("calculator__result-box--active"),updateValueInDOMElement(resultParagraph,Math.floor(calculateCostOfGarbageRemoval(e,a))+" zł")):(updateValueInDOMElement(resultParagraph,"900 zł"),resultParagraph.classList.remove("calculator__result-box--active"))}))}));
//# sourceMappingURL=index.c019a6f0.js.map