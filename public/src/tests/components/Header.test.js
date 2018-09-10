import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

//react-test-renderer

test('Should render Header correctly',() => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot(); //create compare the snapshot
    //console.log(renderer.getRenderOutput());
});
