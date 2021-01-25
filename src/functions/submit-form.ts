import { APIGatewayEvent, Context } from 'aws-lambda';
import * as client from '@sendgrid/mail';

export interface Email {
    to?: {
        email: string,
        name?: string
    },
    from?: {
        email: string,
        name?: string
    }
    subject: string,
    message?: string,
    feedback?: string,
    otherFeedback?: string
}

async function sendEmail(client: client.MailService, email: Email): Promise<{statusCode: number, errorMessage?: string}> {
    const data: client.MailDataRequired = {
        from: email.from || '',
        subject: email.subject,
        to: [
            email.to!
        ],
        content: [
            {
                type: "text/plain",
                value: `${email.message ? email.message : `${email.feedback}\n${email.otherFeedback}`}`
            }
        ]
    }
    try {
        await client.send(data);
        return {
            statusCode: 200
        }
    } catch (e) {
        return {
            statusCode: 500,
            errorMessage: `Error : ${JSON.stringify(e)}`
        }
    }
}

exports.handler = function (event: APIGatewayEvent, _: Context, callback: any) {

    console.log(JSON.stringify(event.body));
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || 'no-key';
    const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL || 'contact-test@gitpod.io';

    const email: Email = JSON.parse(event.body!) as Email;

    email.to = {
        email: SENDGRID_TO_EMAIL,
        name: 'Gitpod'
    }

    client.setApiKey(SENDGRID_API_KEY);
    sendEmail(
        client,
        email
    ).then(response => callback(null, { statusCode: response.statusCode, body: email + " added" }))
        .catch(err => callback(err, null));
};
