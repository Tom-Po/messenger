import {writable, get} from 'svelte/store';

export const user = writable({
	userName: "John doe",
	avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 10)}.jpg`,
	id: '0'
})

const messageStore = writable([{
	id: 123,
	from: {
		avatar: '',
		username: '$activeUser.userName',
		id: '0'
	},
	content: {
		lines: [
			'No content'
		],
		at: new Date().getHours() + ':' + (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()
	}
}]);

const url = "ws://localhost:5444"

const socket = new WebSocket(url)


// Connection opened
socket.addEventListener('open', function (event) {
});

function addMessage(message) {
	// let messages = get(messageStore);
	// console.log(messages)
	// const lastMessage = messages[messages.length - 1];
	// if (lastMessage) {
	// 	const {from: prev} = lastMessage;
	// 	const {from: current} = message;
	// 	if(prev.username === current.username) {
	// 		messages[messages.length - 1].content = {
	// 			lines: [
	// 				...lastMessage.content.lines,
	// 				...message.content.lines
	// 			],
	// 			at: message.content.at,
	// 		}
	// 	}
	// } else {
	// 	messages = [...messages, message]
	// }
	messageStore.update(messages => [...messages, message]);
}

// Listen for messages
socket.addEventListener('message', function (event) {
	const message = JSON.parse(event.data);
	if (message.type && message.type === "auth") {
		const activeUser = get(user)
		console.log(activeUser)
		user.set({
			...activeUser,
			id: message.token
		})
	} else {
		addMessage(JSON.parse(event.data))
	}
});

const sendMessage = (message) => {
	if (socket.readyState <= 1) {
		socket.send(message);
		addMessage(JSON.parse(message))
	}
}

export default {
	subscribe: messageStore.subscribe,
	sendMessage,
	user
}

