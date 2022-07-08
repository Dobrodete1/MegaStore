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

























