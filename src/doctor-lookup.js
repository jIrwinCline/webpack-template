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

  }
  getDoctorData(nameSearch){
      let query = new Promise(function(resolve,reject){

        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.515,-122.413,100&user_key=14214fdbcf0212819e35f8e2d4aa67fb&name=${nameSearch}`;//vvv can i not just say this.nameSearch?

        request.onload = function(){
          if(this.status === 200){
            resolve(request.response);
            console.log("API Request Successful!");
          }else {
            reject(Error(request.statusText));
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
      for (var i = 0; i < 2/*this.doctors.length*/; i++) {

        console.log(this.doctors[i].profile.first_name)
        console.log(this.doctors[i].profile.last_name)
        console.log(this.doctors[i].profile.last_name)
        // let doctor = new DoctorResult(firstName, lastName, address, phone, newPatients)
        //-------------how else to do this?-----------------
        // for (var n = 0; n < this.doctors[i].practices.length; i++) {
        //   console.log(this.doctors[i].practices)
        //   $('#results').append(`<li>${this.doctors.practices}</li>`)
        // }
        //--------------------------------------------------
      }
    }
}
