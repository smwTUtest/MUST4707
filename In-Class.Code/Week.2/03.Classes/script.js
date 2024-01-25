//Let's make some objects again!
import { Ghost, Dog } from "./Ghost.js";

const walter = new Ghost("Walter", 45, "Detroit", 2);
const sally = new Ghost("sally", 450, "Toledo", 3);
const ilya = new Ghost("Ilya", 789456, "CDMX", 9);

const ginger = new Dog("Ginger", "Brittany Spaniel");

walter.getHistory();
sally.boo();
ilya.fly();
ginger.wag();
