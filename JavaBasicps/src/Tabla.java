import java.util.Scanner;
public class Tabla {
	
	//Utilizando un bucle while

		//1.- Crea una nueva clase llamada Tabla
		//2.- Copia el siguiente codigo y verifica que funcione

			
			


			    public static void main(String[] args)
			    {
			        Scanner console = new Scanner(System.in);
			        int num;
			        
			        System.out.print("Ingresa cualquier número positivo: ");
			        num = console.nextInt();
			        int i=0;
			        while(i<=10) {
			                
			        System.out.println("Tabla de multiplicar del  " + num + " por " + i + " su resultado es "+ i*num);
			        i++;
			       //Implementa un bucle while que imprima el resultado
			    }
		

		//3.- Debe imprimir la tabla de multiplicar del número en cuestión (solo los primeros 10 números)
			    }
}
