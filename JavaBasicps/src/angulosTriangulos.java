import java.util.Scanner;

public class angulosTriangulos {
	public static void main(String[] args) {
		System.out.println("Introduce tres angulos diferentes, para comprobar si es correspondiente a un triangulo");
		Scanner lado1= new Scanner(System.in);
		Scanner lado2= new Scanner(System.in);
		Scanner lado3= new Scanner(System.in);
		int x= lado1.nextInt();
		int y= lado2.nextInt();
		int z= lado3.nextInt();
		int suma =  x+y+z;
		
				if(suma == 180) {
					System.out.println("La suma de los tres lados es " + suma + " por lo tanto es un triangulo");
					}else {
						System.out.println("ERROR!! LOS VALORES QUE INGRESO NO PERTENECEN A UN TRIANGULO ");}
				}
	}

