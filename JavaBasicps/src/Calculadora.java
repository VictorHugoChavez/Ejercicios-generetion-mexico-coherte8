import java.util.Scanner;
/*
 * Pedir al usuario 2 números por consola y preguntarle que desea realizar
 * 1) Suma
 * 2) Resta
 * 3) División
 * 4) Multiplicación
 * 
 * y despues imprimir el resultado
 */


public class Calculadora {
	public static void main (String[] args) {
		System.out.println("Introduce tu primer numero");
		Scanner primernumero= new Scanner(System.in);
		float primero=primernumero.nextFloat();
		System.out.println("Introduce tu segundo numero");
		Scanner segundonumero= new Scanner(System.in);
		float segundo=segundonumero.nextFloat();
		System.out.println("Introduce que operacion desea realizar indicando solo el numero\n1)Suma\n2)Resta\n3)Multiplicacion \n4)Division");
		Scanner operacion= new Scanner(System.in);
		String operaciones=operacion.nextLine();
		float suma= primero+segundo;
		float resta=primero-segundo;
		float multiplicacion=primero*segundo;
		double division= primero/segundo;
		switch(operaciones) {
		case "1":
			System.out.println("La suma de tus numeros ingresados es de " + suma );
			break;
		case "2":
			System.out.println("La resta de tus numeros ingresados es de " + resta );
			break;
		case "3":
			System.out.println("La multiplicacion de tus numero ingresados es de  " + multiplicacion );
			break;
		case "4":
			System.out.println("La division de tus numero ingresados es de  " + division );
			break;
		default:
			System.out.println("ERRRROOOOOOOOOOOOOOO!!!!!!!!!!!  por favor ingrese la operacionque desea relaizar en un rago del 1-4");
			
		}
		
	}
	
}
