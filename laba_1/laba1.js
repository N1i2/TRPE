const check = document.querySelector('.Check');

//ERROR
//name
const MoreSimvlNameError = 'Maximum 20 symbols';
const UncorrectSimvlNameError = 'Uncorrect simvl';
//E-mail
const SpacesEmailError = 'The area not contain spaces';
const ExistEmailError = 'There can be no such mail';
//Phone
const UncorrectSimvlPhoneError = 'Uncorrect simvl';
const FormatPhoneError = 'Please write the phone number as in the exemple';
//about you
const MoreSimvlAboutYouError = 'Maximum 250 symbols';
//All error
const EmptyError = 'You missed this area';
const AllCorrect = '';

let helpValue;
let AllSave;

check.addEventListener('click', function () {
    AllSave = true;

    helpValue = document.getElementsByName("lastname");
    if (AllSave)
        AllSave = CheckName(helpValue[0].value, 'LastNameError')
    else
        CheckName(helpValue[0].value, 'LastNameError')

    helpValue = document.getElementsByName("name");
    if (AllSave)
        AllSave = CheckName(helpValue[0].value, 'NameError')
    else
        CheckName(helpValue[0].value, 'NameError')

    helpValue = document.getElementsByName("email");
    if (AllSave)
        AllSave = CheckEmail(helpValue[0].value);
    else
        CheckEmail(helpValue[0].value);

    helpValue = document.getElementsByName("email");
    if (AllSave)
        AllSave = CheckEmail(helpValue[0].value);
    else
        CheckEmail(helpValue[0].value);

    helpValue = document.getElementsByName("phone");
    if (AllSave)
        AllSave = CheckPhone(helpValue[0].value);
    else
        CheckPhone(helpValue[0].value);

    helpValue = document.getElementsByName("inform");
    if (AllSave)
        AllSave = CheckMyInform(helpValue[0].value);
    else
        CheckMyInform(helpValue[0].value);

    if (AllSave)
        AllSave = CheckBoxes();

    if (AllSave)
    {
        document.getElementsByName("answer")[0].style.color = "green";
        document.getElementsByName("answer")[0].textContent = "All Correct";
    }
    else
    {
        document.getElementsByName("answer")[0].style.color = "red";
        document.getElementsByName("answer")[0].textContent = "Error";
    }
})

//Name and LastName
function CheckName(lastName, nameArea) {
    if (lastName == '') {
        document.getElementsByName(nameArea)[0].textContent = EmptyError;
        return false;
    }
    if (!CheckNameSize(lastName)) {
        document.getElementsByName(nameArea)[0].textContent = MoreSimvlNameError;
        return false;
    }
    if (!CheckNameSymvl(lastName)) {
        document.getElementsByName(nameArea)[0].textContent = UncorrectSimvlNameError;
        return false;
    }

    document.getElementsByName(nameArea)[0].textContent = AllCorrect;
    return true;
}
function CheckNameSize(lastName) {
    if (lastName.length > 20)
        return false;
    return true;
}
function CheckNameSymvl(lastName) {
    const word = /^[a-zA-Z]+$/;
    return word.test(lastName);
}

//E-mail
function CheckEmail(email) {
    if (email == '') {
        document.getElementsByName('EmailError')[0].textContent = EmptyError;
        return false;
    }
    if (email.includes(' ')) {
        document.getElementsByName('EmailError')[0].textContent = SpacesEmailError;
        return false;
    }

    let schet = /^.*@.{2,5}\..{2,3}$/;

    if (!schet.test(email)) {
        document.getElementsByName('EmailError')[0].textContent = ExistEmailError;
        return false;
    }

    document.getElementsByName('EmailError')[0].textContent = AllCorrect;
    return true;
}

//Phone
function CheckPhone(number) {
    if (number == '') {
        document.getElementsByName('PhonError')[0].textContent = EmptyError;
        return false;
    }

    let symvl = /\d()-/;
    if (!symvl.test(number)) {
        document.getElementsByName('PhonError')[0].textContent = UncorrectSimvlPhoneError;
        return false;
    }

symvl = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;

    if (!symvl.test(number)) {
        document.getElementsByName('PhonError')[0].textContent = FormatPhoneError;
        return false;
    }

    document.getElementsByName('PhonError')[0].textContent = AllCorrect;
    return true;
}

//boxes
function CheckBoxes() {
    helpValue = document.getElementsByName("need");

    if (helpValue[0].checked)
        return true;
    else {
        if (confirm("Are you sure you don\'t study at BSTU"))
            return true;
        else
            return false;
    }
}

//About Me
function CheckMyInform(inform) {
    if (inform == '') {
        document.getElementsByName('AboutMeError')[0].textContent = EmptyError;
        return false;
    }
    if (inform.length > 250) {
        document.getElementsByName('AboutMeError')[0].textContent = MoreSimvlAboutYouError;
        return false;
    }

    document.getElementsByName('AboutMeError')[0].textContent = AllCorrect;
    return true;
}