package com.gatitos;

public class PruebaGato {
	public static void main (String[] arg) {
		Gato g = new Gato(null, 0, false); // creamos el objeto de nuestra clase gato
		/*
		g.nombre="Taco";
		g.patas=3;
		*/
		g.setNombre("Taco");
		g.setPatas(4);
		g.setAdoptado(false);
		
		System.out.println(g);
		System.out.println("El nombre de mi gato es " + g.getNombre());
		
		//excepciones
		//int num1 = 5, num2=0;
		//int resultado = num1/num2;
		//System.out.println(resultado);
	}
}
