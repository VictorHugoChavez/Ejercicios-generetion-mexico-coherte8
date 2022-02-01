package ciclos;

public class Ciclos {
	public static void main(String[] args) {
		//while()
		
/*		int control =0;
		
		while(control<= 10) {
			System.out.println("Control = " + control);
			control++;
		}*/
		
	//	int control = 0;
		//		do {
			//		//codigo a ejecutar
				//	System.out.println("Control = " + control);
					// modificador de la variable control
					//control++;
				//} while(control<3);
		
	//	for(int i= 0;i<3; i++) {
		//	System.out.println("Control = " + i);
		//}
		for(int i=0; i<10; i++) {
			if(i% 2== 0) {
				continue; // permite  saltarnos una jecucion del ciclo 
				//deja que continue el ciclo
				//System.out.println("Control = " + i);
				//break; //solo se ejecuta una vez el for y lo cierra
			}
			System.out.println("Control = " + i);
		}
		for(int i=0; i<3; i++) {
			System.out.println("Control = " + i);
			continue; 
		}
		}
	}


