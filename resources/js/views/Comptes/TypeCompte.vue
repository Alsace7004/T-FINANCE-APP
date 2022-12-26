<template>
    <div>
        <PageTitleComponent module="Module Compte" sousModule="Type de Compte"/>
        <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Type De Comptes</h3>
						
					</div>
					<div class="chart">
						<table>
							<tr>
								<th>#</th>
								<th>Libellé</th>
								<th>Ajouté le</th>
							</tr>
							<tr>
								<td>01</td>
								<td>Epargne</td>
								<td>26-12-2022</td>
							</tr>
							<tr>
								<td>02</td>
								<td>Courant</td>
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