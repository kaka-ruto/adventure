from flask import Flask

# Initialize the app
app = Flask(__name__, instance_relative_config = True)

# load the views
from app import views

# load the config file
app.config.from_object('config')