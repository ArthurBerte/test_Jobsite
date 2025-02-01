export default {
    
    orderAndReturnsFormLocators: {
      incorrectDataWarning: 'div[data-bind=\'html: $parent.prepareMessageForHtml(message.text)\']'
    },

    orderInformationLocators: {
        orderNumber: 'span[class=\'base\']',
        productName: 'strong[class*=\'name\']',
        productSku: 'td[data-th=\'SKU\']',
        orderAmount: "html > body > div:nth-of-type(2) > main > div:nth-of-type(3) > div > div:nth-of-type(2) > div:nth-of-type(2) > table > tbody > tr > td:nth-of-type(3) > span > span > span",
    }
};

