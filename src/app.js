import data from 'data';
let contacts = data;

// create a phone book super class
class PhoneBook {
  constructor(contacts) {
    this.contacts = contacts;
  }
// add a contact object to the contacts array.
  add(contact) {
    if(contact.name.length >= 100){
        console.log(`${contact.name} is too large.`);
    } else {
      this.contacts.push(contact);
    }
  }  
// remove a contact object from the contacts array by giving the index of it. 
  remove(index) {
    this.contacts.splice(index, 1);
  }
  search(query) {
    if (query == String) {
      let filtered = contacts.filter((contact) => {
        return contact.name === query;
      });
      
    } else if (query == Number) {
      let filtered = contacts.filter((contact) => {
        return contact.number === query;
      });
    }
    return filtered;
  }
  list(contactsPerPage, page) {
    console.log(this.contacts);  
  }    
};

// create a new object and set its prototype to PhoneBook and pass it the contacts 
let myPhoneBook = new PhoneBook(contacts);

// validation
// function ValidateEmail(mail)   
// {  
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
//   {  
//     return (true)  
//   }  
//     alert("You have entered an invalid email address!")  
//     return (false)  
// } 


// =============================
// ======= Code Testing ========
// =============================

// --- variables --- //

// try the data on the gloabel context.
// alert(data[0]["name"]);

// --- myPhoneBook --- //

// try the contacts property on myPhoneBook. 
// alert(myPhoneBook.contacts[0]["name"]);
// =============================

// try add method on myPhoneBook.
// myPhoneBook.add({
//   name: 'Mike Smith',
//   phone: '02-234-9182',
//   email: 'm.smith@mail.com'
// });

// try remove method on myPhoneBook by deleting the first item on the contacts array.
// myPhoneBook.remove(0);

// try to exceed the validation of 10
// myPhoneBook.add({
//     name:'a;lksajdf;asdfhsajkldfahsldfkjhsadflkjashdflasdhfl',
//     phone:'01142216580',
//     email:'user@admin.com'
//   });
// =============================