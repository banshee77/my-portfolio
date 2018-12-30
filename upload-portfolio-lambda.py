import boto3
import zipfile
import io
from io import StringIO
import mimetypes

def lambda_handler(event, context):

    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:221146165642:deploy-portfolio-topic')

    try:
        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.wieslawpedzich.com')
        build_bucket = s3.Bucket('portfoliobuild.wieslawpedzich.com')

        portfolio_zip = io.BytesIO()
        build_bucket.download_fileobj('portfolio-build.zip',portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm,ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print ("Job done !")

        topic.publish(Subject="Portfolio Deployer", Message="Portfolio deployed successfully !")
    except:
        topic.publish(Subject="Portfolio Deploy failed", Message="Portfolio was not deployed successfully !")
        raise

    return "Hello from deploy-portfolio lambda"
