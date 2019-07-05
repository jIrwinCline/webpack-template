import $ from 'jquery'
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor-lookup.js';



$(document).ready(function () {
  $('#button1').click(function() {
    $('.buttons').hide();
    $('.issue').show();
  })
  $('#button2').click(function() {
    $('.buttons').hide();
    $('.name').show();
  })
  $('#search').click(function() {
    let name = $('#name').val();
    console.log(name)
    const doctorSearch = new Doctor(name);
    doctorSearch.getDoctorData();
    console.log(doctorSearch)
    doctorSearch.printDocArray()
  })
});
