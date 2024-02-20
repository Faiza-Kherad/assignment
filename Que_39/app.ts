function carInformation(company: string, modelName: string, ...extraInformation: [string, any][]): any {
    let car: any = {
        company_name: company,
        model: modelName,
    };

    extraInformation.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

console.log(carInformation('Toyota', 'Camry', ['color', 'Black'], ['features', 'GPS, leather seats']));



