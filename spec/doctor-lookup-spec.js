import { Doctor } from './../src/doctor-lookup.js';
import { DoctorResult } from './../src/doctor-lookup,js'
describe('Doctor', function () {

let doctor = new DoctorResult('John', 'Doe', '123 main st, CA', '5555555555', 'www.doc.com', true)

  it('should return specialized doctors that match the inputted issue', function () {


  });

  it('should return doctors that have the inputted name in their name', function () {

    expect(doctor.firstName).toContain('John');
  });

  it('should return address, phone, website, and accepting new patient status along with the returning the name', function () {

    expect(doctor.address).toBe('123 main st, CA');
    expect(doctor.address).toBe('5555555555');
    expect(doctor.address).toBe('www.doc.com');
    expect(doctor.address).toBe(true);
  });

  it('should  return a notification that states what the error is if the API call results in an error (any message not a 200 OK)', function () {

    expect(triangle.side1).toEqual(3);
  });

  it('should should return a notification that states that no doctors meet the criteria If the query response doesnt include any doctors (for instance, if no doctors meet the search criteria)', function () {

    expect(triangle.side1).toEqual(3);
  });


  // it('should correctly determine whether three lengths can be made into a triangle', function () {
  //     var notTriangle = new Triangle(3, 2, 3);
  //     console.log(notTriangle.checkType());
  //     expect(notTriangle.checkType()).toEqual('not a triangle');
  //
  //
  //   });

});
