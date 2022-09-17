import { Unit, PlayerBonus, Weapon } from '../types/typings';

export const Fortifications = {
  1: {
    name: 'Manor',
    levelRequirement: 0,
    hitpoints: 50,
    costPerRepairPoint: 5,
    goldPerTurn: 1000,
    defenseBonusPercentage: 5,
    cost: 0,
  },
  2: {
    name: 'Village',
    levelRequirement: 5,
    hitpoints: 100,
    costPerRepairPoint: 15,
    goldPerTurn: 2000,
    defenseBonusPercentage: 10,
    cost: 100000,
  },
  3: {
    name: 'Town',
    levelRequirement: 10,
    hitpoints: 200,
    costPerRepairPoint: 35,
    goldPerTurn: 3000,
    defenseBonusPercentage: 15,
    cost: 250000,
  },
  4: {
    name: 'Outpost',
    levelRequirement: 15,
    hitpoints: 300,
    costPerRepairPoint: 75,
    goldPerTurn: 4000,
    defenseBonusPercentage: 20,
    cost: 500000,
  },
  5: {
    name: 'Outpost Level 2',
    levelRequirement: 20,
    hitpoints: 500,
    costPerRepairPoint: 125,
    goldPerTurn: 5000,
    defenseBonusPercentage: 25,
    cost: 1000000,
  },
  6: {
    name: 'Outpost Level 3',
    levelRequirement: 25,
    hitpoints: 750,
    costPerRepairPoint: 225,
    goldPerTurn: 6000,
    defenseBonusPercentage: 30,
    cost: 2000000,
  },
  7: {
    name: 'Stronghold',
    levelRequirement: 30,
    hitpoints: 1000,
    costPerRepairPoint: 325,
    goldPerTurn: 7000,
    defenseBonusPercentage: 35,
    cost: 3000000,
  },
  8: {
    name: 'Stronghold Level 2',
    levelRequirement: 35,
    hitpoints: 1500,
    costPerRepairPoint: 450,
    goldPerTurn: 8000,
    defenseBonusPercentage: 40,
    cost: 4000000,
  },
  9: {
    name: 'Stronghold Level 3',
    levelRequirement: 40,
    hitpoints: 2000,
    costPerRepairPoint: 550,
    goldPerTurn: 9000,
    defenseBonusPercentage: 45,
    cost: 5000000,
  },
  10: {
    name: 'Fortress',
    levelRequirement: 45,
    hitpoints: 2500,
    costPerRepairPoint: 675,
    goldPerTurn: 10000,
    defenseBonusPercentage: 50,
    cost: 7500000,
  },
  11: {
    name: 'Fortress Level 2',
    levelRequirement: 50,
    hitpoints: 3000,
    costPerRepairPoint: 750,
    goldPerTurn: 11000,
    defenseBonusPercentage: 55,
    cost: 10000000,
  },
  12: {
    name: 'Fortress Level 3',
    levelRequirement: 55,
    hitpoints: 3500,
    costPerRepairPoint: 875,
    goldPerTurn: 12000,
    defenseBonusPercentage: 60,
    cost: 15000000,
  },
  13: {
    name: 'Citadel',
    levelRequirement: 60,
    hitpoints: 4000,
    costPerRepairPoint: 1150,
    goldPerTurn: 13000,
    defenseBonusPercentage: 65,
    cost: 20000000,
  },
  14: {
    name: 'Citadel Level 2',
    levelRequirement: 65,
    hitpoints: 4500,
    costPerRepairPoint: 1550,
    goldPerTurn: 14000,
    defenseBonusPercentage: 70,
    cost: 30000000,
  },
  15: {
    name: 'Citadel Level 3',
    levelRequirement: 70,
    hitpoints: 5000,
    costPerRepairPoint: 1850,
    goldPerTurn: 15000,
    defenseBonusPercentage: 75,
    cost: 40000000,
  },
  16: {
    name: 'Castle',
    levelRequirement: 75,
    hitpoints: 5500,
    costPerRepairPoint: 2100,
    goldPerTurn: 16000,
    defenseBonusPercentage: 80,
    cost: 50000000,
  },
  17: {
    name: 'Castle Level 2',
    levelRequirement: 80,
    hitpoints: 6000,
    costPerRepairPoint: 2900,
    goldPerTurn: 17000,
    defenseBonusPercentage: 85,
    cost: 75000000,
  },
  18: {
    name: 'Castle Level 3',
    levelRequirement: 85,
    hitpoints: 6500,
    costPerRepairPoint: 3600,
    goldPerTurn: 18000,
    defenseBonusPercentage: 90,
    cost: 100000000,
  },
  19: {
    name: 'Kingdom',
    levelRequirement: 90,
    hitpoints: 7000,
    costPerRepairPoint: 5000,
    goldPerTurn: 19000,
    defenseBonusPercentage: 95,
    cost: 150000000,
  },
  20: {
    name: 'Kingdom Level 2',
    levelRequirement: 95,
    hitpoints: 7500,
    costPerRepairPoint: 6750,
    goldPerTurn: 20000,
    defenseBonusPercentage: 100,
    cost: 200000000,
  },
  21: {
    name: 'Kingdom Level 3',
    levelRequirement: 100,
    hitpoints: 8000,
    costPerRepairPoint: 7500,
    goldPerTurn: 21000,
    defenseBonusPercentage: 105,
    cost: 250000000,
  },
  22: {
    name: 'Empire',
    levelRequirement: 105,
    hitpoints: 8500,
    costPerRepairPoint: 8250,
    goldPerTurn: 22000,
    defenseBonusPercentage: 110,
    cost: 300000000,
  },
  23: {
    name: 'Empire Level 2',
    levelRequirement: 110,
    hitpoints: 9000,
    costPerRepairPoint: 9000,
    goldPerTurn: 23000,
    defenseBonusPercentage: 115,
    cost: 350000000,
  },
  24: {
    name: 'Empire Level 3',
    levelRequirement: 115,
    hitpoints: 9500,
    costPerRepairPoint: 9750,
    goldPerTurn: 24000,
    defenseBonusPercentage: 120,
    cost: 400000000,
  },
};

