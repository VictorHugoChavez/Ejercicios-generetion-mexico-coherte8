package com.Generetion;

public class Cuadrado extends FiguraGeometrica { // oabstract solo para utilizar para heredar pero no quiere objetos
	public Cuadrado() {
		super("Cuadrado");// ya mas al constructor padre con el parametro 
	}

	@Override
	public float calcularArea() {
		// TODO Auto-generated method stub
		
		return getAlto()*getLargo();
	}

	@Override
	public float perimetro() {
		// TODO Auto-generated method stub
		return getAlto()*4;
	}
	
}
