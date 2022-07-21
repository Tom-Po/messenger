<script>
	export let value = '';
	export let placeholder = 'Type some text'
	export let icon = null;
</script>

<div class="input-wrapper">
    <input type="text" bind:value={value} placeholder={placeholder}>
    {#if icon}
        <img src={icon} alt="Input icon">
    {/if}
</div>

<style>
  .input-wrapper {
    position: relative;
    display: flex;
  }

  input {
    background-color: var(--chat-bg-color);
    padding: 6px 15px;
    font-size: 14px;
    flex-grow: 1;
    font-weight: 500;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
  }

  input::placeholder {
    color: var(--font-color-light);
  }

  img {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
