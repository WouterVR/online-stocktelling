function setOrderDetailsView(){
    /** MAIN */
    let form = document.createElement('form');
    form.setAttribute('class','form-tableNumber-remark');
    let tableNumberLabel = document.createElement('label');
    tableNumberLabel.setAttribute('for','tableNumber');
    tableNumberLabel.append(document.createTextNode('Tafel nummer:'));
    let inputNumber = document.createElement('input');
    inputNumber.setAttribute('type','number');
    if(tableNumber === 0) {
        inputNumber.setAttribute('placeholder', 'Nr.');
    }else{
        inputNumber.value = tableNumber
    }
    inputNumber.setAttribute('id','tableNumber');
    let remarks = document.createElement('input');
    remarks.setAttribute('type','text');
    remarks.setAttribute('id','remark');
    remarks.setAttribute('placeholder','Opmerking');
    form.append(tableNumberLabel,inputNumber,remarks);

    let h3 = document.createElement('h3');
    h3.setAttribute('id', 'total');
    h3.append(document.createTextNode('0'));
    h3.append(document.createTextNode(' euro'));

    let list = document.createElement('ul');
    list.setAttribute('class', 'item-list')
    for(let menuItem in order){
        console.log('item: ', order[menuItem]['name']);
        let listItem = document.createElement('li');

        let itemContainer = document.createElement('div');
        itemContainer.setAttribute('class', "item-container");
        let itemTimesAndName = document.createElement('div');
        itemTimesAndName.setAttribute('class', "item-name-price");
            let itemName = document.createElement('p');
            itemName.append(document.createTextNode(order[menuItem].amount + ' x ' +order[menuItem].name));
            itemName.setAttribute('class','item-times-name');
            let itemEuroPrice = document.createElement('div');
            itemEuroPrice.setAttribute('class','item-€-price')
                let times2 = document.createElement('span');
                times2.append(document.createTextNode(order[menuItem].amount));
                let x2 = document.createElement('span');
                x2.append(document.createTextNode('x'));
                let itemPrice = document.createElement('span');
                itemPrice.append(document.createTextNode(order[menuItem].pricePerItem+ ' euro'));
            itemEuroPrice.append(times2, x2, itemPrice);
        itemTimesAndName.append(itemName,itemEuroPrice);

        let itemAmountButtons = document.createElement('div');
        itemAmountButtons.setAttribute('class', 'item-amount-buttons');
            let totalPricePerItem = document.createElement('span')
            totalPricePerItem.append(document.createTextNode((order[menuItem].pricePerItem * order[menuItem].amount).toString()));
            let euro = document.createElement('span')
            euro.append(document.createTextNode('euro'));
        itemAmountButtons.append(totalPricePerItem, euro);

        itemContainer.append(itemTimesAndName, itemAmountButtons);

        listItem.append(itemContainer);

        list.append(listItem);
    }

    $('#main').empty()
    $('#main').append(form,h3,list);
    updateTotalPrice();


    /** FOOTER **/
    let button1 = document.createElement('button');
    button1.setAttribute('class', 'mdc-button mdc-button--raised');
    button1.onclick = function () {backButton();};
    button1.append(document.createTextNode('TERUG'));

    let spaceBetweenDiv = document.createElement('div');
    spaceBetweenDiv.setAttribute('class', "space-between-footer");

    let button2 = document.createElement('button');
    button2.setAttribute('class', 'mdc-button mdc-button--raised');
    button2.onclick = function () {
        payButton();
    };
    if (totalPrice < 10) {
        button2.append(document.createTextNode('BESTELLING PLAATSEN'));
    } else {
        button2.append(document.createTextNode('BETALEN'));
    }

    $('#footer').empty();
    $('#footer').append(button1, spaceBetweenDiv, button2)


    $('html,body').animate({scrollTop: 0}, 1);
}