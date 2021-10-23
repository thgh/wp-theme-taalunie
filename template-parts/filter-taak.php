<div id="filter-taak">
<?php
echo do_shortcode('[searchandfilter fields="search,rol,niveau,vaardigheid,groeperingsvorm,verwerkingsniveau,context" post_types="taak" all_items_labels="Zoeken,Rol,Niveau,Vaardigheid,Groepering,Verwerking,Context"]');
?>
</div>
<script>
  document.querySelector('#filter-taak').addEventListener('change', (evt)=>{
    console.log('evt', evt.target.tagName==='SELECT')
    document.querySelector('#filter-taak [type=submit]').click()
  })
</script>