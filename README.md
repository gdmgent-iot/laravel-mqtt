# What animal are u?

## Description
This is a Laravel application with a simple view. The user can input a random height. Via an API call, the user will get a random animal that fits the height. The response will be displayed on the view.

### MQTT
The application also listens to an MQTT topic. If a message (with a height) is sent to the topic, the application will display the animal that fits the height.

## Installation
1. Clone the repository
2. Run `composer install`
3. Run `npm install`
4. Run `npm run build`
5. Run `composer run dev``


## Usage witt mqtt

To use the application with MQTT, you need to have a MQTT broker installed. You can install Mosquitto with the following command:

```bash
sudo apt install -y mosquitto mosquitto-clients
```

Enable the service:

```bash
sudo systemctl enable mosquitto.service
```

Test the service:

```bash
mosquitto -v
```

### Enable websocket

First, enable the websocket in the Mosquitto configuration file:

```bash
sudo nano /etc/mosquitto/mosquitto.conf
````

Add the following lines:

```bash
# Standaard MQTT listener op poort 1883
listener 1883
allow_anonymous true

# WebSocket listener op poort 9001
listener 9001
protocol websockets
allow_anonymous true
````

Restart the Mosquitto service:

```bash
sudo systemctl restart mosquitto.service
```

### Test mqtt by subscribing and publishing

Subscribe to a topic:

```bash
mosquitto_sub -h localhost -t test
```

Publish a message to the topic (in a new terminal):

```bash
mosquitto_pub -h localhost -t test -m "Hello, world!"
```

## Usage with the application

Simulate in bash, by sending a height message to the topic:

```bash
mosquitto_pub -h localhost -t animal/jump -m "168"
```