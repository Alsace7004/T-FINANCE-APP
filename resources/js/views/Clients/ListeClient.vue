<template>
    <div>
        <div>
            <PageTitleComponent module="Module Clients" sousModule="Liste des Clients"/>
            <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Liste des Clients</h3>
						<div class="input-form-group">
                            <input type="text" placeholder="Rechercher par le nom...">
                        </div>
					</div>
					<div class="chart">
						<table>
							<tr>
								<th>#</th>
								<th>Nom</th>
								<th>Prénom</th>
								<th>Adresse</th>
								<th>Salaire</th>
							</tr>
							<tr>
								<td>01</td>
								<td>Ayomi</td>
								<td>Date</td>
								<td>Abé Okuta</td>
								<td>450€</td>
							</tr>
							<tr>
								<td>02</td>
								<td>Ogb</td>
								<td>Recent</td>
								<td>Surulere</td>
								<td>450€</td>
							</tr>
							<tr>
								<td>03</td>
								<td>Mister</td>
								<td>Woos</td>
								<td>Ikorodu</td>
								<td>450€</td>
							</tr>
							<tr>
								<td>04</td>
								<td>Oluwa</td>
								<td>Dolarz</td>
								<td>Banana Island</td>
								<td>450€</td>
							</tr>
							<tr>
								<td>05</td>
								<td>D-</td>
								<td>General</td>
								<td>Lekki</td>
								<td>450€</td>
							</tr>
						</table>
					</div>
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