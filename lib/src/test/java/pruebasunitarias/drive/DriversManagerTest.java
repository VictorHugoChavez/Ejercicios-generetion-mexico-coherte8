package pruebasunitarias.drive;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class DriversManagerTest {
	private DriversManager driversManager = new DriversManager();

	@Test
	void isAddPassenger() {
		Passenger passenger1 = new Passenger("Victor Hugo","ADGD21654");
		driversManager.addPassenger(passenger1);
		assertEquals(passenger1,driversManager.getPassenger("ADGD21654"));// COMO ESTA BUSCANDO EL VALOR NOS DA UN ERROR
	}
	
	//@DisplayName(Pruebas de conductor)
	@Test
	
	
	void isAddConductor() {
		Driver conductor1 = new Driver("Hugo","AJ6545321",1561.54);
		driversManager.addDriver(conductor1);
		assertEquals(conductor1,driversManager.getDriver("ggsdf"));	
	}
}
