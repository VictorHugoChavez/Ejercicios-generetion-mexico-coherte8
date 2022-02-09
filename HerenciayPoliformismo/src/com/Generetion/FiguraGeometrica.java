package com.Generetion;

public  abstract class FiguraGeometrica {
	
	// clases abstractas
	// la clase abstracta no pueden crear objetos
	//clases que pueden contener o no contener metodos abstractos.
	// solo se utiliza para heredar y no crea onjetos
	//Metodo abstracto es ub mentodo que te dice  que hacer, pero no te dice como hacerlo.
	
	
	
 private String nombre;
 private float alto;
 private float largo;
 
 public String getNombre() {
	return nombre;
}
 
 
public FiguraGeometrica(String nombre) { /// constructor es 
	this.nombre=nombre;
}
 
public void setNombre(String nombre) {
	this.nombre = nombre;
}
public float getAlto() {
	return alto;
}
public void setAlto(float alto) {
	this.alto = alto;
}
public float getLargo() {
	return largo;
}
public void setLargo(float largo) {
	this.largo = largo;
}
//poliformismo es cambiar los comportamientos de los metodos, para cambiar ciertos valores que requerimos


public  abstract float  calcularArea(); // a qui le decimos si se hereda  //{
	 //return largo*alto;
// }
public abstract float perimetro();


}
