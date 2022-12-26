<template>
    <div>
         <PageTitleComponent module="Module Compte" sousModule="Ajouter un Compte"/>
        <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Ajouter Un Compte</h3>
					</div>
					<div class="chart">
						<!--Formulaire-->
                        <div style="display:flex;justify-content:space-between">
                                <div class="input-form-group mb-5">
                                    <select name="" id="">
                                        <option value="">Compte Epargne</option>
                                        <option value="">Compte Courant</option>
                                    </select>
                                </div>
                                <div class="input-form-group mb-5">
                                    <input type="text" placeholder="Mise journalière...">
                                </div>
                                <div class="input-form-group mb-5">
                                    <input type="text" placeholder="Client...">
                                </div>
                        </div>
                                                
                        <div class="mb-5">
                            <button class="add-btn" @click="AjouterCompte">Ajouter</button>
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
            AjouterCompte(){
                alert("Le compte a été creer avec success !!!");
            }
        }
    }
</script>