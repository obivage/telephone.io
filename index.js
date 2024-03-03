"use strict";

class Telephone {
  constructor() {
    this.observers = [];
    this.telephoneNumber = null;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(isDialing = false) {
    this.observers.forEach((observer) => {
      observer.update(this.telephoneNumber, isDialing);
    });
  }

  addTelephoneNumber(telephoneNumber) {
    this.telephoneNumber = telephoneNumber;
    this.notifyObservers();
  }

  removeTelephoneNumber() {
    this.telephoneNumber = null;
    this.notifyObservers();
  }

  dialTelephoneNumber() {
    if (this.telephoneNumber) {
      console.log("Dialing " + this.telephoneNumber);
      this.notifyObservers(true);
    } else {
      console.log("No phone number to dial.");
    }
  }
}

class Observer {
  update(telephoneNumber, isDialing) {
    if (isDialing) {
      console.log(`Now Dialing ${telephoneNumber}`);
    } else {
      console.log(`${telephoneNumber}`);
    }
  }
}

const observer1 = new Observer();
const observer2 = new Observer();

const telephone = new Telephone();

telephone.addObserver(observer2);
telephone.addObserver(observer1);

telephone.addTelephoneNumber("2347023232");
telephone.dialTelephoneNumber();
