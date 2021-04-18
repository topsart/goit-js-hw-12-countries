import countryCardTpl from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs';
import getRefs from '../js/getRefs';
import errorNotice from '../js/onFetchError.js';

const refs = getRefs();

export default function cardRenderer(country) {
  const pageNotFound = country.status === 404;

  if (pageNotFound) {
    refs.cardContainer.innerHTML = '';
    errorNotice();
    return;
  }

  if (country.length > 10) {
    refs.cardContainer.innerHTML = '';
    errorNotice();
    return;
  }

  if (country.length >= 2 && country.length <= 10) {
    const markupList = countryList(country);
    refs.cardContainer.innerHTML = markupList;
    return;
  }

  const markupCard = countryCardTpl(country);
  refs.cardContainer.innerHTML = markupCard;
}
