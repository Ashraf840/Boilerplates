# Basic Workflow
- Start the redis server.
- Start a django project.
- Start the celery worker.

# Install Dependencies
- `sudo apt install redis-server`
- `pip install django`
- `pip install django-celery`

# Server Initialization (Dev environment)
- `python manage.py runserver`
- `celery -A src.celery worker --loglevel=info`

<br />

> # Summary
Setup a basic configuration for sending email using celery in django. A celery server is integrated inside this project including Redis as the **message broker**. A simple function based view is configured to the root path of the project, where a task (**send email**) gets queued to Redis from that view. Since the celery server is also running, it's worker will immediately executes the task without affecting user interaction with django server.

***NB: Sending email to recipients is defined as the task.*