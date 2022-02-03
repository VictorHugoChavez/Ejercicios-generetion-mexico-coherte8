package metodos;

public class Metodos {
	//Metodo es una funcion
	
	int a,b;
	
	//Metodo void (vacio)
	
	public void sumar(){
		int resultado =a+b;
		System.out.println("El resultaod de sumar" + a + "mas" + b +" es" + resultado);	}
	// metodo con retorno de valores
	public int sumaConRetorno(){
		//int resultado = a+b;
		//return resultado;
		return a+b;
	}
	public double multiplicacionconArgumentos(double arg1,double arg2) {
		double c = arg1;
		double d =arg2;
		return c*d;
	}

	//metodo  estatico
	public static void imprimirNombre( String Nombre) {
	 System.out.println("Mi nombre es : " + Nombre);
	}
}
