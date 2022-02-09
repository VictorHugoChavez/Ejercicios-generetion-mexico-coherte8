package com.Generetion;

public class main {

	public static void main(String[] args) {
		//Herencia: cuando una clase hereda de otra, esto tiene acceso a las variables
		////cuadrado
		Cuadrado cuadrado1= new Cuadrado();
		cuadrado1.setAlto(10);
		cuadrado1.setLargo(10);
		System.out.println("El area del " + cuadrado1.getNombre() + " es " + 
		cuadrado1.calcularArea() + "y el perimetro es " + cuadrado1.perimetro());
		//cuadrado1.setNombre("Cuadrado");
		//System.out.println(cuadrado1.getNombre());
		
		

		
		////triangulo
		trinagulo triangulo1=new trinagulo();
		triangulo1.setAlto(10);
		triangulo1.setLargo(15);
		System.out.println("El area del " + triangulo1.getNombre() + " es " + triangulo1.calcularArea()
		 + " y el perimetro es "+ triangulo1.perimetro());
		//triangulo1.setNombre("Trangulo Equilatero");
		//System.out.println(triangulo1.getNombre());
	}

}