export const ArmoryUpgrades = {
  1: {
    name: 'Leather Armory 1',
    fortLevel: 5,
    cost: 500000,
  },
  2: {
    name: 'Leather Armory 2',
    fortLevel: 10, //Stronghold Level 3
    cost: 2000000,
  },
  3: {
    name: 'Chainmail Armory 1',
    fortLevel: 13, //Citadel
    cost: 5000000,
  },
  4: {
    name: 'Chainmail Armory 2',
    fortLevel: 17, // Castle Level 2
    cost: 15000000,
  },
  5: {
    name: 'Chainmail Armory 3',
    fortLevel: 21, // Kingdom Level 3
    cost: 37500000,
  },
};

export const HouseUpgrades = {
  0: {
    name: 'N/A',
    fortLevel: 0,
    citizensDaily: 1,
    cost: 0,
  },
  1: {
    name: 'Housing Level 1',
    fortLevel: 1,
    citizensDaily: 10,
    cost: 500000,
  },
  2: {
    name: 'Housing Level 2',
    fortLevel: 6, //Outpost Level 3
    citizensDaily: 20,
    cost: 1000000,
  },
  3: {
    name: 'Housing Level 3',
    fortLevel: 10, //Fortress
    citizensDaily: 30,
    cost: 1500000,
  },
  4: {
    name: 'Housing Level 4',
    fortLevel: 14, //Citadel Level 2
    citizensDaily: 40,
    cost: 2500000,
  },
  5: {
    name: 'Housing Level 5',
    fortLevel: 18, //Castle Level 3
    citizensDaily: 50,
    cost: 3500000,
  },
  6: {
    name: 'Housing Level 6',
    fortLevel: 22, //Empire
    citizensDaily: 60,
    cost: 5000000,
  },
};

export const Levels = {
  1: 0,
  2: 6000,
  3: 13000,
  4: 19000,
  5: 23000,
  6: 34000,
  7: 43000,
  8: 53000,
  9: 64000,
  10: 76000,
  11: 89000,
  12: 103000,
  13: 118000,
  14: 134000,
  15: 151000,
  16: 169000,
};

