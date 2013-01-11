{{#if users}}
    <div class="xxx" id="users" >
  {{#each users}}
    <div id="{{ id }}">
      <p id="name">{{ this.name }}</p>
      <p id="email">{{ this.email }}</p>
    </div>
  {{/each}}
  </div>
{{else}}
  No data, sorry!
{{/if}}
