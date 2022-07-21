<script>
	import LeftBar from "./lib/LeftBar.svelte";
	import Rightbar from "./lib/Rightbar.svelte";
	import ChatView from "./lib/ChatView.svelte";
	let showSidebar = false;
	$: setTimeout(()=> {
			showSidebar = true
    }, 1000)
    console.log(showSidebar)
</script>

<main>
    <LeftBar show={showSidebar}/>
    <ChatView/>
    <Rightbar/>
</main>

<style>
  :root {
    --white: #FFF;
    --green: #76C00D;
    --light-grey: #EAEEF0;
    --blue-grey: #AFBBC6;
    --dark-grey: #7B8793;
    --red: #D03E13;

    --danger: #D03E13;
    --bg-color: var(--white);
    --chat-bg-color: #F9FAFC;
    --border-color: #DBE5ED;
    --font-color: #4B5155;
    --font-color-light: var(--blue-grey);
    --success: #76C00D;
    --icon-bg-color: var(--blue-grey);
    --border-radius: 8px;
    --border-radius-md: 10px;
    --border-radius-lg: 20px;
  }

  main {
    display: flex;
    height: calc(100vh - 40px);
    max-width: 100vw;
    padding: 20px;
    gap: 16px;
    background-color: var(--bg-color);
    color: var(--font-color);
  }
</style>
