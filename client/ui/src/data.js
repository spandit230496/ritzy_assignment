const characterTraits = [
    ["veg", "smoker", "alcoholic"],
    ["veg", "nonsmoker", "alcoholic"],
    ["veg", "nonsmoker", "nonalcoholic"],
    ["veg", "smoker", "nonalcoholic"],
    ["nonveg", "smoker", "nonalcoholic"],
    ["nonveg", "nonsmoker", "occasionalalcoholic"]
  
  ];
  
  const data = [];
  
  for (let i = 0; i < 20; i++) {
    const randomName = "Person " + (i + 1);
    const randomGender = Math.random() < 0.5 ? "Male" : "Female";
    const randomCharacter = characterTraits[Math.floor(Math.random() * characterTraits.length)];
  
    data.push({
      "name": randomName,
      "gender": randomGender,
      "bio":`Hello, I go by the name of ${randomName}. I identify as ${randomCharacter[0]}, and I have qualities of both ${randomCharacter[1]} and ${randomCharacter[2]}.`      ,
      "character": randomCharacter
    });
  }
  
  module.exports = data;
  