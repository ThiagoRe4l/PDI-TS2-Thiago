export function domInjector(selector) {
    return function (target, propertyKey) {
        const getter = function () {
            const elemento = document.querySelector(selector);
            return elemento;
        };
    };
}
