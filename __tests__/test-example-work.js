import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const myWork = [
  {
    'title': "A Serverless Portfolio",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/Portfolio.JPG",
      'comment': ""
    }
  },
  {
      'title': "Work Example",
      'image': {
        'desc': "example screenshot of a project involving chemistry",
        'src': "images/example2.png",
        'comment': `"Chemistry” by Surian Soosay is licensed under CC BY 2.0
             https://www.flickr.com/photos/ssoosay/4097410999"`
      }
  }];

describe("ExampleWork component", () => {
//  let component = shallow(<ExampleWork work={myWork}/>);

  it ("Should be a 'section' element", () => {
    expect("Hello").toEqual("Hello");

    console.log(component.debug());



  });
});
