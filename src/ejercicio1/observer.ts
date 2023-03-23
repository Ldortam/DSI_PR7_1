/**
 * Interface for observer classes
 */
 interface Observer {
  /**
   * En el caso de exisir notificación, la muestra
     * @param observable Elemento al que se observa 
   */
    update(observable: Observable): void;
  }
  