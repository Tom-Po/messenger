<script>
	import ChatViewHeader from "./ChatView/ChatViewHeader.svelte";
	import Conversation from "./ChatView/Conversation.svelte";
	import ChatInput from "./ChatView/ChatInput.svelte";
	import {conversation} from "../stores/conversations.store.js";
	import {user as activeUser} from "../stores/conversations.store.js";
    import {onMount} from 'svelte';

	const url = "ws://localhost:5444"
	const wss = new WebSocket(url)

	function addMessage(message) {
		let messages = $conversation;
		const lastMessage = messages[messages.length - 1];
		if (
			(lastMessage.from.username === message.from.username
				&& lastMessage.from.username === $activeUser.userName)
			|| (lastMessage.from.username === message.from.username)) {
			messages[messages.length - 1].content = {
				lines: [
					...lastMessage.content.lines,
					...message.content.lines
				],
				at: message.content.at,
			}
		} else {
			messages = [...messages, message]
		}
		$conversation = messages
	}

	//handling message event
	wss.onmessage = function (event) {
		const {data} = event
		addMessage(JSON.parse(data))
	}

	const sendMessage = (event) => {
		wss.send(JSON.stringify(event.detail))
        // addMessage(event.detail)
	}
</script>

<div class="chat-view">
    <ChatViewHeader/>
    <Conversation messages={$conversation}/>
    <ChatInput on:message={sendMessage}/>
</div>

<style>
  .chat-view {
    flex-grow: 1;
    border-radius: 20px;
    background-color: var(--chat-bg-color);
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chat-view :global(.icon-wrapper.success) {
    height: 46px;
    width: 46px;
  }
</style>
