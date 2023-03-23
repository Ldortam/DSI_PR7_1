import 'mocha';
import { expect } from 'chai';
import {Suscriptor} from '../../src/ejercicio1/suscriptor'
import { Revista } from '../../src/ejercicio1/revista'
import {Observable} from '../../src/ejercicio1/observable'

describe('Clase Suscriptor tests', () => {
    it('Constructor', () => {
        expect(new Suscriptor(1, 'Pedro', 'Picapiedra')).not.to.be.equal(null)
    })
    it('getId', () => {
        expect(new Suscriptor(1, 'Pedro', 'Picapiedra').getId()).to.be.equal(1)
    })
    it('getNombre', () => {
        expect(new Suscriptor(1, 'Pedro', 'Picapiedra').getNombre()).to.be.eql('Pedro')
    })
    it('getApellidos', () => {
        expect(new Suscriptor(1, 'Pedro', 'Picapiedra').getApellidos()).to.be.eql('Picapiedra')
    })
    it('update', () => {
        let observable: Observable = new Revista(2, '¿Debemos cuidarnos la piel?', 7)
        new Suscriptor(1, 'Pedro', 'Picapiedra').update(observable)
    })
    
})