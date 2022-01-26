const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();
/* describe('Pruebas unitarias en user-controller'), () => { */
test('add user to userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    console.log(userController.getUsers());
    expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.users).not.toContain(user);
});
test('Probando findByEmail userController', () => {
    let email = 'vic97@live.com.mx'
    let user = new User(2014110239, 'Vicotr Hugo chavez', email)
    userController.add(user);
    expect(userController.findByEmail(email)).toEqual(user) /// el equal es para igual la prueba en objetos 
})

/* }; */

// para hacer la prueba tamien puede ser npm test es como el resumen de npm run test

test('Probando findId ', () => { /// se realiza este de Id
    let id = 2014110239; // se llama una varibela id
    let user = new User(id, 'Vicotr Hugo chavez', 'vic97@live.com.mx') // se cre un usuario con la clase, recordar que es un objeto
    userController.add(user); // se agrega atra ves del objeto y metodo
    expect(userController.findById(id)).toEqual(user) //envio un Id y me regresa un usuario
});
//toequal, hace comparacion de objetos