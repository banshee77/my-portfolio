import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "A Serverless Portfolio",
    'href': "https://portfolio.wieslawpedzich.com/",
    'desc': "In general every time there is a push to a github repository CodePipeline is downloading source code from master branch, compiling it with CodeBuild and deploying to S3 bucket using Lambda. Next with Route53  (domain name management) and CloudFront (infront of S3 bucket) my portfolio is wold wide accessible using serverless architecture.",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/portfolio_architecture.jpg",
      'comment': ""
    }
  },
  {
      'title': "Work Example",
      'href': "https://example.com",
      'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      'image': {
        'desc': "example screenshot of a next project",
        'src': ""
      }
  },
  {
    'title': "Work Example",
    'href': "",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "",
      'desc': "example screenshot of a next project"
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work') );
