<script>
	import Avatar from "../Avatar.svelte";
</script>

<div class="chat-view-header">
    <h1>Jerry</h1>
    <div class="chat-view-header-avatar">
        <Avatar avatar={"https://randomuser.me/api/portraits/men/3.jpg"}/>
    </div>
</div>

<style>

  .chat-view-header {
    padding: 26px 27px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (min-width: 990px) {
    .chat-view-header-avatar {
      display: none;
    }
  }
</style>
