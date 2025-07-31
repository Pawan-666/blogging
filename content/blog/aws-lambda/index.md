+++
title = "AWS_Lambda"
description = "Getting started with aws lambda"
date = 2025-07-30
draft = false

[taxonomies]
tags = ["serverless", "aws", "lambda"]
categories = ["Automation"]

[extra]
toc = true
comment = true
+++

# How AWS Lambda Works (Behind the Scenes) ?

**AWS Lambda** is a serverless compute service provided by Amazon Web Services (AWS) that lets you run code without provisioning or managing servers.
. It auto-scales, handles failures, and only charges when your code runs.

[![](/images/2025-07-31-19-07-45.png)](https://docs.aws.amazon.com/lambda/) 


###  Under the Hood

* **Firecracker MicroVMs** power Lambda : these are super lightweight virtual machines that start fast and keep your code secure.
* Lambda reuses environments when possible to avoid cold starts and improve speed.

###  How It’s Triggered

* **Synchronous Invocations**: Real-time calls via **API Gateway** or **Application Load Balancer**. The caller waits for the response.
* **Asynchronous Invocations**: Event-driven from services like **S3**, **SNS**, or **EventBridge**. Events are queued and processed later.

### Event Integration

* Lambda connects with services like **Kinesis**, **DynamoDB Streams**, and **SQS**.
* AWS manages polling and triggers your function automatically as new events arrive.

### Scaling and Performance

* Lambda auto-scales based on incoming requests — no setup needed.
* It uses smart routing and resource management to keep things efficient and fast.

### Tips

* Write **stateless functions** — no local storage or dependencies between runs.
* Use **CloudWatch** for logs and basic monitoring.


## Best Use Cases for AWS Lambda

* **File Processing**: Run code when files are uploaded to **S3** (e.g., image resize).
* **API Backend**: Power lightweight APIs with **API Gateway + Lambda**.
* **Scheduled Tasks**: Automate daily/weekly jobs using **EventBridge**.
* **Data Streams**: Process real-time data from **Kinesis** or **DynamoDB Streams**.
* **Notifications**: Trigger alerts from app events or system logs.
* **Webhooks & Bots**: Handle webhooks or power chatbots (e.g., Slack, Telegram).


## Lambda Pricing (2025)

* **Free Tier**: 1M requests + 400,000 GB-seconds/month
* **Requests**: \$0.20 per million (after free tier)
* **Duration**: Based on memory (128MB–10GB) × execution time
  *(Example: 1GB for 100ms = \~\$0.000000208 per invocation)*

> 💡 Very cost-effective for low-traffic or bursty workloads.

---

Ready to see it in action? Let’s move on to the demo 👇

---

# Demo: Build a Notification Pipeline with AWS Lambda

In this demo, we create a simple **serverless notification system** using:

* **Amazon S3**: To upload ETL export CSVs. Any csv files will work.
* **AWS Lambda**: To process the file on upload.
* **Amazon SNS**: To send file content via email.

Whenever a new file is uploaded to the **`sre_notifications/`** directory inside an S3 bucket, an **S3 trigger** invokes a Lambda function. This function:

1. Reads the uploaded file from S3.
2. Parses its contents (a simple `.csv` in this case).
3. Sends the content as an **email notification** using an **SNS topic**.

This is a classic **event-driven architecture**, where no server is running 24/7. The system responds only when needed(when an csv file is uploaded in the s3 bucket directory) — making it cost-efficient and easy to maintain.

The Lambda function uses environment variables to stay configurable, and IAM roles are set up to allow access to only what’s necessary: reading from S3 and publishing to SNS. This keeps things **secure and modular**.


---


## Creating a sns topic with email subscription in it

Create a sns topic and add subscription to the topic created, I've used my personal gmail test account.

![](/images/sns_topic.png)

Check you mailbox and click on "Confirm subscription". Only after confirmation the green "Confirmed" status will be added to the sns topic subscription above.

![](/images/subscription.png)


## Creation of s3 bucket 
Create a s3 bucket with sub-directory in it, inside this sub-directory we'll upload csv files.

![](/images/bucket_cretion.png)

## Creating lambda function
Create a lambda function with python runtime and leave everything as default.

![](/images/lambda_creation.png)

Lambda function will be created and inside the code section, overwrite with below code. Click on "Deploy".

![](/images/code.png)

## Lambda code

This Lambda code runs automatically when a file is uploaded to a specific folder in an S3 bucket. It checks if the file is in the correct directory (sre_notifications/), reads the file content, and sends that content as an email via an SNS topic.

```python
import boto3
import os
import urllib.parse

s3 = boto3.client('s3')
sns = boto3.client('sns')

SNS_TOPIC_ARN = os.environ.get("SNS_TOPIC_ARN")

def lambda_handler(event, context):
    # Get bucket and key info from S3 event
    record = event['Records'][0]
    bucket = record['s3']['bucket']['name']
    key = urllib.parse.unquote_plus(record['s3']['object']['key'])

    # Skip if file is not under expected directory
    if not key.startswith("sre_notifications/"):
        return {"statusCode": 400, "body": "Invalid directory"}

    # Read the file content
    response = s3.get_object(Bucket=bucket, Key=key)
    content = response['Body'].read().decode('utf-8')

    # Send content as SNS notification
    sns.publish(
        TopicArn=SNS_TOPIC_ARN,
        Subject="ETL Export Job Stuck Notification",
        Message=content
    )

    return {
        'statusCode': 200,
        'body': f"Notification sent for file: {key}"
    }

```

## Environment variables
We need to add the environment variables used in the code. We can add environment variables as key-value pairs on "Configuration->Environment Variables" section. We are passing the sns topic value only.

![](/images/sns_arn_env.png)
`SNS_TOPIC_ARN=arn:aws:sns:ap-southeast-1:916513713561:pawan-test-mail`

## Triggers
Trigger is what is going to invoke the lambda function/code above.

This configuration ensures:

- Only CSV files uploaded(PUT) under sre_notifications/ will trigger the Lambda.
- Other uploads (e.g., in root folder or other file types) won’t trigger the Lambda.
- The function won’t get into a loop unless it's writing files back to the same S3 path (which we’re not doing — so it's safe).

