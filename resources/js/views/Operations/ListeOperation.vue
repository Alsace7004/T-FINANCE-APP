<template>
    <div>
        <PageTitleComponent module="Module Operations" sousModule="Liste des operations"/>
        <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Liste des Operations</h3>
						<div class="input-form-group">
                            <input type="text" placeholder="Rechercher Par le Nom du Client...">
                        </div>
					</div>
					<div class="chart">
						<table>
							<tr>
								<th>#</th>
								<th>Nom</th>
								<th>Prénom</th>
								<th>Montant</th>
								<th>Type Operation</th>
							</tr>
							<tr>
								<td>01</td>
								<td>Dedji</td>
								<td>Ayo</td>
								<td>450€</td>
								<td>Retrait</td>
							</tr>
							<tr>
								<td>02</td>
								<td>Dedji</td>
								<td>Ayo</td>
								<td>450€</td>
								<td>Retrait</td>
							</tr>
							<tr>
								<td>03</td>
								<td>Dedji</td>
								<td>Ayo</td>
								<td>480€</td>
								<td>Retrait</td>
							</tr>
							<tr>
								<td>04</td>
								<td>Dedji</td>
								<td>Ayo</td>
								<td>450€</td>
								<td>Depot</td>
							</tr>
							<tr>
								<td>05</td>
								<td>Dedji</td>
								<td>Ayo</td>
								<td>450€</td>
								<td>Depot</td>
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