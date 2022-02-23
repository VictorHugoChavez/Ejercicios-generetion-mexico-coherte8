package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class saludos {
	@GetMapping("/")
	public String saludo() {
		return "Hola a todos, todas, todes";
	}
	@GetMapping("/saludo")
	public String saludar(@RequestParam(value="nombre",defaultValue="Value") String nombre) {
		return "Hola " + nombre;
	}
}
