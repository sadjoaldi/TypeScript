// variables
let num1 = 24;
let num2: string;
let numOrString: number | string; //on a utilisé un union(|), ce qui permet de passer une string ou number à cette variable

// Tableaux
let arr = ["chien", "chat", "poisson"];
let tableau: string[] = [];
let tableau1: (number | boolean)[] = [];

// Les objets: pour les objets en ts il faut abord creer une interface qui va contenir les propriétés avec le type de value de l'objet, ensuit on crée notre element en l'instencient  auquel on affect ces propriétés
interface Player {
  id: number;
  name: string;
  jersey?: number;
}

const zidane: Player = {
  id: 0,
  name: "Zidane",
};

// Les classes
class Singer {
  id: number;
  name: string;
  alive?: boolean;

  constructor(id: number, name: string, alive?: boolean) {
    this.id = id;
    this.name = name;
    this.alive = alive;
  }
}

// Les fonctions
const sayMyName = (name?: string) => {
  console.log(`Bonjour ${name}`);
};

//void: en gros c-a-d: je n'attend aucun retour de toi donc exécute la fonction. ça permet de preciser le type de données renvoyées.
const ageDuCapitaine = (age: number | string, size?: number): void => {
  if (size) {
    console.log(
      `La taille du capitaine est de ${size}cm et il est agé de : ${age} ans`
    );
  } else {
    console.log(`Le capitaine est agé de : ${age} ans`);
  }
};

ageDuCapitaine(16, 185);

// Enum & Tuple
//enum: permet d'enumerer tous les roles possibles
enum Role {
  ADMIN,
  PREMIUM,
  BASIC,
}

interface User {
  name: string;
  attributes: [number, string];
  role: Role;
}

const user1: User = {
  name: "Julien",
  attributes: [42, "author"],
  role: Role.ADMIN,
};

if (user1.role === Role.ADMIN) {
  console.log("connexion spéciale");
}
