import { Observable } from "./observable";
import { Observer } from "./observer";
import { Revista } from "./revista";

/**
 * Clase Suscriptor
 */
export class Suscriptor implements Observer {
    /**
     * Constructor de la clase
     * @param id Número identificativo 
     * @param nombre Nombre del suscriptor
     * @param apellidos Apellios del suscriptor
     */
    constructor(private id: number, private nombre: string, private apellidos: string) {

    }
    /**
     * Muestra el número identificaivo
     * @returns id del subscriptor
     */
    getId() {
        return this.id;
    }
    /**
     * Muestra el nombre del susciptor
     * @returns nombre del suscriptor
     */
    getNombre() {
        return this.nombre;
    }
    /**
     * Muestra los apellidos del susciptor
     * @returns apellidos del suscriptor
     */
    getApellidos() {
        return this.apellidos
    }

    /**
     * En el caso de exisir notificación, la muestra
     * @param observable Elemento al que se observa
     */
    update(observable: Observable) {
        if (observable instanceof Revista) { 
            if(observable.getNewNumber()) {
                console.log(`Número ${observable.getId()} a la venta de la Revista DSI. ` +
                            `Edición de ${observable.getN_pags()} páginas y con la exclusiva ` +
                            `de ${observable.getArt_portada()}.`)
            }
        }
    }
}