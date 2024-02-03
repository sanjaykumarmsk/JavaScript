class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createdId(){
        return`1234`
    }
}

const sanjay = new User("sanjay")
// console.log(sanjay.createdId());

class Teacher extends User{
    constructor(email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.logMe());
console.log(iphone.createdId());