import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "A Serverless Portfolio",
    'href': "https://portfolio.wieslawpedzich.com/",
    'desc': "In general every time there is a push to a github repository CodePipeline is downloading source code from master branch, compiling it with CodeBuild and deploying to S3 bucket using Lambda. Additionally the same Lambda triggers SNS email notification with build status. Route53 is managing domain name. CloudFront, which sits infront of S3 bucket, makes portfolio website wold wide accesible. That's it ! We are now able to access portfolio using CI/CD serverless architecture .",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/portfolio_architecture.jpg",
      'comment': ""
    }
  },
  {
      'title': "Todoer",
      'href': "https://todoer.wieslawpedzich.com/",
      'desc': "This time I wanted to learn about Amplify which provides a declarative and easy-to-use API for cloud operations. First off all I have created simple react application which later on has been modified to TODOER (simple To Do list). Now, I could start my journey with Amplify. I have installed dedicated command line <npm install -g @aws-amplify/cli> which makes easy to create & configure AWS cloud services on the fly directly from the local environment. In general the following commands deployed my react application into the cloud: 'amplify configure' enabled access into AWS, 'amplify init' initialized Amplify powered cloud app, 'amplify hosting add' configured S3AndCloudFront operation, 'amplify auth add' configured Cognito User Pool with Autorization Panel for the application, 'amplify api add' configured AppSync with Cognito authorization and DynamoDB table based on provided GraphQLSchema, 'amplify push' built local backend resources and provision it in the cloud, 'amplify publish' built local backend and frontend resources and provision it in the cloud. TADAM ! That's it. For the cleanup I used 'amplify delete' command keeping in mind that it removed only Stacks, but not Buckets and Roles.",
      'image': {
        'desc': "",
        'src': "images/todoer_architecture.jpg",
        'comment': "example screenshot of a next project"
      }
  },
  {
    'title': "Work Example",
    'href': "",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "",
      'src': "",
      'comment': "example screenshot of a next project"
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work') );
