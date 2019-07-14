import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor-lookup.js';
import { DoctorResult } from './doctor-lookup.js';


export let inputName;

$(document).ready(function () {
  $('#button1').click(function() {
    $('.buttons').hide();
    $('.issue').show();
    $('#searchIssue').show();
  });
  $('#button2').click(function() {
    $('.buttons').hide();
    $('.name').show();
    $('#searchDoc').show();
  });
  $('#searchDoc').click(function() {
    inputName = $('#name').val();
    const doctorSearch = new Doctor(inputName);
    doctorSearch.getDoctorData(inputName); //vvv better way to input these variables?
    console.log(doctorSearch);
    $('#print').show();
    $('#print').click(function() {
      for (var i = 0; i < doctorSearch.doctors.length; i++) {
        let firstName = doctorSearch.doctors[i].profile.first_name;
        let lastName = doctorSearch.doctors[i].profile.last_name;
        let address = `${doctorSearch.doctors[i].practices[0].visit_address.street}  ${doctorSearch.doctors[i].practices[0].visit_address.city}  ${doctorSearch.doctors[i].practices[0].visit_address.state}`;
        let phone = doctorSearch.doctors[i].practices[0].phones[0].number;
        let website = doctorSearch.doctors[i].practices[0].website;
        let newPatients = doctorSearch.doctors[i].practices[0].accepts_new_patients;
        console.log(firstName, lastName, address, phone, website, newPatients);
        let doctor = new DoctorResult(firstName, lastName, address, phone, website, newPatients);
        doctorSearch.doctorsOutput.push(doctor);
        if (doctorSearch.doctorsOutput.length < 1) {
          return 'No doctors match your search';
        }
        $('#doctorOutput').append(`${firstName} ${lastName}`);
        $('#doctorOutput').append(`<ul><li>${address}</li><li>${phone}</li><li>${website}</li><li>${newPatients}</li></ul>`);
      }
    });
  });
  $('#searchIssue').click(function() {
    let inputIssue = $('#issue').val();
    const doctorIssue = new Doctor('default')
    doctorIssue.getDataByIssue(inputIssue); //vvv better way to input these variables?
    console.log(doctorIssue);
    $('#print').show();
    $('#print').click(function() {

      for (var i = 0; i < doctorIssue.doctors.length; i++) {
        let firstName = doctorIssue.doctors[i].profile.first_name;
        let lastName = doctorIssue.doctors[i].profile.last_name;
        let address = `${doctorIssue.doctors[i].practices[0].visit_address.street}  ${doctorIssue.doctors[i].practices[0].visit_address.city}  ${doctorIssue.doctors[i].practices[0].visit_address.state}`;
        let phone = doctorIssue.doctors[i].practices[0].phones[0].number;
        let website = doctorIssue.doctors[i].practices[0].website;
        let newPatients = doctorIssue.doctors[i].practices[0].accepts_new_patients;
        console.log(firstName, lastName, address, phone, website, newPatients);
        let doctor = new DoctorResult(firstName, lastName, address, phone, website, newPatients);
        doctorIssue.doctorsOutput.push(doctor);
        if (doctorIssue.doctorsOutput.length < 1) {
          return 'No doctors match your search';
        }
        $('#doctorOutput').append(`${firstName} ${lastName}`);
        $('#doctorOutput').append(`<ul><li>${address}</li><li>${phone}</li><li>${website}</li><li>${newPatients}</li></ul>`);
      }
    });
  });

});
