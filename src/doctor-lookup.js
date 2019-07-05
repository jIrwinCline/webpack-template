import $ from 'jquery'
import { inputName } from './main.js'

export function DoctorResult(firstName, lastName, address, phone, website, newPatients) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.phone = phone;
  this.website = website;
  this.newPatients = true;
}

export class Doctor {
  constructor (name){
    this.nameSearch = name;
    this.issueSearch;
    this.doctors = [];
    this.doctorsOutput = [];

  }
  getDoctorData(nameSearch){
      let query = new Promise(function(resolve,reject){

        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.515,-122.413,100&user_key=14214fdbcf0212819e35f8e2d4aa67fb&name=${nameSearch}`;//vvv can i not just say this.nameSearch?

        request.onload = function(){
          if(this.status === 2000){
            resolve(request.response);
            console.log("API Request Successful!");
          }else {
            reject(Error(request.statusText));
            return 'API Request Unsuccessful'
          }
        }

        request.open("GET", url, true);
        request.send();
      });
      // Promise has to come after the creation of the promise template
      query.then(queryPlaceholder => {
        let docData = JSON.parse(queryPlaceholder);
        console.log(docData);
        for (var i = 0; i < docData.data.length; i++) {
          this.doctors.push(docData.data[i])

        }
        console.log(docData.data[0]);
        console.log(this.doctors)
      })

    }
    printDocArray(){
      for (var i = 0; i < this.doctors.length; i++) {
        let firstName = this.doctors[i].profile.first_name;
        let lastName = this.doctors[i].profile.last_name;
        let address = `${this.doctors[i].practices[0].visit_address.street}  ${this.doctors[i].practices[0].visit_address.city}  ${this.doctors[i].practices[0].visit_address.state}`;
        let phone = this.doctors[i].practices[0].phones[0].number;
        let website = this.doctors[i].practices[0].website;
        let newPatients = this.doctors[i].practices[0].accepts_new_patients;
        console.log(firstName, lastName, address, phone, website, newPatients)
        let doctor = new DoctorResult(firstName, lastName, address, phone, website, newPatients)
        this.doctorsOutput.push(doctor)
        if (this.doctorsOutput.length < 1) {
          return 'No doctors match your search'
        }
        //-------------how else to do this?-----------------
        $('#doctorOutput').append(`${firstName} ${lastName}`);
        $('#doctorOutput').append(`<ul><li>${address}</li><li>${phone}</li><li>${website}</li><li>${newPatients}</li></ul>`);
        //--------------------------------------------------

      }
    }
}
