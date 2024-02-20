function carInformation(company, modelName) {
    var extraInformation = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraInformation[_i - 2] = arguments[_i];
    }
    var car = {
        company_name: company,
        model: modelName,
    };
    extraInformation.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
console.log(carInformation('Toyota', 'Camry', ['color', 'Black'], ['features', 'GPS, leather seats']));
