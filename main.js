const registerCredit = document.querySelector('#getInfocreditsButton');

const getInfoCredit = () =>{
    const nameCompany = document.querySelector('#nameCompany');
    const positionData = document.querySelector('#positionData');
    const wageMounthData = document.querySelector('#wageMounthData');
    const wageTreeMounthData = document.querySelector('#wageTreeMounthData');
    const productNameData = document.querySelector('#productNameData');
    const productPriceData = document.querySelector('#productPriceData');
    const productAmountData = document.querySelector('#productAmountData');
    const creditAmountData = document.querySelector('#creditAmountData');
    const ternCreditData = document.querySelector('#ternCreditData');
    const receivingPointData = document.querySelector('#receivingPointData');

    console.log(`Наименование организации:${nameCompany.value}`);
    console.log(`Должность:${positionData.value}`);
    console.log(`Заработная плата в месяц:${wageMounthData.value}`);
    console.log(`Заработная плата за посл. 3 месяца:${wageTreeMounthData}`);
    console.log(`Покупка телефона (наименования товара):${productNameData.value}`);
    console.log(`Стоимость товара:${productPriceData.value}`);
    console.log(`количество товара:${productAmountData.value}`);
    console.log(`Итог сумма кредита: ${creditAmountData.value}`);
    console.log(`Срок кредита (мес.):${ternCreditData.value}`);
    console.log(`Точка получения товара: ${receivingPointData.value}`);
};

registerCredit.addEventListener('click' , getInfoCredit);