<script>
	export let src = '';
	export let name = 'Icon button'
    export let type = ''

    const success = type === 'success'
    const light = type === 'light'
    const danger = type === 'danger'

	export let onClick = () => {
		console.log("clicked")
    };

</script>

<div class="icon-wrapper" class:success class:light class:danger on:click={()=> onClick()}>
    <img src={src} alt={name}>
</div>

<style>
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--icon-bg-color);
    opacity: .4;
    transition: opacity 200ms ease;
    cursor: pointer;
  }

  .icon-wrapper.success {
    background-color: var(--success);
    opacity: 1;
  }

  .icon-wrapper.danger {
    background-color: var(--danger);
    opacity: 1;
  }

  .icon-wrapper.light {
    background-color: transparent;
    opacity: 1;
  }

  .icon-wrapper.light svg {
    stroke: var(--blue-grey);
  }

  .icon-wrapper:hover {
    opacity: 1;
  }
  .icon-wrapper:hover img {
    animation: grow 300ms ease-in-out forwards;
  }

  @keyframes grow {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
</style>
