// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(),
//que muestra por pantalla las propiedades de la persona.

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    console.log(`La persona es ${this.nombre} ${this.edad} con ${this.genero}`);
  }
}


let miPersona = new Persona("Alex", 31, "Varon");

miPersona.obtDetalles();


//Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo
// y el método registrar(), que muestre por pantalla el resultado.


class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);

    this.curso = curso;

    this.grupo = grupo;
  }
  registrar() {
    console.log(`La persona es ${this.nombre} ${this.edad} con ${this.genero} apuntado a ${this.curso} y en ${this.grupo}`);
  }
}

let miEstudiante =  new Estudiante(
  "Jose",
   45,
  "Varon",
  "Full stack",
  "A",
);

miEstudiante.registrar();

//Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura 
//y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(`La persona es ${this.nombre} ${this.edad} con ${this.genero} asignatura ${this.asignatura} nivel ${this.nivel}`);
    }
}
    let miProfesor = new Profesor("Frank", 55, "Varon", "Full stack", "Jefe");

    miProfesor.asignar();





    //Extra
//     Construye las siguientes clases: Warrior:
// constructor(life, power): Establece el valor de las propiedades life y power
// attack: Devuelve el valor de power del guerrero
// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. 
// Después, imprime el valor de la vida restante. 


class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }
  attack() {

      return this.power
  }
  defend(damage) {
      this.life -= damage;
    console.log(`Current life ${this.life}`);
  }
}

let miWarrior = new Warrior(100, 31);


// Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
// drinkColaCao: Suma 10 al poder. 


class Maya extends Warrior {
  constructor(life, power ) {
    super(life, power);
  }
  drinkColaCao() {
    this.power += 10
  }
}



//miEstudiante.registrar();


// Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
// drinkNesquik: Suma 10 a la vida.


class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power);
  }
  drinkNesquik() {
    this.life += 10;
  }
}


// Realiza la siguiente cadena de intercambio de golpes.
// Azteca bebe nesquik, Maya bebe Cola Cao, Maya ataca a azteca. Azteca defiende.
// Azteca ataca a maya. Maya defiende.


let maya = new Maya(60, 65);
let aztec = new Aztec(75, 85);

aztec.drinkNesquik()
maya.drinkColaCao()

aztec.defend(maya.attack())
maya.defend(aztec.attack())
