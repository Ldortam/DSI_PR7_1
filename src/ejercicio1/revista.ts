import { Observable } from "./observable";
import { Observer } from "./observer";

/**
 * Clase Revista
 */
 export class Revista implements Observable {
    private subscribers: Observer[] = [];

    private newNumber: boolean = false; 
    /**
     * Constructo de la clase
     * @param id Número identificaivo
     * @param art_potada Exclusiva en la portada
     * @param n_pags Número de páginas
     */
    constructor (private id: number, private art_potada: string, private n_pags: number){

    }
    /**
     * Muestra el número identificaivo
     * @returns id de la revista
     */
    getId() {
        return this.id
    }
    /**
     * Muestra la exclusiva en la portada
     * @returns art_potada de la revista
     */
    getArt_portada() {
        return this.art_potada
    }
    /**
     * Muestra el número de páginas
     * @returns n_pags de la revista
     */
    getN_pags() {
        return this.n_pags
    }
    /**
     * Comprueba si hay una nueva edición de la revista
     * @returns booleano(true or false)
     */
    getNewNumber() {
        return this.newNumber
    }

    /**
     * Método de subscripción
     * @param observer Elemento que observa
     */
    subscribe(observer: Observer) {
        if (this.subscribers.includes(observer)) {
          throw new Error('The observer had already been subscribed');
        } else {
          this.subscribers.push(observer);
        }
    }

    /**
     * Método para dejar de seguir
     * @param observer Elemento que observa
     */
    unsubscribe(observer: Observer) {
        const index = this.subscribers.indexOf(observer);
        if (index === -1) {
          throw new Error('The observer has not been subscribed');
        } else {
          this.subscribers.splice(index, 1);
        }
    }

    /**
     * Método que proporciona mensajes sobre lo subscrito
     */
    notify() {
        this.subscribers.forEach((observer) => observer.update(this));
    }

    /**
     * Cambia newNumber a verdadero, pues hay nueva edición
     */
    onNewNumber() {
        this.newNumber = true;
        this.notify();
        return true;
    }
}