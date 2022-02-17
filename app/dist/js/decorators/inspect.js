export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metedoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
            const retorno = metedoOriginal.apply(this, args);
            console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map