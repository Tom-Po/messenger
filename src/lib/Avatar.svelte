<script>
	export let avatar = null;
	export let userName = 'John Doe';
	export let size = 'small';

	let avatarSize = '40px';

	const getUserInitials = (name) => {
		const split = name.split(' ')
		return split[0].charAt(0) + split[1].charAt(0)
	}

	if (size === 'big') {
		avatarSize = '64px'
	} else if (size === 'medium') {
		avatarSize = '50px'
	}

</script>

<div class="avatar" style='--avatarSize: {avatarSize}'>
    {#if avatar}
        <img src={avatar} alt="">
    {:else}
        <div class="avatar-user-name">{getUserInitials(userName)}</div>
    {/if}
    <div class="avatar-status"></div>
</div>

<style>
  .avatar {
    overflow: hidden;
    position: relative;
    height: var(--avatarSize);
    width: var(--avatarSize);
    flex-shrink: 0;
    cursor: pointer;
  }

  .avatar:hover {
    animation: grow 100ms ease-in-out forwards;
  }

  .avatar-status {
    position: absolute;
    background-color: var(--success);
    border: 4px solid var(--white);
    height: 12px;
    width: 12px;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    z-index: 100;
  }

  .avatar img {
    object-fit: cover;
    height: var(--avatarSize);
    width: var(--avatarSize);
    border-radius: 50%;
  }

  .avatar-user-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    background-color: #76C00D44;
    color: #76C00D;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes grow {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
</style>
