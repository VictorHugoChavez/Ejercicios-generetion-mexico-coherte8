package operadores;

public class Operadores {
	public static void main(String[] args) {
		//Operadores Aritmeticos 
		int a=10;
		int b=20;
		double c= 10.5; // se puede declarar para tener valores flotantes c++
		
		int suma= a+b;
		System.out.println(suma);
		
		String str1 = "El resultado de la suma es de: ";
		System.out.println(str1+suma);
		//resta
		System.out.println("El resultado de la resta es de :" + (a-b));
		//division
		int d=3;
		System.out.println("El resultado de la division es de :"+ a/d);
		
		//double division2 =(double)a/b;
		double division2 = c/b;
		//por lo menos  uno de los datos debe ser de tipo double
		//10.0
		System.out.println("El resultado de la division es: " + division2);
		
		//multiplicacion
		double multiplicacion = c*a*b;
		System.out.println("El resultado de la multiplicacion es: " + multiplicacion);
		
		//modulo
		double modulo = a%c;
		System.out.println("El resultado del modulo es: "+ modulo);
		
		/*
		 *Operador de asignacion
		 * =
		 * 
		 */
		int f=5,e;// iniciar las variables vacias
		e=6;
		System.out.println(f+"-"+e);
		
		//Operadores de eclaracion compuesta
		// +=, -=, *=, /=, %=
		
		int s=0,g=5;
		//g=g+5
		g+=5;
		System.out.println(g);
		 // operadores relacionesles
		/*
		 * <,>,<=,>=
		 * == igualdad
		 * != diferente
		 */
		 int x=10,y=15;
		 String i="Hola";
		 System.out.println(x > y);
		 System.out.println(x < y);
		 System.out.println(x != y);// 
		 //System.out.println(i != x);// son valores distintos y no se pueden comparar
		 
		 //Operador unario
		 /*
		  * ++,--
		  * preasignacion ++k se le asigan ale valor antes de usarse
		  * postasignacion k++ primero lee el valor depeues de la suma1
		  */
		 
		 int k=0,l=0;
		 k++;
		 System.out.println(k);
		 System.out.println(--k);
		 
		 //Precednecia de operadores
		 
		 int operacion = 4+5*6/3;
		 System.out.println(operacion);
		 
		 //operaodr ternario
		 // () ? ():()
		 // es un if..else abreviado
		 //solo nos permite tomar una desisicon
		 
		 //int valor= (edad<=18)? 2:1;
		 
		 int edad=19, valor1= 0,valor2=0;
		 //String resultado = (edad<=18)? "Uno":"Dos";
		 int resultado = (edad<=18)? (valor1=2):(valor2 = 3);
		 System.out.println(resultado);
		 
		 /////////////////////operador logico//////////////////////
		 
		 //and - &&
		 // or - ||
		 // not !
		 
		 System.out.println(true && true); // true
		 System.out.println(false && true); // false
		 System.out.println(true || true); // true
		 System.out.println(false || false);// flase
		 
		}
}
