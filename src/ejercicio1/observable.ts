import { Observer } from "./observer";

/**
 * Interface for observable classes
 */
 export interface Observable {
    /**
     * Método de subscripción
     * @param observer Elemento que observa
     */
    subscribe(observer: Observer): void;
    /**
     * Método para dejar de seguir
     * @param observer Elemento que observa
     */
    unsubscribe(observer: Observer): void;
    /**
     * Método que proporciona mensajes sobre lo subscrito
     */
    notify(): void;
  }