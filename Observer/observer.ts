/*
 *  Observer is a behavioral design pattern that allow some objects
 *  to notify other objects about changes in their state.
*/

/*
    The observer pattern proves a way to subscribe and unsubscribe to
    and from these events for any object that implements
    a subscriber interface
 */
//Complexity Medium>Hard **/***
//Popularity: High ***/***
/*
Usabe Examples: The Observer pattern is pretty common in TypeScript code,
especially in the GUI components. It provides a way to react to events
happening in other objects without coupling to their classes.

IDENTIFICATION: the pattern can be recognizes by subscription methods,
that store in a list and by calls to the update method issued to objects
in that list.
*/


//CONCEPTUAL EXAMPLE
/* This example illustrates the structure of the OBSERVER
    design pattern and focuses on the following questions:

    * WHAT CLASSES DOES IT consist of ?
    * WHAT ROLES DO THESES CLASSES PLAY ?
    * in WHAT WAY the elements of the pattern are related ?
 */

/**
 * The Subject interface decalres a set of Methods
 */

interface Subject {
    //Attach an Observer to the SUBJECT.
    attach(observer: Observer): void

    //Detach an observer from the SUBJECT
    detach(observer: Observer): void

    // Notify all Observer about an event
    notify(): void
}

/**
 * The SUBJECT owns some important state and nofities
 * Observers when the state changes.
 */

class ConcreteSubject implements Subject {
    /**
     * @type {number} For the sake of simplicity, the Subject's state,
     * essential to all subscribers, is stored in this variable.
     * (por questão de simplicidade)
     */
    public state: number

    /**
     * @type {Observer[]} List of subscribers. In real life, the list of
     * subscribers can be stored more comprehensive (categorized by event, type, etc.).
     */
    private observers: Observer[] = []

    /**
     * The subscription management methods. (extends from interface signature)
     */
    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer)
        if (isExist) {
            return console.log("Subject: Observer has been attached already")
        }
        console.log("Subject: Attached an observer.")
        this.observers.push(observer)
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.')
        }
        this.observers.splice(observerIndex, 1)
        console.log("Subject: Detached an observer.")
    }
    /**Trigger an update in each subscriber */
    public notify(): void {
        console.log("Subject: Notifying observers ...")
        for (const observer of this.observers) {
            observer.update(this)
        }

    }

    /*
    Usually, the subscription logic is only a fraction of what a SUBJECT can
    really do. Subjects commonly hold some important business logic, that
    triggers a notification method whenever something important is about to happen (or after it)
     */
    public someBusinessLogic(): void {
        console.log("\n Subject: I\'m doing something important.")
        this.state = Math.floor(Math.random() * (10 + 1))

        console.log(`Subject: My state has just changed to ${this.state}`)
        this.notify()
    }

}

/**The Observer interface declares the update method, used by subjects. */
interface Observer {
    // Receive update from subject.
    update(subject: Subject): void
}

/**
 * Concrete Observers react to the updates issued by the Subject they had been attached to.
 */
class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log("ConcreteObserverA: Reacted to the event.")
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2))
            console.log("ConcreteObserverB: Reacted to the event.")
    }
}
/**
 * The Client code.
 */

const subject = new ConcreteSubject()
const observer1 = new ConcreteObserverA()
subject.attach(observer1)
subject.attach(observer1)

const observer2 = new ConcreteObserverB
subject.attach(observer2)


subject.someBusinessLogic()
subject.someBusinessLogic()

subject.detach(observer2)

subject.someBusinessLogic()