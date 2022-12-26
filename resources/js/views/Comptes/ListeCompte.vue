<template>
    <div>
        <PageTitleComponent module="Module Compte" sousModule="Liste des Comptes"/>
        <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Liste des Comptes</h3>
						<div class="input-form-group">
                            <input type="text" placeholder="Rechercher Par le Nom du Client...">
                        </div>
					</div>
					<div class="chart">
						<table>
							<tr>
								<th>#</th>
								<th>Type de Compte</th>
								<th>Clients</th>
								<th>Mise Journaliere</th>
								<th>Ajouté le</th>
							</tr>
							<tr>
								<td>01</td>
								<td>Epargne</td>
								<td>Adebola</td>
								<td>10€</td>
								<td>26-12-2022</td>
							</tr>
							<tr>
								<td>02</td>
								<td>Courant</td>
								<td>Adebayo</td>
								<td>0€</td>
								<td>26-12-2022</td>
							</tr>
							<tr>
								<td>03</td>
								<td>Courant</td>
								<td>Adeshina</td>
								<td>0€</td>
								<td>26-12-2022</td>
							</tr>
							<tr>
								<td>04</td>
								<td>Epargne</td>
								<td>Adebissi</td>
								<td>100€</td>
								<td>26-12-2022</td>
							</tr>
							<tr>
								<td>04</td>
								<td>Epargne</td>
								<td>Adededji</td>
								<td>200€</td>
								<td>26-12-2022</td>
							</tr>
							<tr>
								<td>04</td>
								<td>Epargne</td>
								<td>Adeleke</td>
								<td>600€</td>
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