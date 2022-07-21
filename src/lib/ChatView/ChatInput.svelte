<script>
	import Input from "../forms/Input.svelte";
	import IconButton from "../buttons/IconButton.svelte";
	import ArrowSend from '../../assets/icons/arrow-send.svg';
	import Emoticons from '../../assets/icons/emoticons.svg';
	import JoinFile from '../../assets/icons/join.svg';

</script>

<div class="chat-input">
    <div class="input-wrapper">
        <Input/>
    </div>
    <div class="quick-actions">
        <div class="emoticons">
            <IconButton src={Emoticons}/>
        </div>
        <div class="join-file">
            <IconButton src={JoinFile}/>
        </div>
        <div class="send">
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
</style>
