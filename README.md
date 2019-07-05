# Doctor Lookup Application

####  Website that will take input to find an appropriate doctor based on the inputted specifications. uses API's and promises to deliver information that is relevant and accurate.

#### By Jacob Irwin-Cline
#### Link https://github.com/jIrwinCline/friday-week6.git

#### Specs:


| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query| Back pain| Back specialist|
A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query.|John|All doctor Johns in the area|
Any doctors that show up on the search will also have first name, last name, address, phone, website, and accepting new patient status shown.| John Doe | John Doe, johndoe@gmail.com, 123 main street, www.drjohn.com, yes accepts new patients|
If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.|bad request|Error message|
If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. |no name matches| 'No doctors match this search, we're sorry|



## Setup/Installation Requirements

* To Use:
* Simply open index.html in a web browser
* enter user information and click enter                  
* choose and click on a planet that you wish to see the age from
* results will appear at the bottom
* feel free to choose multiple planets


## Known Bugs

mercury years seem to come out as 0 instead of an actual value. Will resolve this shortly.

## Support and contact details

feel free to contact the creator by email at jci@pdx.edu or jakobinwins@gmail.com

## Technologies Used

Basic HTML, CSS/bootstrap, and JavaScript/jQuery were used to create this webpage. As well as Webpack, and jasmine/karma for testing.

### License

*MIT*

#### copyright ####

Copyright (c) 2019 Jacob Irwin-Cline
