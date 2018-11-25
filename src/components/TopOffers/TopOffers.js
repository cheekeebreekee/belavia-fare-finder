import React, { PureComponent } from 'react';

import './styles.css';

const offers = [
  {
    backgroundImage: 'http://kidpassage.com/images/publications/images/1675_Barselona-v-yanvare-01.jpg',
    country: 'Барселону',
    price: '197',
  },
  {
    backgroundImage: 'https://cdn2.tu-tu.ru/image/source/1/8a4d347c03b9ea0272dfc0edcf902f19/',
    country: 'Амстердам',
    price: '287',
  },
  {
    backgroundImage: 'https://www.votpusk.ru/country/ctimages/new/fr01.jpg',
    country: 'Париж',
    price: '307',
    date: 'в январе',
  },
  {
    backgroundImage: 'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?cs=srgb&dl=architectural-design-architecture-buildings-618079.jpg&fm=jpg',
    country: 'Тель-Авив',
    price: '227',
    date: 'в феврале',
  },
  {
    backgroundImage: 'https://cdn2.tu-tu.ru/image/source/1/61446363738e703bc8f63edc7df224cc/',
    country: 'Санкт-Петербург',
    price: '127',
    date: 'в марте',
  },
  {
    backgroundImage: 'http://kidpassage.com/images/publications/images/1675_Barselona-v-yanvare-01.jpg',
    country: 'Барселону',
    price: '197',
    date: 'в апреле',
  },
  {
    backgroundImage: 'https://cdn2.tu-tu.ru/image/source/1/8a4d347c03b9ea0272dfc0edcf902f19/',
    country: 'Амстердам',
    price: '287',
    date: 'в мае',
  },
];

const Offer = ({ backgroundImage, country, price, date }) => (
  <article className="card">
    <div className="picture" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${backgroundImage}`}}></div>
    <div className="content">
      <p className="price">за {price} BYN</p>
      <p className="country">в {country}</p>
      <p className="date">{date}</p>
    </div>
  </article>
);

class TopOffers extends PureComponent {
  render() {
    return (
      <div className="top-offers-container">
        <h2>Топ предложений!</h2>
        <section className="row-2">
          {
            offers.slice(0, 2).map(props => <Offer {...props} />)
          }
        </section>
        <section className="row-5">
          {
            offers.slice(2, 7).map(props => <Offer {...props} />)
          }
        </section>
      </div>
    );
  }
}

export default TopOffers;
