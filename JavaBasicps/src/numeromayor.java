import java.util.Scanner;

public class numeromayor {
	public static void main(String[] args) {
		System.out.println("Introduce tres numeros diferentes");
		Scanner numero1= new Scanner(System.in);
		Scanner numero2= new Scanner(System.in);
		Scanner numero3= new Scanner(System.in);
		int numero11= numero1.nextInt();
		int numero22= numero2.nextInt();
		int numero33= numero3.nextInt();
		
		if(numero11>numero22) {
			if(numero11>numero33) {
				System.out.println("El numero mayor es " + numero11);}
				else {
					System.out.println("El numero mayor es " + numero33);
				}
			}else {
				if(numero22>numero33) {
					System.out.println("Eres mayor es " +numero22);
				}else {
					System.out.println("El numero mayor es " + numero33 );
			}
		}
	}
}
