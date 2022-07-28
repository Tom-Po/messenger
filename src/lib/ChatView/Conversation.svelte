<script>
	import Avatar from "../Avatar.svelte";
    import {user as activeUser} from "../../stores/conversations.store.js";

    export let messages = [];

    let prevMessages = [];
	let container;

	function scrollIntoView() {
		setTimeout(() => {
			container.scroll({top: container.scrollHeight, behavior: 'smooth'})
		}, 200)
	}

	$: if(prevMessages !== messages) {
		scrollIntoView();
    }
</script>

<div class="conversation" bind:this={container}>
    {#each messages as message}
        <div class="message-group" class:message-group-user={message.from.username === $activeUser.userName}>
            <div class="user-avatar">
                <Avatar avatar={message.from.avatar}/>
            </div>
            <div class="message-content">
                {#each message.content.lines as line, index}
                    <div class="message-content-item" style="--min-width: {line.length < 40 ? line.length + 'ch' : '0px'}">{line}</div>
                    {#if message.content.lines.length === 1 || index === message.content.lines.length -1 }
                        <span class="message-at">{message.content.at}</span>
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
  .conversation {
    position: relative;
    flex-grow: 1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    padding: 34px 17px 0 24px;
    line-height: 16px;
  }

  .message-group {
    display: flex;
    opacity: .2;
    animation: fadeIn 300ms ease-in-out forwards;
    animation-delay: 300ms;
  }

  .message-content {
    font-weight: 500;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .user-avatar {
    margin-right: 18px;
    display: none;
  }

  .message-content-item {
    margin-bottom: 5px;
    background-color: var(--white);
    color: var(--dark-grey);
    border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
    padding: 12px 20px;
    min-width: var(--min-width);
  }

  .message-content-item:first-of-type {
    border-radius: var(--border-radius-md) var(--border-radius-md) var(--border-radius-md) 0;
  }

  .message-content-item:last-of-type {
    border-radius: 0 var(--border-radius-md) var(--border-radius-md) var(--border-radius-md);
  }

  .message-group-user .message-content-item {
    border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
  }

  .message-group-user .message-content-item:first-of-type {
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 var(--border-radius-md);
  }

  .message-group-user .message-content-item:last-of-type {
    border-radius: var(--border-radius-md) 0 var(--border-radius-md) var(--border-radius-md);
  }

  .message-group.message-group-user .message-content-item.read {
    background-color: var(--success);
  }

  .message-at {
    color: var(--blue-grey);
    font-weight: 500;
    font-size: 10px;
  }

  .message-group.message-group-user {
    align-self: flex-end;
  }

  .message-group.message-group-user .message-content-item {
    background-color: var(--blue-grey);
    color: var(--white);
    text-align: right;
  }

  .message-group.message-group-user .message-content {
    align-items: flex-end;
  }

  .message-group.message-group-user .user-avatar {
    order: 2;
    margin-right: 0;
    margin-left: 18px;
  }

  @keyframes fadeIn {
    from {
      opacity: .2;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 990px) {
    .message-content-item {
      max-width: 60%;
    }

    .user-avatar {
      display: block;
    }
  }
</style>
