package com.generetion;

public class mAIN {

	public static void main(String[] args) {
		
		//Scanner scaner = new Scanner();
		Tacos taco1 = new Tacos("Masa Azul","Suadero",2,"Mediana",54.5f);
	/*	taco1.tipoDeTortilla="Masa Azul";
		taco1.tipoDeGuisado="Suadero";
		taco1.numeroDeTortilla=2;
		taco1.tamanioDeTortilla="Mediana";
		taco1.precio=54.5f;*/
		taco1.subirPrecio(5.50f);
		
		System.out.println(taco1.toString());
		
		/*
		Tacos taco2=new Tacos();
		taco2.tipoDeTortilla="Harina";
		taco2.tipoDeGuisado="Bisteck";
		taco2.numeroDeTortilla=2;
		taco2.tamanioDeTortilla="Grande";
		taco2.precio=42.6f;
		taco2.tipoDeTortilla="Trigo";
		
		System.out.println(taco2.toString());
		
		Tacos taco3= new Tacos("Maiz");
		
		System.out.println(taco3); /// se llama el meotdo toString por default
		*/	
		
		
				
			
	}

}
