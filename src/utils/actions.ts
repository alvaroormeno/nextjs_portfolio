"use server";

import React from "react";
import { Resend } from "resend";
// import { validateString, getErrorMessage } from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "./validations";
import ContactFormEmail from "../emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

 
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        if (senderEmail) {
            data = await resend.emails.send({
                from: "Contact Form <onboarding@resend.dev>",
                to: "alvaro@ormeno.org",
                subject: "Message from portfolio contact form",
                reply_to: senderEmail,
                react: React.createElement(ContactFormEmail, {
                    message: message,
                    senderEmail: senderEmail,
                }),
            });
        }
        
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};