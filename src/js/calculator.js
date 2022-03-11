const containsersQuantityInput = document.querySelector('.input-quantity--js');
const containerPriceInput = document.querySelector('.input-price--js');
const resultParagraph = document.querySelector('.result--js');

const calculateCostOfGarbageRemoval = (containsersQuantity, containerPrice) => {
    return 12*(containsersQuantity * containerPrice - containsersQuantity * containerPrice / 5);
}

const updateValueInDOMElement = (domElement, value) => {
    domElement.innerHTML = value;
}

const quantityAndPriceValidate = () => {
    const containerPrice = parseFloat(containerPriceInput.value);
    const containerQuantity = parseFloat(containsersQuantityInput.value);
    if(containerPrice.length < 1 || containerQuantity.length < 1 || isNaN(containerPrice) || containerPrice < 1  || isNaN(containerQuantity) || containerQuantity < 1) return false;
    return true;
}

if(containsersQuantityInput && containerPriceInput) [containsersQuantityInput, containerPriceInput].forEach(element => element.addEventListener('keyup', () => {
    const containerPrice = containerPriceInput.value;
    const containerQuantity = containsersQuantityInput.value;
    if(!element.classList.contains('calculator__input--active') && element.value.length > 0) {
        element.classList.add('calculator__input--active');
    } else if(element.classList.contains('calculator__input--active') && element.value.length === 0) {
        element.classList.remove('calculator__input--active');
    }
    if(quantityAndPriceValidate()) {
        if(!resultParagraph.classList.contains('calculator__result-box--active')) {
            resultParagraph.classList.add('calculator__result-box--active');
        }
        updateValueInDOMElement(resultParagraph, Math.floor(calculateCostOfGarbageRemoval(containerQuantity, containerPrice)) + ' zł');
    } else {
        updateValueInDOMElement(resultParagraph, '900 zł');
        resultParagraph.classList.remove('calculator__result-box--active');
    }
}));