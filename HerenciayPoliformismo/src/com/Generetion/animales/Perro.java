package com.Generetion.animales;

public class Perro extends Animal implements Mascota,Jugar{

	@Override /// se aplican poliformismo
	public void jugar() {
		// TODO Auto-generated method stub
		System.out.println("Estoy jugando con la pelota");
	}

	@Override
	public void correr() {
		// TODO Auto-generated method stub
		System.out.println("Sigue la pelota");
		
	}

	@Override
	public void baniar() {
		// TODO Auto-generated method stub
		System.out.println("Brnca en la alberca");
		
	}

	@Override
	public void moverLaColita() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void jugarConCajas() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void esuciarse() {
		// TODO Auto-generated method stub
		
	}
	
}
