import java.util.Scanner;

public class EstructuraDeControlSwitch {
	///Estructuras de control nos sirve para controlar el flujo de comportamiento de un programa para la toma de desiciones
	/*
	 * Switch(condicion_a_evaluar){
	 * case 'valor':
	 *  codigo a ejecutar
	 *  break
	 * }
	 * case 'n':
	 * codigo a ejecutar
	 * break
	 * default:
	 * codigo a ejecutar
	 * 
	 */
	public static void main (String[] args) {
		//solicitar al usuario un dia d ela semasna y mostrarle un mensaje
		System.out.println("Introduce un dia de la semana y recibe un mensaje ");
		Scanner sc= new Scanner(System.in);
		String dia=sc.nextLine();
		
		
		switch(dia.toLowerCase()) {
		case "lunes":
			System.out.println("Ya casi es Viernes,toma un cafe");
			
			break;
		case "martes":
			System.out.println("Lunes Chiquito. Esto esta cansado, pero ya casi");
			break;
		case "miercoles":
			System.out.println("Miercoles pero a que cosot");
			break;
		case "jueves":
			System.out.println("Es Juebebes enla noche o khe?");
			break;
		case "viernes":
			System.out.println("Virenes de fiesta, hasta morir");
			break;
		case "sabado":
		case "domingo":
			System.out.println("Basta de trabajacion");
			break;
		default:
			System.out.println("Me quieres ver la cara de estupida?? ");
			
			
			

		}
	}
}
