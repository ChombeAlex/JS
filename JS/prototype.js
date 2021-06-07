// Person constructor

function Person(firstName,lastName,dob)
{
  this.firstName=firstName;
  this.lastName=lastName;
}

Person.prototype.greeting=function()
{
 return `wellcome  ${this.firstName}  ${this.lastName}`;
};

const person=new Person("Tekleab","Alemayehu");

function Customer(firstName,lastname,phone,membership)
{
Person.call(this,firstName,lastName)

this.phone=phone;
this.membership=membership;

}

Customer.prototype=Object.create(Person.prototype);

console.log(person.greeting());