<template>
    <div>
        <PageTitleComponent module="Dashboard" sousModule="Recapitulatif des statistiques"/>
        <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Liste des Administrateurs</h3>
                        <div class="input-form-group">
                            <input type="text" placeholder="Rechercher...">
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
								<td>Ayo</td>
								<td>Dedji</td>
								<td>Admin</td>
								<td>450€</td>
							</tr>
							<tr>
								<td>02</td>
								<td>Fakayode</td>
								<td>Oluwafemi</td>
								<td>Commerciale</td>
								<td>450€</td>
							</tr>
							<tr>
								<td>03</td>
								<td>Akambi</td>
								<td>Modedji</td>
								<td>Admin</td>
								<td>450€</td>
							</tr>
							<tr>
								<td>04</td>
								<td>Titilayo</td>
								<td>Ogunbissi</td>
								<td>Commerciale</td>
								<td>450€</td>
							</tr>
							<tr>
								<td>05</td>
								<td>Ayomide</td>
								<td>Ayoola</td>
								<td>Commerciale</td>
								<td>450€</td>
							</tr>
						</table>
					</div>
				</div>
		</div>
    </div>
</template>

<script>
import PageTitleComponent from "../components/PageTitleComponent.vue";
export default {
    components:{
        PageTitleComponent
    }
}
</script>

<style scoped>
    /*.input-form-group{
        width: 25%;
        display: flex;
        justify-content: right;
    }
    .input-form-group input{
        width: 100%;
        background: var(--grey);
        border-radius: 5px;
        border: none;
        outline: none;
        padding: 10px 36px 10px 16px;
        transition: all .3s ease;
    }*/
</style>