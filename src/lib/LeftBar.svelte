<script>
	import logo from '../assets/logo.svg';
	import UserCard from "./Leftbar/UserCard.svelte";
	import ChatList from "./Leftbar/ChatList.svelte";
	import {fly, fade} from "svelte/transition"

	export let show = true

	let innerWidth = window.innerWidth;

	$: innerWidth < 990 ? show = false : show = true;
</script>

<svelte:window bind:innerWidth/>


{#if show}
    <div class="leftbar"
         in:fly={{x: -250, opacity: 1}}
         out:fly={{x: -250, opacity: 1, duration: 100}}
    >
        <div class="logo">
            <img src={logo} alt="logo">
        </div>
        <UserCard/>
        <div class="chat-active">
            <div class="chat-active-head">
                <div class="label">
                    Active Chats
                </div>
                <div class="actions">+</div>
            </div>
        </div>
        <ChatList/>
    </div>
{:else }
    <div class="collapsed-leftbar" in:fade={{delay: 100, duration: 150}}>
        <UserCard/>
        <ChatList/>
    </div>
{/if}

<style>
  .collapsed-leftbar {
    width: 120px;
  }
  .collapsed-leftbar :global(.chat-list) {
    padding-right: 0;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
  }
  .collapsed-leftbar :global(.user) {
    border-bottom: 1px solid var(--border-color);
  }
  .collapsed-leftbar :global(.user),
  .collapsed-leftbar :global(.user .avatar),
  .collapsed-leftbar :global(.chat-list .avatar){
    margin: 0;
    padding: .5rem;
    justify-content: center;
  }

  .collapsed-leftbar :global(.user div:not(.avatar)) {
    margin: 0;
  }
  .collapsed-leftbar :global(.user div:not(.avatar)),
  .collapsed-leftbar :global(.chat-list-search),
  .collapsed-leftbar :global(.chat-list-item .content),
  .collapsed-leftbar :global(.chat-list-item .infos) {
    display: none;
  }

  .leftbar {
    width: 353px;
    font-weight: 500;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .logo {
    height: 82px;
    padding: 10px;
    margin-right: 20px;
    border-bottom: 1px solid var(--border-color);
  }

  .logo img {
    margin-bottom: 17px;
  }

  .chat-active {
    padding-right: 20px;
  }

  .chat-active-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 21px;
  }
</style>
