<template>
    <div>
        <PageTitleComponent module="Module Client" sousModule="Ajouter un Client"/>
        <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Ajouter Un Client</h3>
					</div>
					<div class="chart">
						<!--Formulaire ici-->
                        <div style="display:flex;justify-content:space-between">
                                <div class="input-form-group mb-5">
                                    <input type="text" placeholder="Nom du client...">
                                </div>
                                <div class="input-form-group mb-5">
                                    <input type="text" placeholder="Prenom du client...">
                                </div>
                                <div class="input-form-group mb-5">
                                    <input type="text" placeholder="Email du client...">
                                </div>
                        </div>

                        <div style="display:flex;justify-content:space-between">
                            <div class="input-form-group mb-5">
                                <input type="text" placeholder="Telephone-1 du client...">
                            </div>
                            <div class="input-form-group mb-5">
                                <input type="text" placeholder="Telephone-2 du client...">
                            </div>
                            <div class="input-form-group mb-5">
                                <input type="text" placeholder="Adresse du client...">
                            </div>
                        </div>
                        
                        <div class="input-form-group mb-5">
                            <select name="" id="">
                                <option value="">Particulier</option>
                                <option value="">Entreprise</option>
                            </select>
                        </div>

                        <div class="mb-5">
                            <button class="add-btn" @click="AjouterClient">Ajouter</button>
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
        },

        methods:{
            AjouterClient(){
                alert("Client Ajouté avec Success !!!");
            }
        }
    }
</script>