<script>
	import ChatViewHeader from "./ChatView/ChatViewHeader.svelte";
	import Conversation from "./ChatView/Conversation.svelte";
    import ChatInput from "./ChatView/ChatInput.svelte";
</script>

<div class="chat-view">
    <ChatViewHeader/>
    <Conversation/>
    <ChatInput />
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
