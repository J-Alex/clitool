//var input = "nombre";
//var componente = ;

module.exports = function(input){
return `
export const ${input}Component = {
    controller: ${input}Ctrl,
    controllerAs: '${input}',
    template: ${input}.component.html
}
`
};
