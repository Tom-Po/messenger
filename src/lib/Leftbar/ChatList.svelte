<script>
	import Avatar from "../Avatar.svelte";
	import Input from "../forms/Input.svelte";
	import searchIcon from '../../assets/icons/search.svg';
    import {activeConversationIndex} from '../../stores/conversations.store.js';

	export let enforceSmall = false;
	let activeIndex = null;

    activeConversationIndex.subscribe(value => {
			activeIndex = value;
    })

	const setActive = (id) => activeConversationIndex.update(index => index = id);

	let innerWidth = window.innerWidth ;
	let avatarSize = "medium";

	$: enforceSmall = innerWidth < 990;
	$: if(enforceSmall) {
		avatarSize = 'small'
    }

</script>

<svelte:window bind:innerWidth/>

<div class="chat-list">
    <div class="chat-list-search">
        <Input placeholder="Search people" icon={searchIcon}/>
    </div>
    <div class="chat-list-item active" class:active={activeIndex === 0} on:click={()=>setActive(0)}>
        <Avatar userName="Henri Mercier" size={avatarSize}/>
        <div class="content">
            <div class="from">David TheBrit</div>
            <div class="last">Bonjour, ouh lala</div>
        </div>
        <div class="infos">
            <div class="infos-count">3</div>
        </div>
    </div>

    {#each Array(10) as user, index}
        <div class="chat-list-item" class:active={activeIndex === index + 1} on:click={()=>setActive(index + 1)}>
            <Avatar avatar={"https://randomuser.me/api/portraits/men/3"+ index +".jpg"} size={avatarSize}/>
            <div class="content">
                <div class="from">David TheBrit</div>
                <div class="last">Bonjour, ouh lala</div>
            </div>
            <div class="infos">
                <div>12.01.22</div>
            </div>
        </div>
    {/each}
</div>

<style>
  .chat-list {
    padding-right: 20px;
    flex-grow: 1;
    overflow-y: scroll;
  }

  .chat-list-search {
    margin-bottom: .5rem;
  }

  .chat-list-item {
    display: flex;
    align-items: center;
    padding: 5px 1rem;
    margin-bottom: 2px;
    border-radius: 8px;
    border: 1px solid var(--white);
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }

  .chat-list-item.active,
  .chat-list-item:hover {
    outline: none;
    border-color: var(--border-color);
    background-color: var(--chat-bg-color);
  }

  .chat-list-item :global(.avatar) {
    margin-right: 20px;
  }

  .content {
    flex-grow: 1;
    padding-right: .5rem;
  }

  .infos {
    font-size: 12px;
    align-self: flex-start;
  }

  .last {
    font-size: 12px;
    opacity: .7;
  }

  .infos-count {
    margin-top: .25rem;
    height: 20px;
    width: 20px;
    background-color: var(--success);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    color: var(--white);
  }
</style>
