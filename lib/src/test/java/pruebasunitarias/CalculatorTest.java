package pruebasunitarias;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class CalculatorTest {
	
	private final  Calculator calculator = new Calculator ();
	
	@Test //son como anotaciones
	void addition() {
		assertEquals(8,calculator.addNumbers(5, 3));
		
		
		
	}	
	@Test
	void subtraccion() {
		assertEquals(10,calculator.subtractNumbers(20, 10));
	}
	
	@Test
	void division() {
		assertEquals(2,calculator.divideNumbers(10, 5));
	}
	@Test
	void multiplicacion() {
		assertEquals(88,calculator.multiplyNumbers(8,11));
	}
	

}
