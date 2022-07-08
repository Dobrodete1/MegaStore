const profile = document.querySelector('#getInfoProfile');

const getInfoProfile = () => {
    const userSurnameData = document.querySelector('#surnameData');
    const userNameData = document.querySelector('#nameData');
    const userPatronymicData = document.querySelector('#patronymicData');
    const userBithdayData = document.querySelector('#dateData');
    const userAdressData = document.querySelector('#adressData');
    const userPasportNumberData = document.querySelector('#pasportNumberData');
    const userPhoneNumber = document.querySelector('#phoneNumber');
    const userMailData = document.querySelector('#mailData');
    const userBankNameData = document.querySelector('#bankNameData');
    const passportTakeDateData = document.querySelector('#takeDateData');
    const userPlaceOfLivingData = document.querySelector('#placeOfLivingData');

    console.log(`Фамилия:${userSurnameData.value}`);
    console.log(`Имя:${userNameData.value}`);
    console.log(`ОТчество: ${userPatronymicData.value}`);
    console.log(`дата рождения:${userBithdayData.value}`);
    console.log(`Место проживание:${userAdressData.value}`);
    console.log(`Номер паспорта:${userPasportNumberData.value}`);
    console.log(`Номер телефона : ${userPhoneNumber.value}`);
    console.log(`Почта:${userMailData.value}`);
    console.log(`Наименование банка :${userBankNameData.value}`);
    console.log(`Фактическое место проживания:${userPlaceOfLivingData.value}`);
    console.log(`Дата получение паспорта:${passportTakeDateData.value}`);
} 

profile.addEventListener( 'click', getInfoProfile);


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

registerCredit.addEventListener('click' , getInfoCredit)
























