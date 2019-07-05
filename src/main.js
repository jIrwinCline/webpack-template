import $ from 'jquery'
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor-lookup.js';

const doctorSearch = new Doctor();

$(document).ready(function () {
  $('button').click(function() {
    doctorSearch.getDoctorData();
    console.log(doctorSearch)
    $('#results').append(doctorSearch.doctors[0])
  })
});
