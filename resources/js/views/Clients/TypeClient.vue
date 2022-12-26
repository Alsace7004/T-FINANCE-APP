<template>
   <div>
    <PageTitleComponent module="Module Client" sousModule="Type de Client"/>
    <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Type de Client</h3>
						
					</div>
					<div class="chart">
						<table>
							<tr>
								<th>#</th>
								<th>Type</th>
								<th>Ajouté le</th>
							</tr>
							<tr>
								<td>01</td>
								<td>Particulier</td>
								<td>26-12-2022</td>

							</tr>
							<tr>
								<td>02</td>
								<td>Entreprise</td>
								<td>26-12-2022</td>
							</tr>
						</table>
					</div>
				</div>
			
			</div>
   </div>
</template>

<script>
 import PageTitleComponent from "../../components/PageTitleComponent.vue";
    export default {
        components:{
            PageTitleComponent
        }
    }
</script>