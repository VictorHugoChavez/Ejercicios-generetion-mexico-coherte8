package practicaEncapsulamientos;

public class EncapsulamientoVersion2 {
	public static void main(String[] args) {
		Encapsulamientos Clase1= new Encapsulamientos();
		//Clase1.edad=-5; // el encapsulamiento sirve para no tomar los datos 
		//y modificarlo a nuestro gusto, en una edad no existe una valor -5 o 1000 años
		Clase1.setEdad(10);
		System.out.print("La edad es de : " + Clase1.getEdad());
		
		Clase1.setNombre("Victor Hugo");
		System.out.println("\nMi nombre es : " + Clase1.getNombre());
	}
}
