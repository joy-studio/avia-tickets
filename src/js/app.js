import locations from './store/locations'
import '../css/style.css';
import './plugins';
import formUI from './views/form';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  const form = formUI.form;


  //Events
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  // Handlers

  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // Собрать данные из input
    const origin = formUI.originValue;
    const destination = formUI.destinationValue;
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;

    console.log(origin, destination, depart_date, return_date);
  }
});


// locations.init().then(res => {
//   console.log(res);
//   console.log(locations);
//   console.log(locations.getCitiesByCountryCode('AG'));
// });