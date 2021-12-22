<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each cocktails as cocktail}
<pre>{cocktail.id}</pre>
<div class="cocktail">
    <h2>{cocktail.attributes.title}</h2>
    <p>{cocktail.attributes.instructions}</p>
    {#if cocktail.attributes.ingredients && cocktail.attributes.ingredients.length}
    <ul >
      {#each cocktail.attributes.ingredients as ingredient}
      <pre>{ingredient}</pre>
        <!-- <li>{ingredient} {ingredient.name}</li> -->
      {/each}
    </ul>
    {/if}
  </div>
{/each}


<script lang="ts">
  import type { Cocktail } from '../types/cocktail.type'

  let cocktails: Array<Cocktail> = [];

  const { VITE_CMS_URL_API } = import.meta.env;

  if ( VITE_CMS_URL_API) {
    fetch(`${VITE_CMS_URL_API}/cocktails`)
      .then(res => res.json())
      .then(({data, meta}) => {
        cocktails = data;
        console.log("cocktails", cocktails);
        // console.log(cocktails.data);
      })
      .catch(err => console.log(err));
  }
</script>