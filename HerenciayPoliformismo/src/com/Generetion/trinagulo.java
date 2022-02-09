package com.Generetion;

public class trinagulo extends FiguraGeometrica{
	public trinagulo() {
		super("Triangulo equilatero");
		
		 }
	@Override
	public float calcularArea() {
		 return (getAlto()*getLargo())/2;

	}
	@Override
	public float perimetro() {
		// TODO Auto-generated method stub
		return getAlto()+getLargo()+getAlto();
	}

}
