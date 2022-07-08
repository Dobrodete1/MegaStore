const profile = document.querySelector('#profile');

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
    const userPlaceOfLivingData = document.querySelector('#placeOfLivingData');

    console.log(`Фамилия:${userSurnameData.value}`);
    console.log(`Имя:${userNameData.value}`);
    console.log(`ОТчество: ${userPatronymicData.value}`);
    console.log(`дата рождения:${userBithdayData.value}`);
    console.log(`Место проживание:${userAdressData.value}`);
    console.log(`Номер паспорта:${userPasportNumberData}`);
    console.log(`Номер телефона : ${userPhoneNumber}`);
    console.log(`Почта:${userMailData}`);
    console.log(`Наименование банка :${userBankNameData}`);
    console.log(`Фактическое место проживания:${userPlaceOfLivingData}`);
} 

profile.addEventListener( 'submit', getInfoProfile);



























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