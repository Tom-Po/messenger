<script>
	import IconButton from "../buttons/IconButton.svelte";
	import ArrowSend from '../../assets/icons/arrow-send.svg';
	import Emoticons from '../../assets/icons/emoticons.svg';
	import JoinFile from '../../assets/icons/join.svg';
	import userAvatar from "../../assets/myface.jpeg";

	import {user as activeUser} from "../../stores/conversations.store.js";

	import {createEventDispatcher} from 'svelte';


	let inputValue = '';

	const dispatch = createEventDispatcher();

	function addMessage() {
		if (!inputValue || inputValue === '') return;
		// TODO dans les message si le currentTime est supérieur à 24 heure afficher la date ou le nom du jour < 7
		const currentTime = new Date()

		dispatch('message', {
			id: 123,
			from: {
				avatar: $activeUser.avatar,
				username: $activeUser.userName,
			},
			content: {
				lines: [
					inputValue + " - " + $activeUser.userName
				],
				at: currentTime.getHours() + ':' + (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes()
			}
		},)
		inputValue = ''
	}

	function submit(event) {
		if (event.key === 'Enter') addMessage()
	}
</script>

<div class="chat-input">
    <div class="input-wrapper">
        <input type="text" bind:value={inputValue} on:keypress={submit} placeholder="Type some text"/>
    </div>
    <div class="quick-actions">
        <div class="emoticons">
            <IconButton src={Emoticons}/>
        </div>
        <div class="join-file">
            <IconButton src={JoinFile}/>
        </div>
        <div class="send" on:click={addMessage}>
            <IconButton type="success" src={ArrowSend}/>
        </div>
    </div>
</div>

<style>
  .chat-input {
    border-radius: 30px;
    margin: 21px;
    background-color: var(--white);
    padding: 7px;
  }

  .chat-input :global(input) {
    background-color: var(--white);
    border: none
  }

  .chat-input,
  .quick-actions {
    display: flex;
    align-items: center;
  }

  .quick-actions > div {
    margin: 0 .5rem;
  }

  .input-wrapper {
    flex-grow: 1;
  }

  input {
    padding: 6px 15px;
    font-size: 14px;
    width: 100%;
    font-weight: 500;
    border-radius: var(--border-radius);
  }

  input::placeholder {
    color: var(--font-color-light);
  }

</style>
