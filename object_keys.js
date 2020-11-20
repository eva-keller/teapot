let person = {
    name: 'Bob',
    age: 30,
    height: '6 ft'
  };
  
  let personKeys = Object.keys(person);
  console.log(personKeys);          // => ['name', 'age', 'height']
  personKeys.forEach(key => {
    console.log(person[key])
  });                               // => Bob
                                    //    30
                                    //    6 ft