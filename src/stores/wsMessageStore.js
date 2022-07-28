import { writable } from 'svelte/store';

const messageStore = writable('');

const url = "ws://localhost:5444"

const socket = new WebSocket(url)


// Connection opened
socket.addEventListener('open', function (event) {
	console.log("It's open");
});

// Listen for messages
socket.addEventListener('message', function (event) {
	messageStore.set(event.data);
});

const sendMessage = (message) => {
	if (socket.readyState <= 1) {
		socket.send(message);
	}
}

export default {
	subscribe: messageStore.subscribe,
	sendMessage
}

