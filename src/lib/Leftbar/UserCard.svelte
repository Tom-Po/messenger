<script>
	import cog from '../../assets/icons/cog.svg';
	import Avatar from "../Avatar.svelte";
	import {user} from "../../stores/wsMessageStore.js";

	export let avatarSize = 'big'

	let innerWidth = window.innerWidth;
	let editMode = false;

	$: innerWidth < 990 ? avatarSize = 'medium' : avatarSize = 'big';


	let inputValue = '';
	let avatar = '';

	const submit = (event) => {
		if (event.key === 'Enter') {
			$user = {
				...$user,
				userName: inputValue,
				avatar: avatar
			}
		}
	}
	const setEditMode = () => editMode = !editMode
</script>

<svelte:window bind:innerWidth/>

<div class="user">
    <Avatar avatar={$user.avatar} size={avatarSize}/>
    <div class="user-infos">
        {#if !editMode}
            <div class="user-name">{$user.userName} - ID : {$user.id}</div>
            <div class="user-role">Front-End Dev / UX Designer</div>
            <div class="user-status">Online</div>
        {:else}
            <input type="text" bind:value={inputValue} on:keypress={submit} placeholder="User name"/>
            <input type="text" bind:value={avatar} on:keypress={submit} placeholder="Avatar"/>
        {/if}
    </div>
    <div class="user-actions">
        <div class="user-action"><img src={cog} alt="Settings" on:click={setEditMode}></div>
    </div>
</div>

<style>
  .user {
    display: flex;
    margin: 35px 0;
    padding-right: 20px;
  }

  .user :global(.avatar) {
    margin-right: 20px;
  }

  .user-infos {
    flex-grow: 1;
    font-weight: 500;
    display: flex;
    flex-direction: column;
  }

  .user-name {
    font-size: 18px;
    line-height: 22px;
  }

  .user-role,
  .user-status {
    font-size: 12px;
    line-height: 16px;
  }

  .user-role {
    flex-grow: 1;
  }

  .user-status {
    color: var(--success);
  }

  .user-action {
    cursor: pointer;
  }
</style>
