<script>
	import Avatar from "./Avatar.svelte";
	import IconButton from "./buttons/IconButton.svelte";
	import ArrowLeft from '../assets/icons/arrow-left.svg';
	import Call from '../assets/icons/call.svg';
	import File from '../assets/icons/file.svg';
</script>

<div class="rightbar">
    <div class="next-action">
        <IconButton src={ArrowLeft}/>

    </div>
    <div class="category">
        <div class="action-icon">
            <IconButton type="success" src={Call}/>
        </div>
        <div class="action-icon">
            <IconButton type="danger" src={File}/>
        </div>
    </div>
    <div class="category">
        <div class="category-label">People</div>
        {#each Array(5) as user, index}
            <Avatar avatar={"https://randomuser.me/api/portraits/men/3"+ index +".jpg"} size="small"/>
        {/each}
    </div>

    <div class="category-label">Files</div>
    {#each Array(5) as user, index}
        <div class="action-icon">
            <IconButton src={File}/>
        </div>
    {/each}
</div>

<style>

  .rightbar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rightbar :global(.avatar) {
    margin-bottom: 10px;
  }

  .next-action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 102px;
  }

  .category {
    font-size: 12px;
    text-align: center;
    margin: .5rem 0;
  }

  .rightbar :global(.icon-wrapper) {
    transform: rotate(180deg);
  }

  .action-icon {
    margin-bottom: 5px;
    cursor: pointer;
  }
</style>
