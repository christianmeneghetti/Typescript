export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metedoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`--- Método: ${propertyKey}`);
      console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
      const retorno = metedoOriginal.apply(this, args);
      console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
      return retorno;
    };
    return descriptor;
  };
}
