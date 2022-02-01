import java.util.Scanner;
//si la cuenta es de menos de 1000
		// sila cuenta es de 1000 - 4999 10%
		// si la cuenta es de 5000 a 9999 20%
		// si la copra es de 10000 o más 30%


public class comprasComparacion {
	public static void main(String[] args) {
	
		System.out.println("Ingrese el valor de su cuenta");
		Scanner x= new Scanner(System.in);
		float cuenta= x.nextInt();
		float cuenta10= cuenta*0.90f;
		float cuenta20=cuenta*0.80f;
		float cuenta30=cuenta*0.70f;
		 if(cuenta<=999) {
			 System.out.println("Lo sentimos para obtener un descuento, su cuenta debe ser mayor a 1000");
		 }else if(cuenta>=1000 && cuenta<5000) {
			 System.out.println("Se le hizo  un descuento del 10% y su cuenta a pagar es de " + cuenta10);
		 }else if(cuenta>=5000 && cuenta <10000) {
			 System.out.println("Se le hizo  un descuento del 20% y su cuenta a pagar es de " + cuenta20); 
		 } else if(cuenta>=10000) {
			 System.out.println("Se le hizo  un descuento del 30% y su cuenta a pagar es de " + cuenta30);
		 }
	}
}
