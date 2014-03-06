/**
 * CarFacory knows how to make certain type of cars
 */

function CarFactory() {
	// by default, it makes regular car
	this.type = 'regular';

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
	// should check to make sure the factory can make 
	// the specific car type

	if (this.car_proto[type] == undefined) {
		throw new Error("Factory can't make this type of car");
	};

	return this.car_proto[type];
}