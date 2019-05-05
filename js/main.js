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
      'comment': "Portfolio Architecture"
    }
  },
  {
      'title': "Todoer",
      'href': "https://todoer.wieslawpedzich.com/",
      'desc': "This time I wanted to learn about Amplify which provides a declarative and easy-to-use API for cloud operations. First off all I have created simple react application which later on has been modified to TODOER (simple To Do list). Now, I could start my journey with Amplify. I have installed dedicated command line <npm install -g @aws-amplify/cli> which makes easy to create & configure AWS cloud services on the fly directly from the local environment. In general the following commands deployed my react application into the cloud: 'amplify configure' enabled access into AWS, 'amplify init' initialized Amplify powered cloud app, 'amplify hosting add' configured S3AndCloudFront operation, 'amplify auth add' configured Cognito User Pool with Autorization Panel for the application, 'amplify api add' configured AppSync with Cognito authorization and DynamoDB table based on provided GraphQLSchema, 'amplify push' built local backend resources and provision it in the cloud, 'amplify publish' built local backend and frontend resources and provision it in the cloud. TADAM ! That's it. For the cleanup I used 'amplify delete' command keeping in mind that it removed only Stacks, but not Buckets and Roles.",
      'image': {
        'desc': "Todoer",
        'src': "images/todoer_architecture.jpg",
        'comment': "Todoer atchitecture"
      }
  },
  {
    'title': "Burger Builder",
    'href': "https://burger-builder.wieslawpedzich.com/",
    'desc': "Here I was learning more about React and Redux. For this exercise as database backend and authentication I was using Firebase, a comprehensive mobile development platform. Regarding AWS I was looking for a simple solution how to ensure that my React application will be deployed to production after every commit. At the end I decided to use Amplify. It's was ready easy. First you need to create repository with your app on GIT. Than go to AWS Amplify console and create new Deployment. There you need to select your GIT repository and build configuration (default is provided by AWS). Additionally I have set email notification for deploymnet triggers . That's it.",
    'image': {
      'desc': "Burger Builder",
      'src': "images/burger_builder_amplify_deploy.jpg",
      'comment': "Amplify Deployment"
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work') );
