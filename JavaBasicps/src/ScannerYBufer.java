import java.util.Scanner;
//http://puntocomnoesunlenguaje.blogspot.com/2012/08/java-scanner.html
public class ScannerYBufer {
	public static void  main (String[] args) {
		Scanner sc = new Scanner(System.in); /// con una vez que se declare ya es mas que suficiente
		
		System.out.println("Introduce un numero");
		int numero1= sc.nextInt();
		sc.nextLine();// es para que se detenga
		
	
		
		System.out.println("Introduce tu nombre");
		String nombre = sc.nextLine(); /// si ponemos el valor next solo jala la informacion hasta que encuentra el valor 
		// por eso se pone nextLine

		sc.close();
		
		System.out.println("Tu nombres es  : " + nombre + ". Tu numero  es : "+ numero1);
		//System.out.println("Introduce otro numero");
		//int numero2 = sc.nextInt();
		
		//System.out.println("Numero1: " + numero1 + "\nNumero 2 : " + numero2);
		
	}
}
