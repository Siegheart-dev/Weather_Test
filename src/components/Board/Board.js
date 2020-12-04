import React from 'react';
import './Board.css';
import Widget from '@/components/Widget/Widget'
import Title from '@/components/Title/Title'
import FavoriteCityList from '@/containers/FavoriteCityList/FavoriteCityList'
import CurrentCityList from '@/containers/CurrentCityList/CurrentCityList'
import CitySearchForm from '@/containers/CitySearchForm/CitySearchForm'
import { Button } from 'semantic-ui-react'

function refreshPage() {
  window.location.reload(false);
}
class Board extends React.PureComponent {
  render() {
    return (
      <div className="Board">
        <Widget>
          <Title>Search for city</Title>
        </Widget>
        <div>
          <Button onClick={refreshPage} primary>Return</Button>
		    </div>
        <Widget label="Search">
          <CitySearchForm />
        </Widget>

        <Widget label="Current Location">
          <CurrentCityList/>
        </Widget>

        <Widget label="Added to list">
          <FavoriteCityList />
        </Widget>
      </div>
    );
  }
}

export default Board;
