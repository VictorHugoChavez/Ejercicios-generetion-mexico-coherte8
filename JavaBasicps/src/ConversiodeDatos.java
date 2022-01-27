
public class ConversiodeDatos {
	public static void main(String[] args) {
		byte numeroByte=10;
		
		short numeroShort=numeroByte;
		
		int numeroInt=numeroShort;
		
		long numeroLong=numeroInt;
		
		int otroInt= (int)numeroLong;
		
		short otroshort= (short) otroInt;
		
		short numero1 = 123;
		short numero2= 7365;
		byte numero3= 12;
		byte numero4=33;
		
		short suma = (short)(numero1+numero2);
		byte suma2=(byte)(numero3+numero4);// puede quedar de esta forma
		
		int suma3=(numero3+numero4); // este de otra forma, pero recordar que se puede desbordar la memmoria
		short suma4=(short)(numero1+numero3);
	}
}
