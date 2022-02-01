package Arreglo;

public class ManipularArreglo {
	//Crea una clase llamara ManipularArreglo
	//crea un array con los siguientes números enteros:

	//1, 6, 45, 53, 80, 102, 145, 326, 450, 892
	//Crea un programa que use un ciclo que tome los números de arreglo y devuelva la suma total, la suma de los números pares y la suma de los números impares.
	public static void main(String[] args){
	
	int numeros[];
	numeros = new int [10];
	numeros[0]=1;
	numeros[1]=6;
	numeros[2]=45;
	numeros[3]=53;
	numeros[4]=80;
	numeros[5]=102;
	numeros[6]=145;
	numeros[7]=326;
	numeros[8]=450;
	numeros[9]=892;
	
	int resultado=0;
	int par=0;
	int impar=0;
	
	for(int i=0;i< numeros.length;i++) {
		 resultado=numeros[i]+resultado;
		 if(numeros[i]%2 ==0) {
				par=numeros[i]+par;
			}else if(numeros[i]%2 !=0){
				impar=impar+numeros[i];
			}
				
		}
	System.out.println("El resultado total es " + resultado);
	System.out.println("El resultado de la suma par " + par);
	System.out.println("El resultado total impar " + impar);
	}
	
}