export const WeaponTypes: Weapon[] = [
  {
    name: 'Dagger',
    usage: 'OFFENSE',
    level: 1,
    bonus: 25,
    cost: 12500,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Hatchet',
    usage: 'OFFENSE',
    level: 2,
    bonus: 50,
    cost: 25000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Quarterstaff',
    usage: 'OFFENSE',
    level: 3,
    bonus: 100,
    cost: 50000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Mace',
    usage: 'OFFENSE',
    level: 4,
    bonus: 225,
    cost: 100000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Battle Axe',
    usage: 'OFFENSE',
    level: 5,
    bonus: 700,
    cost: 200000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Short Sword',
    usage: 'OFFENSE',
    level: 6,
    bonus: 1000,
    cost: 500000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Long Sword',
    usage: 'OFFENSE',
    level: 6,
    bonus: 1500,
    cost: 750000,
    type: 'WEAPON',
    race: 'HUMAN',
  },
  {
    name: 'Padded Hood',
    usage: 'OFFENSE',
    level: 1,
    bonus: 6,
    cost: 3000,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Leather Hood',
    usage: 'OFFENSE',
    level: 2,
    bonus: 12,
    cost: 6000,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Hood',
    usage: 'OFFENSE',
    level: 3,
    bonus: 25,
    cost: 12500,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Padded Armor',
    usage: 'OFFENSE',
    level: 1,
    bonus: 19,
    cost: 9500,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Leather Armor',
    usage: 'OFFENSE',
    level: 2,
    bonus: 38,
    cost: 19000,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Armor',
    usage: 'OFFENSE',
    level: 3,
    bonus: 75,
    cost: 37500,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Padded Armor',
    usage: 'OFFENSE',
    level: 1,
    bonus: 6,
    cost: 3000,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Leather Armor',
    usage: 'OFFENSE',
    level: 2,
    bonus: 12,
    cost: 6000,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Armor',
    usage: 'OFFENSE',
    level: 3,
    bonus: 25,
    cost: 12500,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Padded Bracers',
    usage: 'OFFENSE',
    level: 1,
    bonus: 3,
    cost: 1500,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Leather Bracers',
    usage: 'OFFENSE',
    level: 2,
    bonus: 5,
    cost: 2500,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Bracers',
    usage: 'OFFENSE',
    level: 3,
    bonus: 10,
    cost: 5000,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Small Wooden Shield',
    usage: 'OFFENSE',
    level: 1,
    bonus: 12,
    cost: 6000,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Medium Wooden Shield',
    usage: 'OFFENSE',
    level: 2,
    bonus: 25,
    cost: 12500,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Large Wooden Shield',
    usage: 'OFFENSE',
    level: 3,
    bonus: 50,
    cost: 25000,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Sling',
    usage: 'DEFENSE',
    level: 1,
    bonus: 25,
    cost: 12500,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Hatchet',
    usage: 'DEFENSE',
    level: 2,
    bonus: 50,
    cost: 2500,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Spear',
    usage: 'DEFENSE',
    level: 3,
    bonus: 100,
    cost: 50000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Padded Hood',
    usage: 'DEFENSE',
    level: 1,
    bonus: 6,
    cost: 3000,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Leather Hood',
    usage: 'DEFENSE',
    level: 2,
    bonus: 12,
    cost: 6000,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Hood',
    usage: 'DEFENSE',
    level: 3,
    bonus: 25,
    cost: 12500,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Padded Armor',
    usage: 'DEFENSE',
    level: 1,
    bonus: 19,
    cost: 9500,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Leather Armor',
    usage: 'DEFENSE',
    level: 2,
    bonus: 38,
    cost: 19000,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Armor',
    usage: 'DEFENSE',
    level: 3,
    bonus: 75,
    cost: 37500,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Padded Armor',
    usage: 'DEFENSE',
    level: 1,
    bonus: 6,
    cost: 3000,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Leather Armor',
    usage: 'DEFENSE',
    level: 2,
    bonus: 12,
    cost: 6000,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Armor',
    usage: 'DEFENSE',
    level: 3,
    bonus: 25,
    cost: 12500,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Padded Bracers',
    usage: 'DEFENSE',
    level: 1,
    bonus: 3,
    cost: 1500,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Leather Bracers',
    usage: 'DEFENSE',
    level: 2,
    bonus: 5,
    cost: 2500,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Bracers',
    usage: 'DEFENSE',
    level: 3,
    bonus: 10,
    cost: 5000,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Small Wooden Shield',
    usage: 'DEFENSE',
    level: 1,
    bonus: 12,
    cost: 6000,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Medium Wooden Shield',
    usage: 'DEFENSE',
    level: 2,
    bonus: 25,
    cost: 12500,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Large Wooden Shield',
    usage: 'DEFENSE',
    level: 3,
    bonus: 50,
    cost: 25000,
    type: 'SHIELD',
    race: 'ALL',
  },
];

export const UnitTypes: Unit[] = [
  { name: 'Worker', type: 'WORKER', level: 1, bonus: 65, cost: 2000 },
  { name: 'Soldier', type: 'OFFENSE', level: 1, bonus: 3, cost: 1500 },
  { name: 'Knight', type: 'OFFENSE', level: 2, bonus: 20, cost: 10000 },
  { name: 'Berserker', type: 'OFFENSE', level: 3, bonus: 50, cost: 25000 },
  { name: 'Guard', type: 'DEFENSE', level: 1, bonus: 3, cost: 1500 },
  { name: 'Archer', type: 'DEFENSE', level: 2, bonus: 20, cost: 10000 },
  { name: 'Royal Guard', type: 'DEFENSE', level: 3, bonus: 50, cost: 25000 },
  { name: 'Spy', type: 'SPY', level: 1, bonus: 3, cost: 1500 },
  { name: 'Infiltrator', type: 'SPY', level: 2, bonus: 20, cost: 10000 },
  { name: 'Assassin', type: 'SPY', level: 3, bonus: 50, cost: 25000 },
  { name: 'Sentry', type: 'SENTRY', level: 1, bonus: 3, cost: 1500 },
  { name: 'Sentinel', type: 'SENTRY', level: 2, bonus: 20, cost: 10000 },
  { name: 'Inquisitor', type: 'SENTRY', level: 3, bonus: 50, cost: 25000 },
];

export const Bonuses: PlayerBonus[] = [
  { race: 'HUMAN', bonusType: 'ATTACK', bonusAmount: 5 },
  { race: 'GOBLIN', bonusType: 'DEFENSE', bonusAmount: 5 },
  { race: 'UNDEAD', bonusType: 'ATTACK', bonusAmount: 5 },
  { race: 'ELF', bonusType: 'DEFENSE', bonusAmount: 5 },
  { race: 'FIGHTER', bonusType: 'ATTACK', bonusAmount: 5 },
  { race: 'CLERIC', bonusType: 'DEFENSE', bonusAmount: 5 },
  { race: 'THIEF', bonusType: 'INCOME', bonusAmount: 5 },
  { race: 'ASSASSIN', bonusType: 'INTEL', bonusAmount: 5 },
];
