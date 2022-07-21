<script>
	import cog from '../../assets/icons/cog.svg';
	import myFace from '../../assets/myface.jpeg';
	import Avatar from "../Avatar.svelte";

</script>

<div class="user">
    <Avatar avatar={myFace} size="big"/>
    <div class="user-infos">
        <div class="user-name">Tom Poidevin</div>
        <div class="user-role">Front-End Dev / UX Designer</div>
        <div class="user-status">Online</div>
    </div>
    <div class="user-actions">
        <img src={cog} alt="Settings">
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
</style>
