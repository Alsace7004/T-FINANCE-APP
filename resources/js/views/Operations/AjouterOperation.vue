<template>
    <div>
        <PageTitleComponent module="Module Operations" sousModule="Ajouter une Operation"/>
        <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Ajouter Une Operation</h3>
					</div>
					<div class="chart">
						<!--Formulaire ici-->
                        <div style="display:flex;justify-content:space-between">
                                <div class="input-form-group mb-5">
                                    <select name="" id="">
                                        <option value="">Operation de retrait</option>
                                        <option value="">Operation de depot</option>
                                    </select>
                                </div>
                                <div class="input-form-group mb-5">
                                    <input type="text" placeholder="Client...">
                                </div>
                                <div class="input-form-group mb-5">
                                    <input type="number" placeholder="Montant...">
                                </div>
                                
                        </div>
                                                
                        <div class="mb-5">
                            <button class="add-btn" @click="AjouterOperation">Ajouter</button>
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
            AjouterOperation(){
                alert("L'operation a été effectuée avec success !!!");
            }
        }
    }
</script>