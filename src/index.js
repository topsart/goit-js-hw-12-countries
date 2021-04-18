import './styles.css';
import { debounce } from 'lodash';
import API from './js/fetchCountries';
import getRefs from './js/getRefs';
import onFetchError from './js/onFetchError';
import cardRenderer from './js/cardRenderer';

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();

  const form = e.target;
  const searchQuery = form.value;

  API.fetchCountry(searchQuery)
    .then(cardRenderer)
    .catch(onFetchError)
    .finally(() => form.reset);
}
