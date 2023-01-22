const user = {
    name: 'Andrey',
    age: 26
}
let func = function(str, object) {
    console.log('name' in user);
}
func()