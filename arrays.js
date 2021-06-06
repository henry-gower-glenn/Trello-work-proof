console.log('hello world')

let arr = [
  {
    firstName: "Bob",
    lastName: "Smith"
  },
  {
    firstName: "Henry",
    lastName: "Glenn"
  }
]

let newArray = arr.map(person => {
  return {fullName: person.firstName + " " + person.lastName} 
})  

console.log(newArray)
