/**
 * CarFacory knows how to make certain type of cars
 */

function CarFactory() {
	// by default, it makes regular car
	this.type = 'regular';
	this.name = 'SCPS'; // Name of the factory

	this.car_proto =  {
		regular: {
			engine: "gasoline",
			doors: 4
		},

		luxury: {
			engine: 'hybrid',
			doors: 4
		}
	};
}


CarFactory.prototype.makeCar = function (type) {
	if (this.car_proto[type] == undefined) {
		throw new Error("Factory can't make this type of car");
	};

	var car = this.car_proto[type];

	// add manufacture name
	car.madeBy = this.name;

	return car;
}