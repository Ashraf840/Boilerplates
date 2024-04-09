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
Setup a basic configuration in django to work with celery as a task scheduler. A celery server is integrated inside this project including Redis as the **message broker**. A simple function based view is configured to the root path of the project, where a task gets queued to Redis from that view. Since the celery server is also running, it's worker will immediately executes the task.

***NB: Print out from 0 to 10 & have a sleep in each print out is defined as the task.*