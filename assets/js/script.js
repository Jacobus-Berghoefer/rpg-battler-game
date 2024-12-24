//Script

//Hero List
const heros = [
    { name: "Knight", hitpoints: 125, attack: 15, defense: 15 };
    { name: "Mage", hitpoints: 90, attack: 20, defense: 5 };
    { name: "Archer", hitpoints: 95, attack: 18, defense: 7 };
    { name: "Rogue", hitpoints: 105, attack: 17, defense: 8 };
    { name: "Druid", hitpoints: 150, attack: 5, defense: 25 };
]

// Enemies List
const Enemies = [
    { name: "Goblin", hitpoints: 50, attack: 5 };
    { name: "Skeleton", hitpoints: 75, attack: 10 };
    { name: "Zombie", hitpoints: 100, attack: 15 };
    { name: "Dark Wizard", hitpoints: 125, attack: 20 };
    { name: "Ogre", hitpoints: 150, attack: 25 };
]

//Items List
const items = [
    { name: "Health Potion", healamount: hitpoints+25 };
    //{ name: "Mana Potion", manarecovered: mana + 20 };
    //{ name: "Defense Up", increasedefense: defense + 5 };
]

//Stat Attributes
// const characterStats = [
//     { name: "Strength", value: 10 },
//     { name: "Dexterity", value: 10 },
//     { name: "Constitution", value: 10 },
//     { name: "Intelligence", value: 10 },
//     { name: "Wisdom", value: 10 },
//     { name: "Charisma", value: 10 }
//   ];

function