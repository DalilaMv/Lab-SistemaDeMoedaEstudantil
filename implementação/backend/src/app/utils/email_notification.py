import os
import smtplib
from email.message import EmailMessage
from django.conf import settings


def send_email(self, assunto, destinatario, mensagem):
    msg = EmailMessage()
    msg['Subject'] = assunto
    msg['From'] = settings.EMAIL_ADDRESS
    msg['To'] = destinatario
    msg.set_content(mensagem)
    print(assunto,destinatario,mensagem)

    with smtplib.SMTP_SSL('smtp.gmail.com',465) as smtp:
        smtp.login(settings.EMAIL_ADDRESS, settings.EMAIL_PASSWORD)
        smtp.send_message(msg)
    