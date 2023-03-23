import 'mocha';
import { expect } from 'chai';
import {Revista} from '../../src/ejercicio1/revista'
import {Observer} from '../../src/ejercicio1/observer'
import {Suscriptor} from '../../src/ejercicio1/suscriptor'

describe('Clase Revista tests', () => {
    it('Constructor', () => {
        expect(new Revista(1,'Nuevo parcial de SSI', 5)).not.to.be.equal(null)
    })
    it('getId', () => {
        expect(new Revista(1,'Nuevo parcial de SSI', 5).getId()).to.be.equal(1)
    })
    it('getArt_Portada', () => {
        expect(new Revista(1,'Nuevo parcial de SSI', 5).getArt_portada()).to.be.eql('Nuevo parcial de SSI')
    })
    it('getN_pags', () => {
        expect(new Revista(1,'Nuevo parcial de SSI', 5).getN_pags()).to.be.equal(5)
    })
    it('getNewNumber', () => {
        expect(new Revista(1,'Nuevo parcial de SSI', 5).getNewNumber()).to.be.equal(false)
    })
    it('subscribe', () => {
        let observer :Observer = new Suscriptor(2, 'Juan', 'Desmayo Paredes')
        let revista = new Revista(1,'Nuevo parcial de SSI', 5)
        revista.subscribe(observer)
        try {
            revista.subscribe(observer)
        } catch (error) {
            console.log('observer was already subscribed');
        }
    })
    it('unsubscribe', () => {
        let observer :Observer = new Suscriptor(2, 'Juan', 'Desmayo Paredes')
        let revista = new Revista(1,'Nuevo parcial de SSI', 5)
        try {
            revista.unsubscribe(observer)
        } catch (error) {
            console.log('observer was already subscribed');
        }
    })
    it('onNewNumber', () => {
        expect(new Revista(1,'Nuevo parcial de SSI', 5).onNewNumber()).to.be.eql(true)
    })
})