from celery import shared_task
from django.core.mail import send_mail

from time import sleep

@shared_task
def send_email_task(
    subject: str,
    message: str,
    recipient_list: list,
    from_email: str = "python4dia@gmail.com",
    fail_silently: bool = True,
) -> None:
    send_mail(
        subject=subject,
        message=message,
        from_email=from_email,
        recipient_list=recipient_list,
        fail_silently=fail_silently,
    )
    print("Mail sent!")
    return None