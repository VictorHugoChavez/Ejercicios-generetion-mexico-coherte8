import java.util.HashSet;
import java.util.Set;

public class Colecciones {
	public static void main(String[] args) {
		//Las colecciones nos sirven para alamcenar un conjunto 
		//de objetos
		//La diferencia de las colecciones y objetos
		// es  que las colecciones son dinamicas, pueden cambiar
		//el numero de objetos agregados
		//set  tiene 3 implicaciones
		//no puede contener elementos repetidos

		//HashSet
		//los elementos no mantienen un orden
		//Es la implementacion mas rapida
		//
		/*Set<String> frutas = new HashSet<String>();
		frutas.add("Mango");
		frutas.add("Granada");
		frutas.add("Piña");
		frutas.add("Sandia");
		frutas.add("Uva");
		frutas.add("mamey");
		frutas.add("Platano");
		frutas.add("Fresa");
		*/
		//foreach, puede recorrer una coleccion y en cada
		//recorrdio recupera el valor y lo podemnos almacenar
		//en una variable
		//Sintaxis
		//for(tipoDeDatoElemento variable :elementoARecorrer
		/*for(String fruta:frutas) {
			System.out.println(fruta);
			
		}
		*/
		//TreeSet
		
		
		for(String fruta:frutas) {
			System.out.println(fruta);
			
		}
			
		//LimkedHashSet
	}
}
