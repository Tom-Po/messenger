<script>
	import Avatar from "../Avatar.svelte";
	import BackToTop from "../BackToTop.svelte";
</script>

<div class="conversation">
    <div class="message-group">
        <div class="user-avatar">
            <Avatar avatar={"https://randomuser.me/api/portraits/men/3.jpg"}/>
        </div>
        <div class="message-content">
            <div class="message-content-item">Hello Tom</div>
            <div class="message-content-item">How is it going with feature #123 ?</div>
            <div class="message-content-item"> I expect it to be done by noon</div>
            <div class="message-content-item">Here's a reminder, just in case : Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Accusamus animi aspernatur, blanditiis, distinctio dolorem error est
                excepturi hic ipsa nesciunt nihil odit omnis quaerat quod sunt tempora unde vero vitae?
            </div>
            <span class="message-at">09:35</span>
        </div>
    </div>
    <div class="message-group message-group-user">
        <div class="user-avatar">
            <Avatar avatar={"https://randomuser.me/api/portraits/men/7.jpg"}/>
        </div>
        <div class="message-content">
            <div class="message-content-item">Hey Jerry</div>
            <div class="message-content-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                architecto facere labore quasi quisquam repellat. Amet aspernatur atque eligendi eveniet, ex fugiat
                laborum minima numquam officiis porro reiciendis sunt voluptatum.
            </div>
            <div class="message-content-item">Go fuck yourself, sincerely yours</div>
            <span class="message-at">09:36</span>
        </div>
    </div>
    <div class="message-group">
        <div class="user-avatar">
            <Avatar avatar={"https://randomuser.me/api/portraits/men/3.jpg"}/>
        </div>
        <div class="message-content">
            <div class="message-content-item">Will do thanks for the advice Tom</div>
            <div class="message-content-item">Here's a reminder, just in case : Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Accusamus animi aspernatur, blanditiis, distinctio dolorem error est
                excepturi hic ipsa nesciunt nihil odit omnis quaerat quod sunt tempora unde vero vitae?
            </div>
            <span class="message-at">09:39</span>
        </div>
    </div>
    <div class="message-group">
        <div class="user-avatar">
            <Avatar avatar={"https://randomuser.me/api/portraits/men/3.jpg"}/>
        </div>
        <div class="message-content">
            <div class="message-content-item">Will do thanks for the advice Tom</div>
            <div class="message-content-item">Here's a reminder, just in case : Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Accusamus animi aspernatur, blanditiis, distinctio dolorem error est
                excepturi hic ipsa nesciunt nihil odit omnis quaerat quod sunt tempora unde vero vitae?
            </div>
            <div class="message-content-item">Here's a reminder, just in case : Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Accusamus animi aspernatur, blanditiis, distinctio dolorem error est
                excepturi hic ipsa nesciunt nihil odit omnis quaerat quod sunt tempora unde vero vitae?
            </div>
            <div class="message-content-item">Here's a reminder, just in case : Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Accusamus animi aspernatur, blanditiis, distinctio dolorem error est
                excepturi hic ipsa nesciunt nihil odit omnis quaerat quod sunt tempora unde vero vitae?
            </div>
            <div class="message-content-item">Here's a reminder, just in case : Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Accusamus animi aspernatur, blanditiis, distinctio dolorem error est
                excepturi hic ipsa nesciunt nihil odit omnis quaerat quod sunt tempora unde vero vitae?
            </div>
            <span class="message-at">09:39</span>
        </div>
    </div>
    <div class="message-group message-group-user">
        <div class="user-avatar">
            <Avatar avatar={"https://randomuser.me/api/portraits/men/7.jpg"}/>
        </div>
        <div class="message-content">
            <div class="message-content-item">You fuckin nuts Jerry</div>
            <div class="message-content-item read">Dont touch my PR on # 1234, I dare you</div>
            <span class="message-at">10:01</span>
        </div>
    </div>
    <BackToTop/>
</div>

<style>
  .conversation {
    position: relative;
    flex-grow: 1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    padding: 50px 17px 0 24px;
    line-height: 17px;
  }

  .message-group {
    display: flex;
  }

  .message-content {
    font-weight: 500;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .user-avatar {
    margin-right: 18px;
    display: none;
  }

  .message-content-item {
    margin-bottom: 5px;
    background-color: var(--white);
    color: var(--dark-grey);
    border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
    padding: 12px 20px;
  }

  .message-content-item:first-of-type {
    border-radius: var(--border-radius-md) var(--border-radius-md) var(--border-radius-md) 0;
  }

  .message-content-item:last-of-type {
    border-radius: 0 var(--border-radius-md) var(--border-radius-md) var(--border-radius-md);
  }

  .message-group-user .message-content-item {
    border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
  }

  .message-group-user .message-content-item:first-of-type {
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 var(--border-radius-md);
  }

  .message-group-user .message-content-item:last-of-type {
    border-radius: var(--border-radius-md) 0 var(--border-radius-md) var(--border-radius-md);
  }

  .message-group.message-group-user .message-content-item.read {
    background-color: var(--success);
  }

  .message-at {
    color: var(--blue-grey);
    font-weight: 500;
    font-size: 10px;
  }

  .message-group.message-group-user {
    align-self: flex-end;
  }

  .message-group.message-group-user .message-content-item {
    background-color: var(--blue-grey);
    color: var(--white);
    text-align: right;
  }

  .message-group.message-group-user .message-content {
    align-items: flex-end;
  }

  .message-group.message-group-user .user-avatar {
    order: 2;
    margin-right: 0;
    margin-left: 18px;
  }

  @media screen and (min-width: 990px) {
    .message-content-item {
      max-width: 60%;
    }

    .user-avatar {
      display: block;
    }
  }
</style>
