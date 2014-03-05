describe("Create a car with 4 doors", function() {
    var mycar = new Car({
        type : "van",
        door : 4
    });
    
    it("should have a car with 4 doors", function() {
       expect(myCar.getDoors().toEqual(4)); 
    });
});