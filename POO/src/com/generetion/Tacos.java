package com.generetion;

public class Tacos {
	private String tipoDeTortilla;
	private String tipoDeGuisado;
	private int numeroDeTortilla;
	private String tamanioDeTortilla;
	private float precio=0.0f;
	
	public Tacos() {//sobrecarag de construcotres (argumnetos, parametros)
		
	}
	/*
	public Tacos(String tipoDeTortilla) {// pueden tener varios constructores
		this.tipoDeTortilla=tipoDeTortilla;
	}
	public String getTipoDeTortilla(){
		return this.tipoDeTortilla;
	}
	public void setTipoDeTortilla(String tipoDeTortilla) {
		this.tipoDeTortilla=tipoDeTortilla;
	}
	public String getTipoDeGuisado() {
		return this.tipoDeGuisado;
	}
	public void setTipoDeGuisado(String tipoDeGuisado) {
		this.tipoDeGuisado=tipoDeGuisado;
	}
	public String getTamanioDeTortilla(){
		return this.tamanioDeTortilla;
	}
	public void setTamanioDeTortilla(String tamanioDeTortilla) {
		this.tamanioDeTortilla=tamanioDeTortilla;
	}
	public int getNumeroDeTortilla() {
		return this.numeroDeTortilla=numeroDeTortilla;
	}
	public void setNumeroDeTortilla(int tamanioDeTortilla) {
		this.numeroDeTortilla=numeroDeTortilla;
	}
	
	public float getPrecio() {
		return this.precio=precio;
	}
	public void setPrecio(float tamanioDeTortilla) {
		this.precio=precio;
	}
	*/
	//////////////////////

	
	
	
	
	//////////////////////
	
	//el constructor nos ayuda a incializar objetos
	public Tacos(String tipoDeTortilla, String tipoDeGuisado, int numeroDeTortilla,
			String tamanioDeTortilla, float precio) {
		this.tipoDeTortilla=tipoDeTortilla;
		this.tipoDeGuisado=tipoDeGuisado;
		this.numeroDeTortilla=numeroDeTortilla;
		this.tamanioDeTortilla=tamanioDeTortilla;
		this.precio=precio;
	}
	////////////////////////
	///Todo es correspondiente 
	
	public String getTipoDeTortilla() {
		return tipoDeTortilla;
	}
	public void setTipoDeTortilla(String tipoDeTortilla) {
		this.tipoDeTortilla = tipoDeTortilla;
	}
	public String getTipoDeGuisado() {
		return tipoDeGuisado;
	}
	public void setTipoDeGuisado(String tipoDeGuisado) {
		this.tipoDeGuisado = tipoDeGuisado;
	}
	public int getNumeroDeTortilla() {	
		return numeroDeTortilla;
	}
	public void setNumeroDeTortilla(int numeroDeTortilla) {
		if(numeroDeTortilla>0 && numeroDeTortilla<=4) {
			this.numeroDeTortilla = numeroDeTortilla;
		}else {
			throw new IllegalArgumentException("Excedio el numero te tortillas"
					+ "Bajale por estas como estas");
		}
		
	}
	public String getTamanioDeTortilla() {
		return tamanioDeTortilla;
	}
	public void setTamanioDeTortilla(String tamanioDeTortilla) {
		this.tamanioDeTortilla = tamanioDeTortilla;
	}
	public float getPrecio() {
		return precio;
	}
	public void setPrecio(float precio) {
		if(precio>0 && precio<=1000) {
			this.precio = precio;
		}else {
			throw new IllegalArgumentException("COMO TRAGAS, BAJALE POR ESO NO TE DURA QUINCENA");
		}
		
		
	}



//////////////////////





	void preparar() {
		System.out.println("Prepara tu rico taco");
		}
	void vender() {
		System.out.println("Taco vendido");
	}
	void ponerSalsa() {
		System.out.println("Agregando salsa de la que no pica");
	}
	void subirPrecio(float aumento) {
		precio=precio+aumento;
		
	}
	/*@Override
	public String toString() {
		return "Tacos [tipoDeTortilla=" + tipoDeTortilla + ", tipoDeGuisado=" + tipoDeGuisado + ", numeroDeTortilla="
				+ numeroDeTortilla + ", tamanioDeTortilla=" + tamanioDeTortilla + ", precio=" + precio + "]";
	}*/
	
}
