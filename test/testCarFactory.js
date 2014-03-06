// testing regular car
describe("When making a regular car", function() {
    var factory, car;

    beforeEach(function(){
        factory = new CarFactory();
        car = factory.makeCar('regular');
    });
    
    it("should have a regular engine", function() {
       expect(car.engine).toEqual('gasoline'); 
    });
    
    it("should have 4 doors", function() {
       expect(car.doors).toEqual(4); 
    });    

    it('should have the correct manufacure name', function () {
        expect(car.madeBy).toEqual('SCPS');
    });

});

// testing luxury car
describe("When making a luxury car", function() {
    var factory, car;

    beforeEach(function(){
        factory = new CarFactory();
        car = factory.makeCar('luxury');
    });
    
    it("should have a hybrid engine", function() {
       expect(car.engine).toEqual('hybrid'); 
    });
    
    it("should have 4 doors", function() {
       expect(car.doors).toEqual(4); 
    });

    it('should have the correct manufacure name', function () {
        expect(car.madeBy).toEqual('SCPS');
    });
});




describe('When the car type is not in the factory\'s specification', function () {
    it("should throw an exception", function() {
        var factory = new CarFactory();
        expect(function() { factory.makeCar('electronic') }).toThrow();

    })
});