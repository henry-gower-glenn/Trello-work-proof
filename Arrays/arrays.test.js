const addingFirstNameAndLastName = require('./arrays')

test ("Testing to see if names combine", () => {
	expect.assertions(3)
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
	
	let newArray = addingFirstNameAndLastName(arr)
	expect(newArray).toHaveLength(2)
	expect(newArray[1]).toEqual({"fullName": "Henry Glenn"})
	expect(newArray[0]).toEqual({"fullName": "Bob Smith"})
})


//  {
// 	firstName: "Bob",
// 	lastName: "Smith"
//   },
// {fullName: "Bob Smith"}

