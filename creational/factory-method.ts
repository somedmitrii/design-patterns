abstract class Pizza {
  abstract make(): void;
}

class PepperoniPizza extends Pizza {
  make() {
    console.log("Make pepperoni pizza");
  }
}

class VeggiePizza extends Pizza {
  make() {
    console.log("Make veggie pizza");
  }
}

class PizzaFactory {
  static createPizza(type: string): Pizza {
    switch(type) {
      case "pepperoni": return new PepperoniPizza();
      case "veggie": return new VeggiePizza();
      default: throw new Error("Invalid pizza type");
    }
  }
}

// Now you can use the PizzaFactory to create pizzas like this:
const pepperoniPizza = PizzaFactory.createPizza("pepperoni");
pepperoniPizza.make(); // Output: "Make pepperoni pizza"

const veggiePizza = PizzaFactory.createPizza("veggie");
veggiePizza.make(); // Output: "Make veggie pizza"
