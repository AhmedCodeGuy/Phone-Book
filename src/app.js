// phone book class
class PhoneBook {
  // constractor
  constructor(contacts) {
    // this.contacts = contacts;
    this.nameReg = /[a-zA-Z]+/;
    this.phoneReg = /\b\d{2}[-]\d{3}[-]\d{4}\b/;
    this.emailReg = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.(org|net|com)+/;
    this.sort(contacts);
  }
  
  // add method
  add(contact) {
    debugger;
    if(contact.name.length >= 100){
      console.log(`${contact.name} is too large.`);
    } else if(contacts.length >= 10000) {
      console.log("You can't add more contacts");
      // console.log(this.sort(contacts));
    } else if(this.nameReg.test(contact.name) === false || this.phoneReg.test(contact.phone) === false || this.emailReg.test(contact.email) === false){
      // console.log("Please enter a valid name: \nex: Joel Campers");
      // console.log("Please enter a valid phone number: \nex: 22-222-2222");
      // console.log("Please enter a valid email: \nex: jane_99@doe.com");
      console.log("Please enter a valid:\nName: Joel\nPhone Number: 22-222-2222\nEmail: jane@doe.com 1");
      // console.log(contacts);
    } else {
        contacts.push(contact);
        // console.log(this.sort(contacts));
        console.log(contacts);
    }
  }  

  // remove method
  remove(index) {
    contacts.splice(index, 1);
  }
  
  // search method
  search(query) {
    debugger;
    if (typeof query === 'string') {
      if(isNaN(query) === true && this.nameReg.test(query) === true) {
        var filtered = contacts.filter((contact) => {
          return contact.name === query;
        });
      } else if(this.phoneReg.test(query) === true) {
            var filtered = contacts.filter((contact) => {
              return contact.phone === query;
            });
      } else {
       filtered = "Please enter A valid search query.\nName: Joels\nNumber: 22-222-2222";
      }
    } else {
      filtered = "Please enter a valid name or phone number \"string\"";
    }

    if(filtered.length === 0){
      filtered = "no match found";
    }
    
    return filtered;
  }

  // list method
  list(page = 0, contactsPerPage = 10) {
    let index = page * contactsPerPage;
    let range = index + contactsPerPage;
    let sliced = contacts.slice(index, range);
    return this.sort(sliced);  
  }
  
  // sort method
  sort(items = contacts) {
    let sorted = items.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    return sorted;
  }
};

// create a new object and set its prototype to PhoneBook and pass it the contacts.
let myPhoneBook = new PhoneBook(contacts);




// =============================
// ======= Code Testing ========
// =============================

// --- variables --- //
// try the contacts on the gloabel context.
// alert(contacts[0]["name"]);
// =============================

// --- myPhoneBook --- //
// try the contacts property on myPhoneBook. 
// alert(myPhoneBook.contacts[0]["name"]);

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