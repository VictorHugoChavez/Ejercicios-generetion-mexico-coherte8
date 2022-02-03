import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;
//https://www.adictosaltrabajo.com/2015/09/25/introduccion-a-colecciones-en-java/
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
		//colecciones dinamicas
		//arreglo no	
		}
		*/
		
		//TreeSet
		//esta implementacion ordena los elementos
		//de sus valors
		//es la implementacion mas lenta
		/*
		
		Set<String> frutas = new TreeSet<String>();
		frutas.add("mango");
		frutas.add("granada");
		frutas.add("piña");
		frutas.add("sandia");
		frutas.add("uva");
		frutas.add("mamey");
		frutas.add("platano");
		frutas.add("fresa");
		*/
		
		//LinkedHashSet
		//odena los elementos en orden de inserion
		//es mas costoso
		/*Set<String> frutas = new LinkedHashSet<String>();
		frutas.add("mango");
		frutas.add("granada");
		frutas.add("piña");
		frutas.add("sandia");
		frutas.add("uva");
		frutas.add("mamey");
		frutas.add("platano");
		frutas.add("fresa");
		
		
		
		for(String fruta:frutas) {
			System.out.println(fruta);
			
			
		}
		*/	
		//List
		//se permiten elementos duplicados
		//acceder a elementos especificos
		//busca elementos
		
		//ArrayList
		List<String> pokemones = new ArrayList<String>();
		pokemones.add("chicorita");
		pokemones.add("Eevee");
		pokemones.add("Psyduck");
		pokemones.add("Dragonite");
		pokemones.add("Gengar");
		pokemones.add("New");
		pokemones.add("Flygon");
		pokemones.add("Metapod");
		pokemones.add(2,"Pikachu");
		//remove remueve el elemento de la posicion especificada
		
		pokemones.remove(4);
		
		//set reemplaza el elemnto en la posicion  especificadaa
		pokemones.set(0, "Chikorita");
		
		
		pokemones.add("New");
		// add s agregamos un indice y un ellemnto, posiciona
		//el elemnto en el indice y realiza un desplazamiento 
		//es decir no borra el elemento en la posicion con 
		//el elemnto
		for(String pokemon:pokemones) {
			System.out.println(pokemon);
		}
		System.out.println("********************************************");
		System.out.println(pokemones.get(6));
		//LinkedList
		
		//indexof, nos va devolver la posicion del  primer elemento que encuentra
		//y si el element no se encuentra nos devuelve -1
		
		System.out.println(pokemones.lastIndexOf("tOGEPI"));// como no lo encuentra nos arroja un valor de -1
		//System.out.println(pokemones.lastIndexOf("New")); // busca desde abajo hasta que se encuentre el primer valor 
		//System.out.println(pokemones.indexOf("New")); // busca desde un inicio
		
		//LinkeList
		//Es una lista doblmente enlzada
		//Es mas rapido para insertar y remover elementos
		
		List<String> digimones = new LinkedList<String>();
		digimones.add("Agumon");
		digimones.add("Patamon");
		digimones.add("Andromon");
		digimones.add("geymon");
		digimones.add("Omnimon");
		digimones.add("Belzemon");
		digimones.add("Diaboromon");
		
		//Map
		//asocia claves a valores,  no puede contener claves duplicadas
		// solo puede tener un valor asociado
		//HashMap
		//Tiene mejor rendimineto pero no garantiza un orden
		// a la hora de hacer itereacciones
		
		Map<Integer, String> usuarios = new HashMap<Integer, String>();
		
		usuarios.put(15465,  "Victor Hugo");
		usuarios.put(265421, "Tocayo");
		usuarios.put(35644, "Omar");
		usuarios.put(464654, "Shain");
		usuarios.put(56454, "Rebeca");
		usuarios.put(6654654, "Karla");
		usuarios.put(76541, "Luis");
		usuarios.put(83214564, "Octavio");
		usuarios.put(9564654, "Deny");
		usuarios.put(101251, "Uriel");
		usuarios.put(115465, "Iris");
		
		System.out.println(usuarios.get(6));
		
		//KeySet
		//Nos permite recuperar el nombre de la clave
		System.out.println(usuarios.keySet());
		//values
		//nos permite recuperar el valor directamenete
		System.out.println(usuarios.values());
		// map
		//TreeeMap
		Map<String,String> tamales=new TreeMap<String,String>();
		tamales.put("OAXAQUEÑA", "Mole Rojo");
		tamales.put("Torta", "Mole Verde");
		tamales.put("Torta", "Gansito");
		tamales.put("Salados", "Cochinita");
		
		System.out.println("********************");
		System.out.println(tamales.keySet());
		System.out.println(tamales.values());
		
			System.out.println(tamales);
			tamales.entrySet().forEach(elemento->{
				System.out.println(elemento.getKey());
				System.out.println(elemento.getValue());
			});
			
			//LinkedHashMap
			Map<Integer,String> carros=new LinkedHashMap<Integer,String>();
			carros.put(1, "Volvol");
			carros.put(567, "Pointer");
			carros.put(3, "Mustang");
			
			System.out.println(carros.keySet());
			System.out.println(carros.values());
			
	}
}