![](/images/triggers.png)

![](/images/triggers_added.png)


![](/images/trigger_event_notification.png)
event notification gets added to the s3 bucket associating the lambda function after trigger is added

## Permissions
When we created Lambda function etl-export-notifier, it got default permissions only for CloudWatch Logs to create logstreams when the lambda function gets called. 

![](/images/permissions.png)

default permissions:
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": "logs:CreateLogGroup",
			"Resource": "arn:aws:logs:ap-southeast-1:916513713561:*"
		},
		{
			"Effect": "Allow",
			"Action": [
				"logs:CreateLogStream",
				"logs:PutLogEvents"
			],
			"Resource": [
				"arn:aws:logs:ap-southeast-1:916513713561:log-group:/aws/lambda/etl-export-notifier:*"
			]
		}
	]
}
```

However, to send an email using Amazon SNS, we also need to grant the Lambda SNS publish permissions. Click in the role name and edit the policies attached to this role. We need to give the lambda function permissions to get the objects inside the s3 bucket directory and also it should be able to push/publish msgs to the sns topics we made earlier.

complete role permissions:
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": "logs:CreateLogGroup",
			"Resource": "arn:aws:logs:ap-southeast-1:916513713561:*"
		},
		{
			"Effect": "Allow",
			"Action": [
				"logs:CreateLogStream",
				"logs:PutLogEvents"
			],
			"Resource": [
				"arn:aws:logs:ap-southeast-1:916513713561:log-group:/aws/lambda/etl-export-notifier:*"
			]
		},
		{
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::pawan-lambda-test-bucket/sre_notifications/*"
        },
        {
            "Effect": "Allow",
            "Action": "sns:Publish",
            "Resource": "arn:aws:sns:ap-southeast-1:916513713561:pawan-test-mail"
        }


	]
}
```


![](/images/iam_roles_permissions_added.png)
The iam role should have ^these access after all the polices are added.

![](/images/total_permissions.png)
The resource based policy statement also gets added itself when we add the trigger.


## Uploading files to s3 bucket
I'm uploading files to the s3 bucket using aws-cli. This can be done programmatically with other approaches but more/less the event process is same. We can upload a normal csv file from the console itself for testing.
![](/images/upl.png)


![](/images/s3_bucket_content.png)
file added after upload

## Function invoke monitoring
We should get the below mail immediately after the upload is complete.

![](/images/mail.png)
mail with the content as csv payload


![](/images/monitoring.png)
Each time the function is invoked, a blue dot is going to be added in the monitor/metrics dashboard.

![](/images/logstream0.png)
Each invoke is also going to add a new log stream . 

We can explore the associated CloudWatch logs to monitor function execution and performance metrics such as cold start duration, memory usage, and invocation success. The cloudwatch log group was created by default earlier when creating the lambda itself.
![](/images/logstream.png)

This is also very handy for debugging errors in the lambda function after it gets invoked.

##  Cleaning_up 
Either use AWS console to delete the lambda function ,sns topic ,s3 bucket, lambda role manually or use the script below to cleanup quickly.

###  **Bash Cleanup Script**

```bash
#!/bin/bash

# === CONFIGURATION ===
LAMBDA_NAME="etl-export-notifier"
S3_BUCKET="pawan-lambda-test-bucket"
SNS_TOPIC_ARN="arn:aws:sns:ap-southeast-1:916513713561:pawan-monotype-mail"
ROLE_NAME="etl-export-notifier-role-tufh1s0v"
POLICY_ARN="arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"

echo "Starting cleanup..."

# 1. Delete Lambda function
echo "Deleting Lambda function..."
aws lambda delete-function --function-name $LAMBDA_NAME

# 2. Empty and delete S3 bucket
echo "Emptying S3 bucket..."
aws s3 rm s3://$S3_BUCKET --recursive

echo "Deleting S3 bucket..."
aws s3api delete-bucket --bucket $S3_BUCKET

# 3. Delete SNS topic
echo "Deleting SNS topic..."
aws sns delete-topic --topic-arn $SNS_TOPIC_ARN

# 4. Detach policy and delete IAM role (optional)
echo "Detaching policy from IAM role..."
aws iam detach-role-policy --role-name $ROLE_NAME --policy-arn $POLICY_ARN

echo "Deleting IAM role..."
aws iam delete-role --role-name $ROLE_NAME

```

Additional lines of code can be incorporated into the Lambda function to enhance its functionality prior to dispatching the notification. The above is a typical lambda workflow. Many different aws services can be part of the lambda workflow. Pricing will rise up according to the complexity and the processing the function needs to do.
