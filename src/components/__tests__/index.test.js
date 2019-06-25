import React from 'react';
import { shallow } from 'enzyme';
import Index from '/../index';
import MovieDetail from 'components/movie_detail';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Index />);
});

it ('shows a comment box', () => {
  expect(wrapped.find(MovieDetail).length).toEqual(1);
});

