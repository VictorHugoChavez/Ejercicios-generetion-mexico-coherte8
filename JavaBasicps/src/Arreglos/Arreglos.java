package Arreglos;

public class Arreglos {
	public static void main(String[] args){
		// Solo un tipo de dato
		//Especificar el tamaño o la cantiddad de elementos qu va a contener
		
		//Manera 1 
		int numeros[];//Creamos la variable
		numeros = new int [4];//Creando el arreglo 
		
		//Manera 2
		String[] nombres= new String[4];//Basado en 0, [0,1,2,3,4,5,]
		
		//Manera 3
		//array literal
		String[] nombresFrutas= new String[]{"Manzana","Platano","Uvaa","Mango"};
		
		numeros[0] = 10;
		numeros[1] = 8;
		numeros[2]= 100;
		numeros[3]= 200;
		//numeros[4]=200;
		
		nombres[0]=" Juan";
		nombres[1]=" Pedro";
		nombres[2]=" Antonio";
		nombres[3]=" Felipe";
		
		
		System.out.println(numeros[0]);
		System.out.println(numeros[1]);
		System.out.println(numeros);
		
		for(int i=0;i <  numeros.length; i++) {//En array,legth es una propiedad
			System.out.println("Elemento de numeros " + numeros[i]);//[0],[1]
			System.out.println("Elemento de nombre " + nombres[i]);//[0],[1]
			System.out.println("Elemento de frutas " + nombresFrutas[i]);
			System.out.println("------------------------");//[0],[1]
		}
	}
}
