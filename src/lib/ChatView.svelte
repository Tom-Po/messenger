<script>
	import ChatViewHeader from "./ChatView/ChatViewHeader.svelte";
	import Conversation from "./ChatView/Conversation.svelte";
	import ChatInput from "./ChatView/ChatInput.svelte";
	import {onMount} from 'svelte';
	import store from '../stores/wsMessageStore.js';

	let messages = [];

	onMount(() => {
		store.subscribe(currentMessages => {
			if (!currentMessages || !currentMessages.length) return;
			messages = currentMessages
		})
	})

	const sendMessage = (event) => {
		store.sendMessage(JSON.stringify(event.detail))
	}

</script>

<div class="chat-view">
    <ChatViewHeader/>
    <Conversation messages={messages}/>
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
