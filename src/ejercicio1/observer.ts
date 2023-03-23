import { Observable } from "./observable";

/**
 * Interface for observer classes
 */
 export interface Observer {
  /**
   * En el caso de exisir notificación, la muestra
     * @param observable Elemento al que se observa 
   */
    update(observable: Observable): void;
  }
  